<?php

namespace :namespace_vendor\:namespace_tab_name;

use Facade\Ignition\Tabs\Tab as BaseTab;

class Tab extends BaseTab
{
    public function name(): string
    {
        return ':tab_name';
    }

    public function component(): string
    {
        return ':package_name';
    }

    public function registerAssets()
    {
        $this->script(':package_name', __DIR__.'/../dist/js/tab.js');
    }

    public function meta(): array
    {
        return [
            'title' => $this->name(),
        ];
    }
}
