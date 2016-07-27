# OctoberCMS Assets Bootstrap
Initial assets initialization for easy setup independent of theme or October installation. OAB comes with a package.json for installation of gulp packages, bower.json for dependency management and a gulpfile that concats, minifies and sourcemaps all bower components that have JS and CSS files.

## Usage
### Initial setup and dependency management
OAB uses NPM and Bower for its local packages, so the workflow is just as any other NPM/Gulp/Bower workflow. First, install the required NPM packages so Gulp can do it's thing.

    npm update

Next, install any bower dependencies like you always would with Bower.

    bower install <package-name>

If you've added bower components run the following gulp commands to set up JS and CSS files.

For CSS

    gulp build-bower-css

For JS

    gulp build-bower-js

This gathers all `*.css` and `.js` files in the `bower_components`, minifies it and writes it to the `css/` and `js` directories respectively. The default filenames are `bower.vendors.css` and `bower.vendors.js`.

### Theme CSS files
Next to the vendor files, the gulpfile actively watches for any changes in the `scss/` directory and compiles this to `css/theme.css`.

    gulp watch

Errors are handled by `gulp-plumber`, so you don't have to restart your `watch` task every time you have errors in your theme's css. The CSS output is autoprefixed and autominified, soy ou don't have to worry about that.


## Package.json dependencies
- "gulp": "^3.9.1",
- "gulp-autoprefixer": "^3.1.0",
- "gulp-clean-css": "^2.0.11",
- "gulp-concat-sourcemap": "^1.3.1",
- "gulp-plumber": "^1.1.0",
- "gulp-sass": "^2.3.2",
- "gulp-sass-glob": "^1.0.6",
- "gulp-uglify": "^1.5.4",
- "main-bower-files": "^2.13.1"

## Contributing
If you want to contribute to this snippet, please feel free to shoot in a PR or add an issue on the issue tracker.

## Contact
Antonie Hogewoning - Rebel59 - anton@rebel59.nl
