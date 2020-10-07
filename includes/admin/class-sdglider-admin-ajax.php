<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Admin ajax class
 */
if (!class_exists('SDGLIDER_Admin_ajax')) {
    class SDGLIDER_Admin_ajax
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('wp_ajax_sdgl_add_slider_image', array($this, 'add_slider_image'));
        }

        /**
         * Ajax action add new slider image
         *
         * @return Json response
         */
        public function add_slider_image()
        {
            check_ajax_referer('sdgl-script-nonce', 'nonce_ajax');

            $randomKey = sdgl_random_string();
            $image = '';

            ob_start();

            include SDGLIDER_PLUGIN_PATH . 'views/admin/share/slider-tr.php';
            $newSlider = ob_get_contents();

            ob_end_clean();

            wp_send_json_success(array('new_slider'=>$newSlider));
        }
    }
    
    $SDGLIDER_Admin_ajax = new SDGLIDER_Admin_ajax();
}
