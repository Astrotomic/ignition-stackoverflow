<?php

namespace Astrotomic\IgnitionStackOverflowTab;

use Facade\Ignition\Ignition;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Astrotomic\IgnitionStackOverflowTab\Http\Middleware\Authorize;

class TabServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Ignition::tab(app(Tab::class));
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
