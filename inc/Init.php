<?php

/**
 * A class to construct the plugin
 */

declare(strict_types=1);

namespace InpsydeUser;

defined('ABSPATH') || exit;

class Init
{

    private static $instance = null;

    /**
     * A singleton function that inits the plugin
     *
     * @return self
     */
    public static function instance()
    {

        if (! isset(self::$instance)) {
            self::$instance = new self();
        }

        add_action('init', [self::$instance, 'initCallack']);
        add_action('save_post_inpsyde-user', [ self::$instance, 'savePostMeta'], 10);
        add_action('rest_api_init', [ self::$instance, 'addFieldsToRest'], 10, 3);

        register_activation_hook(INPSYDE_USER_ROOT, [ self::$instance, 'doActivate']);
        register_deactivation_hook(INPSYDE_USER_ROOT, [ self::$instance, 'doDeactivate']);

        return self::$instance;
    }

    private function __construct()
    {
    }

    /**
     * A callback function to init action
     *
     * @return void
     */
    public function initCallack()
    {

        // Include dependencies
        $filePath = INPSYDE_USER_BASE . 'build/index.asset.php';
        $filePathFrontend = INPSYDE_USER_BASE . 'build/frontend.asset.php';
        $depsVersion = file_exists($filePath) ? require_once($filePath) : [];
        $frontendDepsVersion = file_exists($filePathFrontend) ? require_once($filePathFrontend) : [];
        if (count($depsVersion) < 1) {
            return;
        }

        wp_register_script(
            'inpsyde-user-editor',
            INPSYDE_USER_BASE_URL . 'build/index.js',
            $depsVersion['dependencies'],
            $depsVersion['version'],
            true
        );
        wp_register_script(
            'inpsyde-user-frontend',
            INPSYDE_USER_BASE_URL . 'build/frontend.js',
            ['inpsyde-user-editor'],
            $frontendDepsVersion['version'],
            true
        );
        wp_enqueue_script('inpsyde-user-editor');
        wp_enqueue_script('inpsyde-user-frontend');
        wp_enqueue_style('inpsyde-user-style', INPSYDE_USER_BASE_URL . 'build/style.css', [], $depsVersion['dependencies'], 'all');
        wp_enqueue_style('inpsyde-user', INPSYDE_USER_BASE_URL . 'build/editor.css', [], $depsVersion['dependencies'], 'all');
        register_block_type(
            'eliasu/inpsyde-user',
            [
                'editor_script' => 'inpsyde-user-editor',
                'editor_style' => 'inpsyde-user',
                'style' => 'inpsyde-user-style',
            ]
        );

        $this->registerPostType();

        //$this->register_rest_user_meta();
    }

    /**
     * A callback that fires when the plugin is activated
     *
     * @return void
     */
    public static function doActivate()
    {
        if (! current_user_can('activate_plugins')) {
            return;
        }
        if (version_compare(PHP_VERSION, '7.0.0', '<')) {
            wp_die(esc_html__('A minimum of PHP version 7 is required to use this plugin', 'inpsyde-user'));
        }
        if (version_compare(get_bloginfo('version'), '5.0', '<')) {
            wp_die(esc_html__('A minimum of WordPress Version 5.0 is required to use this plugin', 'inpsyde-user'));
        }
        $plugin = isset($_REQUEST['plugin']) ?
        sanitize_text_field(wp_unslash($_REQUEST['plugin'])) :
        '';
        check_admin_referer("activate-plugin_{$plugin}");
    }

    /**
     * A callback to add post meta fields to REST data
     *
     * @return void
     */
    public function addFieldsToRest()
    {
        register_rest_field('inpsyde-user', '_inpsyde_user_meta', [
            'get_callback' => [$this, 'getMetaFields'],
        ]);

        register_rest_field('inpsyde-user', '_featured_image', [
            'get_callback' => [$this, 'userFeaturedImage'],
        ]);
    }

    /**
     * A callback in register rest field function that gets user meta
     *
     * @param  array $post
     * @return array
     */
    public function getMetaFields($post)
    {
        return get_post_meta($post['id'], '_inpsyde_user_meta', true);
    }

    /**
     * A callback to add user featured image to REST data
     *
     * @param  array $post
     * @return string
     */
    public function userFeaturedImage($post)
    {
        $mediaId = get_post_meta($post['id'], '_thumbnail_id', true);
        return wp_get_attachment_url($mediaId);
    }

    public function registerPostType()
    {
        $post_type_args = [
            'label' => _x('Inpsyder Users', 'Inpsyder Users', 'inpsyde-user'),
            'has_archive' => false,
            'show_ui' => true,
            'labels' => [
                'name' => _x('Inpsyder Users', 'Inpsyder Users', 'inpsyde-user'),
                'singular_name' => _x('Inpsyder User', 'Inpsyder User', 'inpsyde-user'),
                'menu_name' => _x('Inpsyder Users', 'Admin Menu text', 'inpsyde-user'),
                'name_admin_bar' => _x('Inpsyder User', 'Add New on Toolbar', 'inpsyde-user'),
                'add_new' => __('Add New', 'inpsyde-user'),
                'add_new_item' => __('Add New Inpsyder User', 'inpsyde-user'),
                'new_item' => __('New Inpsyder User', 'inpsyde-user'),
                'edit_item' => __('Edit Inpsyder User', 'inpsyde-user'),
                'view_item' => __('View Inpsyder User', 'inpsyde-user'),
                'all_items' => __('All Inpsyder Users', 'inpsyde-user'),
                'search_items' => __('Search Inpsyder Users', 'inpsyde-user'),
                'parent_item_colon' => __('Parent Inpsyder Users:', 'inpsyde-user'),
                'not_found' => __('No Inpsyder Users found.', 'inpsyde-user'),
                'not_found_in_trash' => __('No Inpsyder Users found in Trash.', 'inpsyde-user'),
                'featured_image' => _x('User Image', 'Overrides the "Featured Image" phrase for this post type.', 'inpsyde-user'),
                'set_featured_image' => _x('Set user image', 'Overrides the "Set featured image" phrase for this post type.', 'inpsyde-user'),
                'remove_featured_image' => _x('Remove cover image', 'Overrides the "Remove featured image" phrase for this post type.', 'inpsyde-user'),
                'use_featured_image' => _x('Use as cover image', 'Overrides the "Use as featured image" phrase for this post type.', 'inpsyde-user'),
                'archives' => _x('Inpsyder User archives', 'The post type archive label used in nav menus. Default "Post Archives".', 'inpsyde-user'),
                'insert_into_item' => _x('Insert into Inpsyder User', 'Overrides the "Insert into post" or "Insert into page" phrase (used when inserting media into a post).', 'inpsyde-user'),
                'uploaded_to_this_item' => _x('Uploaded to this Inpsyder User', 'Overrides the "Uploaded to this post"/"Uploaded to this page" phrase (used when viewing media attached to a post).', 'inpsyde-user'),
                'filter_items_list' => _x('Filter Inpsyder Users list', 'Screen reader text for the filter links heading on the post type listing screen. Default "Filter posts list"/"Filter pages list".', 'inpsyde-user'),
                'items_list_navigation' => _x('Inpsyder Users list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default "Posts list navigation"/"Pages list navigation".', 'inpsyde-user'),
                'items_list' => _x('Inpsyder Users list', 'Screen reader text for the items list heading on the post type listing screen. Default "Posts list"/"Pages list".', 'inpsyde-user'),
            ],
            'supports' => ['thumbnail', 'title', 'custom_fields'],
            'register_meta_box_cb' => [$this, 'addUserMeta'],
            'show_in_rest' => true,
        ];

        register_post_type('inpsyde-user', $post_type_args);
    }

    public function addUserMeta()
    {
        add_meta_box('inpsyde-user-meta', __('User details', 'inpsyde-user'), [$this, 'displayMetaForm'], null, 'advanced', 'default', null);
    }

    public function displayMetaForm($post)
    {
        include INPSYDE_USER_BASE . 'inc/post/meta-form.php';
    }

    /**
     * A hook callback to save user meta fields
     *
     * @param  integer $postId
     * @return void|null
     */
    public function savePostMeta($postId)
    {
        $sanitizedNonce = isset($_POST['_inpsyde_user_nonce']) ? sanitize_text_field(
            wp_unslash($_POST['_inpsyde_user_nonce'])
        ) : '';
        if (!isset($_POST) || count($_POST) < 1) {
            return;
        }
        if (
            !isset($_POST['_inpsyde_user_nonce']) ||
            !wp_verify_nonce($sanitizedNonce, 'inpsyde-user-nonce')
        ) {
            wp_die('You are not authorized');
        }
        
        $allowed_fields = [
            'first_name' => [
                'sanitize' => 'sanitize_text_field',
                'required' => true,
            ],
            'last_name' => [
                'sanitize' => 'sanitize_text_field',
            ],
            'intro' => [
                'sanitize' => 'sanitize_textarea_field',
            ],
            'social_media_networks' => [
                'sanitize' => [ $this, 'sanitizeArrayText'],
            ],
            'position' => [
                'sanitize' => 'sanitize_text_field',
                'required' => true,
            ],
        ];

        $sanitizedFields = [];
        $errors = false;

        foreach ($allowed_fields as $fieldName => $args) {
            $sanitizeFunc = $args['sanitize'];
            if (isset($args['required']) && $args['required']) {
                if (isset($_POST[$fieldName]) && !trim(sanitize_text_field(wp_unslash($_POST[$fieldName])))) {
                    $errors = true;
                }
            }
            $sanitizedFieldName = sanitize_text_field(wp_unslash($_POST[$fieldName]));
            $sanitizedFields[$fieldName] = gettype($sanitizeFunc) === 'string' ?
            $sanitizeFunc($sanitizedFieldName) :
            $this->sanitizeArrayText($_POST[$fieldName]); //phpcs:ignore
        }

        if ($errors) {
            return;
        }
        
        remove_action('save_post_inpsyde-user', [$this, 'savePostMeta'], 10);

        $full_name = "{$sanitizedFields['first_name']} {$sanitizedFields['last_name']}";

        wp_update_post([ 'post_title' => $full_name, 'ID' => $postId ], true, true);

        update_post_meta($postId, '_inpsyde_user_meta', $sanitizedFields);

        add_action('save_post_inpsyde-user', [$this, 'savePostMeta'], 10);
    }
    
    /**
     * Sanitize array of strings
     *
     * @param  array $data
     * @return array An associative array of sanitized text
     */
    public function sanitizeArrayText($data)
    {
        if (!$data || gettype($data) !== 'array') {
            
            return [];
        }
        $sanitizedFields = [];
        foreach ($data as $key => $value) {
            $sanitizedFields[$key] = sanitize_text_field(wp_unslash($value));
        }
        return $sanitizedFields;
    }

    /**
     * A hook the fires when a plugin is deactivated
     *
     * @return void|null
     */
    public static function doDeactivate()
    {
        if (! current_user_can('activate_plugins')) {
            return;
        }
        $sanitizePlugin = isset($_REQUEST['plugin']) ?
        sanitize_text_field(wp_unslash($_REQUEST['plugin'])) :
        null;
        if ($sanitizePlugin) {
            check_admin_referer("deactivate-plugin_{$sanitizePlugin}");
        }
    }
}
