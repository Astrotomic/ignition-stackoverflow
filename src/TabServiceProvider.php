<?php

namespace Astrotomic\IgnitionStackOverflowTab;

use Facade\Ignition\Ignition;
use Facade\IgnitionContracts\SolutionProviderRepository as SolutionProviderRepositoryContract;
use Illuminate\Support\ServiceProvider;

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

        $this->app->make(SolutionProviderRepositoryContract::class)->registerSolutionProvider(StackOverflowSolutionProvider::class);
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
