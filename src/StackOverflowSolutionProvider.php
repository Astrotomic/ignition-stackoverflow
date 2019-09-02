<?php

namespace Astrotomic\IgnitionStackOverflowTab;

use Exception;
use Throwable;
use Illuminate\Support\Str;
use Facade\IgnitionContracts\BaseSolution;
use Facade\IgnitionContracts\HasSolutionsForThrowable;

class StackOverflowSolutionProvider implements HasSolutionsForThrowable
{
    public function canSolve(Throwable $throwable): bool
    {
        return true;
    }

    public function getSolutions(Throwable $throwable): array
    {
        try {
            $url = $this->getUrl($throwable);

            $response = $this->getResponse($url);

            $questions = $this->getQuestionsByResponse($response);

            return array_filter(array_map([$this, 'getSolutionByQuestion'], $questions));
        } catch (Exception $exception) {
            return [];
        }
    }

    protected function getSolutionByQuestion(array $question): ?BaseSolution
    {
        if (empty($question['title'])) {
            return null;
        }

        if (empty($question['body_markdown'])) {
            return null;
        }

        if (empty($question['link'])) {
            return null;
        }

        $title = html_entity_decode($question['title'], ENT_QUOTES);
        $description = Str::words(html_entity_decode($question['body_markdown'], ENT_QUOTES), 50, ' ...');
        $link = $question['link'];

        return BaseSolution::create($title)
            ->setSolutionDescription($description)
            ->setDocumentationLinks([$title => $link]);
    }

    protected function getQuestionsByResponse(?string $response): array
    {
        if ($response === null) {
            return [];
        }

        $data = json_decode($response, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return [];
        }

        return $data['items'] ?? [];
    }

    protected function getResponse(string $url): ?string
    {
        $curl = curl_init($url);

        curl_setopt($curl, CURLOPT_ENCODING, 'gzip');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT_MS, 500);
        curl_setopt($curl, CURLOPT_TIMEOUT_MS, 1000);

        $response = curl_exec($curl);

        curl_close($curl);

        if (empty($response)) {
            return null;
        }

        return $response;
    }

    protected function getUrl(Throwable $throwable): string
    {
        $query = $throwable->getMessage();

        if (empty($query)) {
            $query = get_class($throwable);
        }

        $query = http_build_query([
            'page' => 1,
            'pagesize' => 5,
            'order' => 'desc',
            'sort' => 'relevance',
            'site' => 'stackoverflow',
            'accepted' => 'True',
            'filter' => '!9YdnSJ*_T',
            'q' => urlencode($query),
        ]);

        return 'https://api.stackexchange.com/2.2/search/advanced?'.urldecode($query);
    }
}
