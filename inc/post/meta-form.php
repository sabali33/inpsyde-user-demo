<?php

    /**
    * A template to display inpsyde user post meta
    */

    declare(strict_types=1);

    $socialMediaNetworks = [
        'facebook' => esc_html__('Facebook', 'inpsyde-user'),
        'github' => esc_html__('Github', 'inpsyde-user'),
        'xing' => esc_html__('Xing', 'inpsyde-user'),
        'linkedin' => esc_html__('Linkedin', 'inpsyde-user'),
    ];

    $userMeta = get_post_meta($post->ID, '_inpsyde_user_meta', true); //phpcs:ignore
    $firstName = isset($userMeta['first_name']) ? $userMeta['first_name'] : '';
    $lastName = isset($userMeta['last_name']) ? $userMeta['last_name'] : '';
    $intro = isset($userMeta['intro']) ? $userMeta['intro'] : '';
    $position = isset($userMeta['position']) ? $userMeta['position'] : '';
    $socialMediaNetworksData = isset($userMeta['social_media_networks']) ?
        $userMeta['social_media_networks'] :
        [];

    ?>
<div class="inpsyde-user-meta-box">
    <div>
        <p class="label">
            <label for="first-name"> <?php echo esc_html_e('First Name', 'inpsyde-user'); ?></label>
        </p>
        <p class="input">
            <input type="text" name="first_name" id="first-name" value="<?php echo esc_attr($firstName) ?>"> <?php //phpcs:ignore ?>
        </p>
        
    </div>
    <div>
        <p class="label">
            <label for="last-name"> <?php echo esc_html_e('Last Name', 'inpsyde-user'); ?></label>
        </p>
        <p class="input">
            <input 
            type="text" 
            name="last_name" id="last-name" 
            value="<?php echo esc_attr($lastName) ?>" >
    </p>
    </div>
    <div>
        <p class="label">
            <label for="position"> <?php echo esc_html_e('Position', 'inpsyde-user'); ?></label>
        </p>
        <p class="input">
            <input type="text" name="position" id="position" value="<?php echo esc_attr($position) ?>">
        </p>
    </div>
    <div>
        <p class="label">
            <label for="intro"> <?php echo esc_html_e('Short Introduction', 'inpsyde-user'); ?></label>
        </p>
        <p class="input">
            <textarea name="intro" id="intro"><?php echo esc_html($intro);  ?></textarea>
        </p>
    </div>
    <?php foreach ($socialMediaNetworks as $key => $network) : ?>
        <div>
            <p class="label">
                <label for="inpsyde-user<?php echo esc_attr($key); ?>"> <?php echo esc_html($network); ?></label>
            </p>
            <p class="input">
                <input 
                type="url" 
                name="social_media_networks[<?php echo esc_attr($key); ?>]" 
                id="inpsyde-user<?php echo esc_attr($key); ?>" 
                value="<?php echo isset($socialMediaNetworksData[$key]) ? esc_attr($socialMediaNetworksData[$key]) : ''; ?>">
            </p>
    </div>
    <?php endforeach; ?>
    <div>
        <input 
        type="hidden" 
        name="_inpsyde_user_nonce" 
        value="<?php echo esc_attr(wp_create_nonce('inpsyde-user-nonce')); ?>">
    </div>
</div>
