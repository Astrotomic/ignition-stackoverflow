const mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix
    .setPublicPath('dist')
    .js('resources/js/tab.js', '')
    .sass('resources/sass/tab.scss', '')
    .options({
        processCssUrls: false,
    })
    .purgeCss()
;
