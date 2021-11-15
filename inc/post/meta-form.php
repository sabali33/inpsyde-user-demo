<?php 
	$social_media_networks = [
		'facebook' => esc_html__('Facebook', 'inpsyde-user'),
		'github' => esc_html__( 'Github', 'inpsyde-user'),
		'xing' => esc_html__( 'Xing', 'inpsyde-user'),
		'linkedin' => esc_html__( 'Linkedin', 'inpsyde-user')
	];

	$user_meta = get_post_meta( $post->ID, '_inpsyde_user_meta', true );
	$first_name = isset($user_meta['first_name']) ? $user_meta['first_name'] : '';
	$last_name = isset($user_meta['last_name']) ? $user_meta['last_name'] : '';
	$intro = isset($user_meta['intro']) ? $user_meta['intro'] : '';
	$position = isset($user_meta['position']) ? $user_meta['position'] : '';
	$social_media_networks_data = isset($user_meta['social_media_networks']) ? $user_meta['social_media_networks'] : [];
	
?>
<div class="inpsyde-user-meta-box">
	<p>
		<label for="first-name"> <?php echo _e('First Name', 'inpsyde-user'); ?></label>
		<input type="text" name="first_name" id="first-name" value="<?php echo esc_attr($first_name) ?>">
	</p>
	<p>
		<label for="last-name"> <?php echo _e('Last Name', 'inpsyde-user'); ?></label>
		<input type="text" name="last_name" id="last-name" value="<?php echo esc_attr($last_name) ?>" >
	</p>
	<p>
		<label for="position"> <?php echo _e('Position', 'inpsyde-user'); ?></label>
		<input type="text" name="position" id="position" value="<?php echo esc_attr($position) ?>">
	</p>
	<p>
		<label for="intro"> <?php echo _e('Short Introduction', 'inpsyde-user'); ?></label>
		<textarea name="intro" id="intro"><?php echo esc_html($intro);  ?></textarea>
	</p>
	<?php foreach( $social_media_networks as $key => $network ): ?>
		<p>
			<label for="inpsyde-user<?php echo esc_attr( $key ); ?>"> <?php echo $network; ?></label>
			<input type="text" name="social_media_networks[<?php echo esc_attr( $key ); ?>]" id="inpsyde-user<?php echo esc_attr( $key ); ?>" value="<?php echo esc_attr($social_media_networks_data[$key]) ?>">
		</p>
	<?php endforeach; ?>
	<p>
		<input type="hidden" name="_inpsyde_user_nonce" value="<?php echo wp_create_nonce('inpsyde-user-nonce'); ?>">
	</p>
</div>