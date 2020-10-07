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
    function sdgl_render_media_button(String $targetPreview, String $targetInput, String $value)
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
        return '[sd-glider id="'.$glider->ID.'"]';
    }
}
