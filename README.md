
## Using this skeleton (remove this section after you have completed these steps)

First clone this repo to your development machine and remove the `.git` directory. Next run `git init` to create another repo. Create a new repo on GitHub (or another source control saas) and point the origin remote of your cloned repo to the one you just created. Here's an example: `git remote add origin git@github.com:facade/newly-created-repo.git`. Commit all files and push to master.

Next replace these variables in all files of the project and delete this paragraph:
 - `:author_name` (example: 'Marcel Pociot')
 - `:author_username` (example: 'mpociot')
 - `:author_email` (example: 'marcel@flareapp.io')
 - `:package_name` (example: 'ignition-stack-overflow')
 - `:package_description` (example: 'A tab to fetch stackoverflow answers')
 - `:vendor` (example: 'facade')
 - `:namespace_vendor` (example: 'Facade')
 - `:namespace_tab_name` (example: 'StackOverflowTab')
 - `:tab_name` (example: 'Stack Overflow')
 
 Next run `composer install`, `yarn` and `yarn production`.
 
 To use the tab in a Laravel app add this line in the `require` section of `composer.json`.
 
 ```
    ":vendor/:package_name": "*",
```
 
 In your Laravel app add a `repositiories` section to the `composer.json` with the path to your package repo.
 
 ```
     "repositories": [
         {
             "type": "path",
             "url": "../your-new-package-repo"
         }
     ]
```
 
Now you're ready to develop your package inside a Laravel app. 
 
**When you are done with the steps above delete everything above!**

# :package_description

[![Latest Version on Packagist](https://img.shields.io/packagist/v/:vendor/:package_name.svg?style=flat-square)](https://packagist.org/packages/:vendor/:package_name)
[![Build Status](https://img.shields.io/travis/:vendor/:package_name/master.svg?style=flat-square)](https://travis-ci.org/:vendor/:package_name)
[![Quality Score](https://img.shields.io/scrutinizer/g/:vendor/:package_name.svg?style=flat-square)](https://scrutinizer-ci.com/g/:vendor/:package_name)
[![Total Downloads](https://img.shields.io/packagist/dt/:vendor/:package_name.svg?style=flat-square)](https://packagist.org/packages/:vendor/:package_name)


This is where your description should go. Try and limit it to a paragraph or two.

Add a screenshot of the tab here.

## Installation

You can install the package in to a Laravel app that uses [Ignition](https://flareapp.io) via composer:

```bash
composer require :vendor/:package_name
```

## Usage

Click on the ":tab_name" tab on your Ignition screen to see the tool provided by this package.

### Testing

``` bash
composer test
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email :author_email instead of using the issue tracker.

## Credits

- [:author_name](https://github.com/:author_username)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
