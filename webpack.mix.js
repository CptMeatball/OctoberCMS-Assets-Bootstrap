let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
var theme = 'preflight';
var url = 'https://preflight.test';

mix.options({ processCssUrls: false });

mix.setPublicPath('themes/'+theme+'/assets/');
mix.sass('./themes/'+theme+'/assets/src/scss/theme.scss', 'dist/theme.css');

// mix.scripts([
//     './themes/'+theme+'/assets/src/js/app.js',
// ], 'themes/'+theme+'/assets/dist/app.js');

mix.version();

mix.browserSync({
    proxy: url,
    files: [
        'themes/'+theme+'/assets/dist/**/*',
        'themes/'+theme+'/layouts/**/*',
        'themes/'+theme+'/pages/**/*',
        'themes/'+theme+'/partials/**/*',
    ]
});