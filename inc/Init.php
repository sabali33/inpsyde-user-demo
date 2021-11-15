<?php 
namespace InpsydeUser;

defined('ABSPATH') || exit;

class Init
{

    private static $_instance = null;

    public static function instance()
    {

        if (! isset(self::$_instance) ) {

            self::$_instance = new self;
        }

        add_action('init', [self::$_instance, 'create_block_inpsyde_user_block_init']);
        add_action('save_post_inpsyde-user', [ self::$_instance, 'save_post_meta'], 10, 3 );
        return self::$_instance;
    }

    private function __construct()
    {
        
    }
    public function create_block_inpsyde_user_block_init()
    {

        // Include dependencies
        $file_path = INPSYDE_USER_BASE . 'build/index.asset.php';
        $deps_version = file_exists($file_path) ? require_once( $file_path ) : [];

        if( count($deps_version) < 1 ){
            return;
        }

        wp_register_script(
            'inpsyde-user-editor' ,
            INPSYDE_USER_BASE_URL . 'build/index.js',
            $deps_version['dependencies'],
            $deps_version['version']
        );
        wp_enqueue_script( 'inpsyde-user-editor' );
        register_block_type(
            'eliasu/inpsyde-user', 
            array(
                'editor_script' => 'inpsyde-user-editor',
                // 'editor_style'  => $block_slug . "-editor",
                // 'style'         => $block_slug,
                'render_callback' => [$this, "_render_callback"],
                'attributes'      => array(
                    'first_name'    => array(
                        'type'      => 'string',
                        'default'   => 5,
                    ),
                    'last_name' => array(
                        'type'      => 'string',
                        'default'   => 'post',
                    ),
                ),
            ) 
        );

        $this->register_post_type();
    }
    private function _render_callback(){ return "you are welcome";}

    public static function do_activate( $network_wide )
    {
        if (! current_user_can('activate_plugins') ) {
            return;
        }

        $plugin = isset($_REQUEST['plugin']) ? $_REQUEST['plugin'] : '';
        check_admin_referer("activate-plugin_{$plugin}");
    }
    public function register_post_type()
    {
        $post_type_args = array(
            'label' => _x( 'Inpsyder Users', 'Inpsyder Users', 'inpsyde-user'),
            'has_archive' => false,
            'show_ui' => true,
            'labels' => array(
                'name'                  => _x( 'Inpsyder Users', 'Inpsyder Users', 'inpsyde-user' ),
                'singular_name'         => _x( 'Inpsyder User', 'Inpsyder User', 'inpsyde-user' ),
                'menu_name'             => _x( 'Inpsyder Users', 'Admin Menu text', 'inpsyde-user' ),
                'name_admin_bar'        => _x( 'Inpsyder User', 'Add New on Toolbar', 'inpsyde-user' ),
                'add_new'               => __( 'Add New', 'inpsyde-user' ),
                'add_new_item'          => __( 'Add New Inpsyder User', 'inpsyde-user' ),
                'new_item'              => __( 'New Inpsyder User', 'inpsyde-user' ),
                'edit_item'             => __( 'Edit Inpsyder User', 'inpsyde-user' ),
                'view_item'             => __( 'View Inpsyder User', 'inpsyde-user' ),
                'all_items'             => __( 'All Inpsyder Users', 'inpsyde-user' ),
                'search_items'          => __( 'Search Inpsyder Users', 'inpsyde-user' ),
                'parent_item_colon'     => __( 'Parent Inpsyder Users:', 'inpsyde-user' ),
                'not_found'             => __( 'No Inpsyder Users found.', 'inpsyde-user' ),
                'not_found_in_trash'    => __( 'No Inpsyder Users found in Trash.', 'inpsyde-user' ),
                'featured_image'        => _x( 'User Image', 'Overrides the "Featured Image" phrase for this post type.', 'inpsyde-user' ),
                'set_featured_image'    => _x( 'Set user image', 'Overrides the "Set featured image" phrase for this post type.', 'inpsyde-user' ),
                'remove_featured_image' => _x( 'Remove cover image', 'Overrides the "Remove featured image" phrase for this post type.', 'inpsyde-user' ),
                'use_featured_image'    => _x( 'Use as cover image', 'Overrides the "Use as featured image" phrase for this post type.', 'inpsyde-user' ),
                'archives'              => _x( 'Inpsyder User archives', 'The post type archive label used in nav menus. Default "Post Archives".', 'inpsyde-user' ),
                'insert_into_item'      => _x( 'Insert into Inpsyder User', 'Overrides the "Insert into post" or "Insert into page" phrase (used when inserting media into a post).', 'inpsyde-user' ),
                'uploaded_to_this_item' => _x( 'Uploaded to this Inpsyder User', 'Overrides the "Uploaded to this post"/"Uploaded to this page" phrase (used when viewing media attached to a post).', 'inpsyde-user' ),
                'filter_items_list'     => _x( 'Filter Inpsyder Users list', 'Screen reader text for the filter links heading on the post type listing screen. Default "Filter posts list"/"Filter pages list".', 'inpsyde-user' ),
                'items_list_navigation' => _x( 'Inpsyder Users list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default "Posts list navigation"/"Pages list navigation".', 'inpsyde-user' ),
                'items_list'            => _x( 'Inpsyder Users list', 'Screen reader text for the items list heading on the post type listing screen. Default "Posts list"/"Pages list".', 'inpsyde-user' ),
            ),
            'supports' => ['thumbnail'],
            'register_meta_box_cb' => [$this, 'add_user_meta']
        );

        register_post_type( 'inpsyde-user', $post_type_args );    
    }
    public function add_user_meta()
    {
        add_meta_box( 'inpsyde-user-meta', __('User details', 'inpsyde-user'), [$this, 'display_meta_form'], null, 'advanced', 'default', null );
    }
    public function display_meta_form($post)
    {
        include INPSYDE_USER_BASE . 'inc/post/meta-form.php';
    }
    public function save_post_meta($post_id, $post, $status)
    {
        if ( !isset($_POST) || count($_POST) < 1) {
            return;
        }

        if( !wp_verify_nonce( $_POST['_inpsyde_user_nonce'], 'inpsyde-user-nonce' ) ){
            wp_die('You are not authorized');
        }
        $allowed_fields = [
            'first_name' => [
                'sanitize' => 'sanitize_text_field',
                'required' => true
            ], 
            'last_name' => [
                'sanitize' => 'sanitize_text_field'
            ], 
            'intro' => [
                'sanitize' => 'sanitize_textarea_field'
            ],
            'social_media_networks' => [
                'sanitize' => [ $this, 'sanitize_array_text']
            ], 
            'position' => [
                'sanitize' => 'sanitize_text_field',
                'required' => true
            ], 
        ];

        $sanitized_fields = [];
        $errors = false;

        foreach( $allowed_fields as $field_name => $args ){
            $sanitize_func = $args['sanitize'];
            if( isset($args['required']) && $args['required']){
                if( !trim($_POST[$field_name]) ){
                    $errors = true;
                }
            }
            $sanitized_fields[$field_name] = gettype($sanitize_func) === 'string' ? $sanitize_func($_POST[$field_name]) :
            $this->sanitize_array_text($_POST[$field_name]);
        }
        
        if( $errors ){
            return;
        }
        
        $removed = remove_action( 'save_post_inpsyde-user', [$this, 'save_post_meta'], 10 );
        
        $full_name = "{$sanitized_fields['first_name']} {$sanitized_fields['last_name']}";

        $result = wp_update_post( array( 'post_title'=> $full_name, 'ID' => $post_id ), true, true );
        
        update_post_meta( $post_id, '_inpsyde_user_meta', $sanitized_fields );
        
        add_action('save_post_inpsyde-user', [$this, 'save_post_meta'], 10, 3);
    }
    public function sanitize_array_text($data)
    {
        if( !$data || gettype($data) !== 'array' ){
            return [];
        }
        $sanitized_fields = [];
        foreach( $data as $key => $value ){
            $sanitized_fields[$key] = sanitize_text_field( $value );
        }
        return $sanitized_fields;
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

// 
// register_activation_hook(__FILE__, 'Inpsyde_User::do_activate');
// register_deactivation_hook(__FILE__, 'Inpsyde_User::do_deactivate');
// register_uninstall_hook(__FILE__, 'Inpsyde_User::do_uninstall');

