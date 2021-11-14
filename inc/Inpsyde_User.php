<?php 

defined('ABSPATH') || exit;

class Inpsyde_User
{

    private static $_instance = null;

    public static function instance()
    {
        if (! isset(self::$_instance) ) {
            self::$_instance = new self;
        }

        add_action('init', [self::$_instance, 'create_block_inpsyde_user_block_init']);

        return self::$_instance;
    }

    private function __construct()
    {
        
    }
    public function create_block_inpsyde_user_block_init()
    {
        register_block_type(__DIR__);
    }
    public static function do_activate( $network_wide )
    {
        if (! current_user_can('activate_plugins') ) {
            return;
        }

        $plugin = isset($_REQUEST['plugin']) ? $_REQUEST['plugin'] : '';
        check_admin_referer("activate-plugin_{$plugin}");
    }

    public static function do_deactivate( $network_wide )
    {
        if (! current_user_can('activate_plugins') ) {
            return;
        }

        $plugin = isset($_REQUEST['plugin']) ? $_REQUEST['plugin'] : '';
        check_admin_referer("deactivate-plugin_{$plugin}");
    }

    public static function do_uninstall( $network_wide )
    {
        if (! current_user_can('activate_plugins') ) {
            return;
        }

        check_admin_referer('bulk-plugins');

        if (__FILE__ != WP_UNINSTALL_PLUGIN  ) {
            return;
        }
    }
}

add_action('plugins_loaded', 'Inpsyde_User::instance');
register_activation_hook(__FILE__, 'Inpsyde_User::do_activate');
register_deactivation_hook(__FILE__, 'Inpsyde_User::do_deactivate');
register_uninstall_hook(__FILE__, 'Inpsyde_User::do_uninstall');
