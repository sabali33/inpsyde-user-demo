<?php
/**
 * Class Init
 *
 * @package ./inpsyde_User
 */

/**
 * Init test case.
 */
use InpsydeUser\Init;

class InitTest extends WP_UnitTestCase 
{
	static $postId = null;

	public function setup() {
		self::$postId = $this->addDummyPost();
	}

	/** @test */
	public static function plugin_can_be_initiated() 
	{
		$instance = Init::instance();
		self::assertEquals( 10, has_action( 'init', array( $instance, 'initCallack' ) ) );
		self::assertEquals( 10, has_action( 'save_post_inpsyde-user', array( $instance, 'savePostMeta' ) ) );
		self::assertEquals( 10, has_action( 'rest_api_init', array( $instance, 'addFieldsToRest' ) ) );

		//check if post type is registered
		$isInpsydeUserTypeAdded = in_array('inpsyde-user', get_post_types( ));
		self::assertTrue($isInpsydeUserTypeAdded);
		self::assertTrue(wp_script_is('inpsyde-user-editor'));
		self::assertTrue(wp_script_is('inpsyde-user-frontend'));
		self::assertTrue(wp_style_is('inpsyde-user-style'));
		self::assertTrue(wp_style_is('inpsyde-user'));
	}
	public function addDummyPost()
	{
		$post_id = wp_insert_post(['post_content' => "hello world", 'post_title' => "Hello World"]);
		update_post_meta($post_id, "_inpsyde_user_meta", [
			'first_name' => "Tester",
			'last_name' => "John",
			"position" => "Developer"
		]);
		return $post_id;
	}
}
