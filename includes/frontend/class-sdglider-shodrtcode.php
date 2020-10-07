<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Glider shortcode class
 */
if (!class_exists('SDGLIDER_Shortcode')) {
    class SDGLIDER_Shortcode
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_shortcode('sd_glider', array($this, 'glider_shortcode'));
        }

        public function glider_shortcode($atts, $content, $tag)
        {
            extract(shortcode_atts([
                'id' => null
            ], $atts, $tag));

            if (is_null($id)) {
                return;
            }
            
            global $post;
            $post = get_post($atts['id']);
            setup_postdata($post);

            ob_start();

            do_action('sd_glider_shortcode_before', $post);
            include SDGLIDER_PLUGIN_PATH . 'views/frontend/slider.php';
            do_action('sd_glider_shortcode_after', $post);

            wp_reset_postdata();
            
            $output = ob_get_clean();
            return $output;
        }
    }

    $SDGLIDER_Shortcode = new SDGLIDER_Shortcode();
}
