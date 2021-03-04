<?php

namespace Astrotomic\IgnitionStackOverflowTab\Tests;

use Astrotomic\IgnitionStackOverflowTab\StackOverflowSolutionProvider;
use Exception;
use Facade\IgnitionContracts\BaseSolution;
use PHPUnit\Framework\MockObject\MockObject;
use ReflectionClass;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Throwable;

final class StackOverflowSolutionProviderTest extends TestCase
{
    /** @test */
    public function it_can_solve_every_throwable(): void
    {
        $this->assertTrue($this->callMethod('canSolve', [
            new Exception(),
        ]));
    }

    /** @test */
    public function it_will_call_all_tested_methods_to_get_solutions(): void
    {
        /** @var StackOverflowSolutionProvider|MockObject $provider */
        $provider = $this->getMockBuilder(StackOverflowSolutionProvider::class)
            ->onlyMethods([
                'getUrl',
                'getResponse',
                'getQuestionsByResponse',
                'getSolutionByQuestion',
            ])
            ->getMock();

        $exception = new Exception('my exception message');
        $url = 'https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&site=stackoverflow&accepted=True&filter=!9YdnSJ*_T&q=my+exception+message';
        $questions = [
            [
                'title' => 'question title',
                'body_markdown' => 'question body',
                'link' => 'https://stackoverflow.com',
            ],
        ];
        $response = json_encode([
            'items' => $questions,
        ]);

        $provider->expects($this->once())->method('getUrl')->with($exception)->willReturn($url);
        $provider->expects($this->once())->method('getResponse')->with($url)->willReturn($response);
        $provider->expects($this->once())->method('getQuestionsByResponse')->with($response)->willReturn($questions);
        $provider->expects($this->once())->method('getSolutionByQuestion')->with($questions[0]);

        $provider->getSolutions($exception);
    }

    /** @test */
    public function it_will_return_empty_array_on_exception(): void
    {
        /** @var StackOverflowSolutionProvider|MockObject $provider */
        $provider = $this->getMockBuilder(StackOverflowSolutionProvider::class)
            ->onlyMethods([
                'getUrl',
            ])
            ->getMock();

        $exception = new Exception('my exception message');

        $provider->expects($this->once())->method('getUrl')->with($exception)->willReturnCallback(function (Throwable $throwable): string {
            throw $throwable;
        });

        $this->assertEquals([], $provider->getSolutions($exception));
    }

    /** @test */
    public function it_will_return_stackoverflow_api_url_with_exception_message(): void
    {
        $this->assertEquals(
            'https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&site=stackoverflow&accepted=True&filter=!9YdnSJ*_T&q=my+exception+message',
            $this->callMethod('getUrl', [
                new Exception('my exception message'),
            ])
        );
    }

    /** @test */
    public function it_will_return_stackoverflow_api_url_with_exception_class(): void
    {
        $this->assertEquals(
            'https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&site=stackoverflow&accepted=True&filter=!9YdnSJ*_T&q=Symfony%5CComponent%5CRouting%5CException%5CRouteNotFoundException',
            $this->callMethod('getUrl', [
                new RouteNotFoundException(),
            ])
        );
    }

    /** @test */
    public function it_will_return_null_on_curl_error(): void
    {
        $this->assertNull($this->callMethod('getResponse', [
            'https://my-unexisting-domain.with-a-strange-tld',
        ]));
    }

    /** @test */
    public function it_will_return_null_on_timeout(): void
    {
        $this->assertNull($this->callMethod('getResponse', [
            'https://reqres.in/api/users?delay=2',
        ]));
    }

    /** @test */
    public function it_will_return_json(): void
    {
        $this->assertJson($this->callMethod('getResponse', [
            'https://reqres.in/api/users',
        ]));
    }

    /** @test */
    public function it_will_return_empty_array_if_response_is_null(): void
    {
        $this->assertEquals([], $this->callMethod('getQuestionsByResponse', [
            null,
        ]));
    }

    /** @test */
    public function it_will_return_empty_array_if_response_is_invalid_json(): void
    {
        $this->assertEquals([], $this->callMethod('getQuestionsByResponse', [
            '{"this is": "invalid JSON"',
        ]));
    }

    /** @test */
    public function it_will_return_empty_array_if_no_items_key_present(): void
    {
        $this->assertEquals([], $this->callMethod('getQuestionsByResponse', [
            '{"this is": "valid JSON"}',
        ]));
    }

    /** @test */
    public function it_will_return_questions_array(): void
    {
        $questions = [
            [
                'title' => 'question title',
                'body_markdown' => 'question body',
                'link' => 'https://stackoverflow.com',
            ],
        ];

        $this->assertEquals($questions, $this->callMethod('getQuestionsByResponse', [
            json_encode(['items' => $questions]),
        ]));
    }

    /** @test */
    public function it_will_return_null_if_title_is_missing(): void
    {
        $question = [
            'body_markdown' => 'question body',
            'link' => 'https://stackoverflow.com',
        ];

        $this->assertNull($this->callMethod('getSolutionByQuestion', [
            $question,
        ]));
    }

    /** @test */
    public function it_will_return_null_if_title_is_empty(): void
    {
        $question = [
            'title' => null,
            'body_markdown' => 'question body',
            'link' => 'https://stackoverflow.com',
        ];

        $this->assertNull($this->callMethod('getSolutionByQuestion', [
            $question,
        ]));
    }

    /** @test */
    public function it_will_return_null_if_body_is_missing(): void
    {
        $question = [
            'title' => 'question title',
            'link' => 'https://stackoverflow.com',
        ];

        $this->assertNull($this->callMethod('getSolutionByQuestion', [
            $question,
        ]));
    }

    /** @test */
    public function it_will_return_null_if_body_is_empty(): void
    {
        $question = [
            'title' => 'question title',
            'body_markdown' => '',
            'link' => 'https://stackoverflow.com',
        ];

        $this->assertNull($this->callMethod('getSolutionByQuestion', [
            $question,
        ]));
    }

    /** @test */
    public function it_will_return_null_if_link_is_missing(): void
    {
        $question = [
            'title' => 'question title',
            'body_markdown' => 'question body',
        ];

        $this->assertNull($this->callMethod('getSolutionByQuestion', [
            $question,
        ]));
    }

    /** @test */
    public function it_will_return_null_if_link_is_empty(): void
    {
        $question = [
            'title' => 'question title',
            'body_markdown' => 'question body',
            'link' => null,
        ];

        $this->assertNull($this->callMethod('getSolutionByQuestion', [
            $question,
        ]));
    }

    /** @test */
    public function it_will_return_base_solution(): void
    {
        $question = [
            'title' => 'question title',
            'body_markdown' => 'question body',
            'link' => 'https://stackoverflow.com',
        ];

        /** @var BaseSolution $solution */
        $solution = $this->callMethod('getSolutionByQuestion', [
            $question,
        ]);

        $this->assertInstanceOf(BaseSolution::class, $solution);
        $this->assertEquals('question title', $solution->getSolutionTitle());
        $this->assertEquals('question body', $solution->getSolutionDescription());
        $this->assertEquals([
            'question title' => 'https://stackoverflow.com',
        ], $solution->getDocumentationLinks());
    }

    /** @test */
    public function it_will_return_base_solution_with_processed_properties(): void
    {
        $question = [
            'title' => 'question &quot;title&quot;',
            'body_markdown' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            'link' => 'https://stackoverflow.com',
        ];

        /** @var BaseSolution $solution */
        $solution = $this->callMethod('getSolutionByQuestion', [
            $question,
        ]);

        $this->assertInstanceOf(BaseSolution::class, $solution);
        $this->assertEquals('question "title"', $solution->getSolutionTitle());
        $this->assertEquals('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ...', $solution->getSolutionDescription());
        $this->assertEquals([
            'question "title"' => 'https://stackoverflow.com',
        ], $solution->getDocumentationLinks());
    }

    /** @test */
    public function it_will_remove_the_basepath_path_from_the_query()
    {
        $base_path = base_path();

        $exception_message = "syntax error, unexpected 's' (T_STRING), expecting function (T_FUNCTION) or const (T_CONST) (View: {$base_path}/resources/views/welcome.blade.php)";

        $query = urlencode("syntax error, unexpected 's' (T_STRING), expecting function (T_FUNCTION) or const (T_CONST) (View: /resources/views/welcome.blade.php)");

        $this->assertEquals(
            "https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=5&order=desc&sort=relevance&site=stackoverflow&accepted=True&filter=!9YdnSJ*_T&q={$query}",
            $this->callMethod('getUrl', [
                new Exception($exception_message),
            ])
        );
    }

    protected function callMethod(string $method, array $args)
    {
        $class = new ReflectionClass(StackOverflowSolutionProvider::class);
        $method = $class->getMethod($method);
        $method->setAccessible(true);

        return $method->invokeArgs(new StackOverflowSolutionProvider(), $args);
    }
}
