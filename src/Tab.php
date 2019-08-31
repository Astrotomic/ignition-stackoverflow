<?php

namespace Astrotomic\IgnitionStackOverflowTab;

use Facade\Ignition\Tabs\Tab as BaseTab;

class Tab extends BaseTab
{
    public function name(): string
    {
        return 'Stack Overflow';
    }

    public function component(): string
    {
        return 'ignition-stackoverflow';
    }

    public function registerAssets(): void
    {
        $this->script($this->component(), __DIR__.'/../dist/js/tab.js');
    }
}
