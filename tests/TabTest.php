<?php

namespace Astrotomic\IgnitionStackOverflowTab\Tests;

use Astrotomic\IgnitionStackOverflowTab\Tab;

final class TabTest extends TestCase
{
    /** @test */
    public function it_has_the_correct_name(): void
    {
        $tab = new Tab();

        $this->assertEquals('Stack Overflow', $tab->name());
    }

    /** @test */
    public function it_has_the_correct_component(): void
    {
        $tab = new Tab();

        $this->assertEquals('ignition-stackoverflow', $tab->component());
    }

    /** @test */
    public function it_has_the_correct_scripts(): void
    {
        $tab = new Tab();

        $this->assertArrayHasKey('ignition-stackoverflow', $tab->scripts);
        $this->assertStringEndsWith('dist/js/tab.js', $tab->scripts['ignition-stackoverflow']);
    }

    /** @test */
    public function it_has_no_styles(): void
    {
        $tab = new Tab();

        $this->assertEmpty($tab->styles);
    }
}
