<?php

namespace :namespace_vendor\:namespace_tab_name\Tests;

use Illuminate\Support\Facades\Route;
use Orchestra\Testbench\TestCase as Orchestra;
use :namespace_vendor\:namespace_tab_name\TabServiceProvider;

abstract class TestCase extends Orchestra
{

    protected function getPackageProviders($app)
    {
        return [
            TabServiceProvider::class,
        ];
    }
}
