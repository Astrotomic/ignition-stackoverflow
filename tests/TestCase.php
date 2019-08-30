<?php

namespace Astrotomic\IgnitionStackOverflowTab\Tests;

use Illuminate\Support\Facades\Route;
use Orchestra\Testbench\TestCase as Orchestra;
use Astrotomic\IgnitionStackOverflowTab\TabServiceProvider;

abstract class TestCase extends Orchestra
{

    protected function getPackageProviders($app)
    {
        return [
            TabServiceProvider::class,
        ];
    }
}
