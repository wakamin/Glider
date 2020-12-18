<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Admin scripts class
 */
if (!class_exists('SDGLIDER_Admin_Script')) {
    class SDGLIDER_Admin_Script
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('admin_enqueue_scripts', array($this, 'scripts'));
        }

        /**
         * Coupon scripts
         *
         * @param String $hook
         * @return void
         */
        public function scripts($hook)
        {
            // Current post type
            global $typenow;

            if ($typenow == 'sd_glider') {
                wp_enqueue_media();

                wp_enqueue_style('sdgl-admin', SDGLIDER_PLUGIN_URL . 'assets/css/admin-glider.css');
                wp_enqueue_style('sdgl-admin-jquery-ui', SDGLIDER_PLUGIN_URL . 'assets/css/jquery-ui.css');
                wp_register_script('sdgl-admin-script', SDGLIDER_PLUGIN_URL . 'assets/js/admin-glider.js', array('jquery', 'jquery-ui-sortable'), '1.0.0', false);
                
                wp_localize_script(
                    'sdgl-admin-script',
                    'sdgl_script',
                    array(
                        'ajaxurl' => admin_url('admin-ajax.php'),
                        'nonce' => wp_create_nonce('sdgl-script-nonce'),
                        'title' => __('Choose or Upload', 'sd_glider'),
                        'button' => __('Use this media', 'sd_glider'),
                        'remote_text' => __('Remove', 'sd_glider'),
                    )
                );
                wp_enqueue_script('sdgl-admin-script');
            }
        }
    }
    
    $SDGLIDER_Admin_Script = new SDGLIDER_Admin_Script();
}
