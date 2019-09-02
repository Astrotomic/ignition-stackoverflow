<?php

namespace Astrotomic\IgnitionStackOverflowTab\Tests;

use Facade\Ignition\IgnitionServiceProvider;
use Orchestra\Testbench\TestCase as Orchestra;
use Astrotomic\IgnitionStackOverflowTab\TabServiceProvider;

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
