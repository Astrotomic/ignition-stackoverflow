<?php

namespace Astrotomic\IgnitionStackOverflowTab\Tests;

use Astrotomic\IgnitionStackOverflowTab\TabServiceProvider;
use Facade\Ignition\IgnitionServiceProvider;
use Orchestra\Testbench\TestCase as Orchestra;

abstract class TestCase extends Orchestra
{
    protected function getPackageProviders($app)
    {
        return [
            TabServiceProvider::class,
            IgnitionServiceProvider::class,
        ];
    }
}
