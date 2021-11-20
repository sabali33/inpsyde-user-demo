<?php
/**
 * Plugin Name:       Inpsyde User Plugin
 * Description:       A demo project to show user overview.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Eliasu Abraman
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       inpsyde-user
 *
 * @package           create-block
 */





defined( 'ABSPATH' ) || exit;

define('INPSYDE_USER_BASE', plugin_dir_path( __FILE__ ));
define('INPSYDE_USER_BASE_URL', plugin_dir_url( __FILE__ ));
define('INPSYDE_USER_ROOT', __FILE__ );

require_once INPSYDE_USER_BASE . 'vendor/autoload.php';

InpsydeUser\Init::instance();