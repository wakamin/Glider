<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

if (!function_exists('sdgl_render_media_button')) {
    /**
     * Render media button
     *
     * @param String $targetPreview
     * @param String $targetInput
     * @param String $value
     * @return Html view
     */
    function sdgl_render_media_button($targetPreview, $targetInput, $value)
    {
        $mediaBtnData = [
            'preview-target-id' => $targetPreview,
            'input-target-id' => $targetInput,
        ];
        
        include SDGLIDER_PLUGIN_PATH . 'views/share/add-media-button.php';
    }
}

if (!function_exists('sdgl_random_string')) {
    /**
     * Generate random string
     *
     * @return String
     */
    function sdgl_random_string()
    {
        $bytes = random_bytes(10);
        return bin2hex($bytes);
    }
}

if (!function_exists('sdgl_get_shortcode')) {
    /**
     * Get glider shortcode
     *
     * @param Object WP_Post $glider
     * @return String
     */
    function sdgl_get_shortcode($glider)
    {
        return '[sd_glider id="'.$glider->ID.'"]';
    }
}

if (!function_exists('sdgl_get_slider_by_id')) {
    /**
     * Get slider by id
     *
     * @param Int $id
     * @return Mixed Array or empty string
     */
    function sdgl_get_slider_by_id($id)
    {
        return unserialize(get_post_meta($id, '_sd_glider_slider', true));
    }
}

if (!function_exists('sdgl_get_raw_slider_by_id')) {
    /**
     * Get raw slider by id
     *
     * @param Int $id
     * @return Mixed Array or empty string
     */
    function sdgl_get_raw_slider_by_id($id)
    {
        return unserialize(get_post_meta($id, '_sd_glider_slider', true));
    }
}
