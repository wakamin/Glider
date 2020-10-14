<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Slider images metabox
 */
if (!class_exists('SDGLIDER_Meta_Box_Images')) {
    class SDGLIDER_Meta_Box_Images implements SDGLIDER_Meta_Box_Contracts
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('add_meta_boxes', array($this, 'meta_boxes'));

            add_action('save_post', array($this, 'save_meta_box'), 10, 2);
        }

        /**
         * Nonce field
         *
         * @return void
         */
        public function nonceField()
        {
            wp_nonce_field('sd_glider_update_images_metabox', 'sd_glider_update_images_metabox_nonce');
        }

        /**
         * Add metaboxes
         *
         * @return void
         */
        public function meta_boxes()
        {
            add_meta_box('sd_glider_images', __('Slider Images', 'sd_glider'), array($this, 'glider_html'), 'sd_glider', 'normal');
        }

        /**
         * Save metabox
         *
         * @param Int $post_id
         * @param Object $post
         * @return void
         */
        public function save_meta_box($post_id, $post)
        {
            $edit_cap = get_post_type_object($post->post_type)->cap->edit_post;
            if (!current_user_can($edit_cap, $post_id)) {
                return;
            }

            if (!isset($_POST['sd_glider_update_images_metabox_nonce']) ||
                !wp_verify_nonce($_POST['sd_glider_update_images_metabox_nonce'], 'sd_glider_update_images_metabox')
            ) {
                return;
            }

            $slider = $_POST['_sd_glider_slider'];

            $images = [];
            foreach ($slider['images'] as $image) {
                $images[] = esc_url_raw($image);
            }

            $alts = [];
            foreach ($slider['alts'] as $alt) {
                $alts[] = sanitize_text_field($alt);
            }

            $links = [];
            foreach ($slider['links'] as $link) {
                $links[] = esc_url_raw($link);
            }

            $new_tabs = [];
            foreach ($slider['new_tabs'] as $new_tab) {
                $new_tabs[] = sanitize_text_field($new_tab);
            }

            // Update meta box
            $value = [
                'images' => $images,
                'alts' => $alts,
                'links' => $links,
                'new_tabs' => $new_tabs,
            ];

            update_post_meta(
                $post_id,
                '_sd_glider_slider',
                serialize($value)
            );
        }

        /**
         * Glider metabox html form
         *
         * @param Object $post
         * @return Html view
         */
        public function glider_html($post)
        {
            $this->nonceField();
            include_once SDGLIDER_PLUGIN_PATH . 'views/admin/meta-box/slider-images.php';
        }
    }
    $SDGLIDER_Meta_Box_Images = new SDGLIDER_Meta_Box_Images();
}
