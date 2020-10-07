<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Metabox to show glider shortcode
 */
if (!class_exists('SDGLIDER_Shortcode_Box_Images')) {
    class SDGLIDER_Shortcode_Box_Images
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('add_meta_boxes', array($this, 'meta_boxes'));
        }

        /**
         * Add metaboxes
         *
         * @return void
         */
        public function meta_boxes()
        {
            if (isset($_GET['action']) && $_GET['action'] == 'edit') {
                add_meta_box('sd_glider_shortcode', __('Shortcode', 'sd_glider'), array($this, 'glider_html'), 'sd_glider', 'side');
            }
        }

        /**
         * Glider metabox html
         *
         * @param Object $post
         * @return Html view
         */
        public function glider_html($post)
        {
            include_once SDGLIDER_PLUGIN_PATH . 'views/admin/meta-box/glider-shortcode.php';
        }
    }
    $SDGLIDER_Shortcode_Box_Images = new SDGLIDER_Shortcode_Box_Images();
}
