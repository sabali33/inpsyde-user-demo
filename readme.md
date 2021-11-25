=== Inpsyde User ===
Contributors: Eliasu Abraman
Tags: block
Tested up to: 5.8.0
Stable tag: 1.0.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

== Description ==

This plugin is a Gutenberg block that allows for an overview of a custom user post type to be shown.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/inpsyde-user` directory, or install the plugin through the WordPress plugins screen directly. Or if you have
   `wp-env` package installed, clone this repository to a docker supported directory.
2. Activate the plugin through the 'Plugins' screen in WordPress. For wp-env environment, reference the plugin path in wp-env.json file through the 'plugins' property.

== Testing ==

= Unit Testing =

Run `vendor/bin/phpunit` in the plugin root folder. Of course ensure you run the bin/install-wp-tests.sh. For more on this please refer to;
https://make.wordpress.org/cli/handbook/misc/plugin-unit-tests/#3-initialize-the-testing-environment-locally

= End-to-End Testing =
In `wp-env` environment, simple run `npm run test:e2e`. In package.json file you can pass the --puppeteer-interactive flag to launch
chromium browser.

For other environments:

1. In package.json file change `http://localhost:3601/` to your environment local development URL.
2. Make sure the WordPress installation against which the test will run has a user with username and password set to `admin` and `password` respectively
