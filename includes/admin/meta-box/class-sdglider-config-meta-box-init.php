<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Coupon metabox
 */
if (!class_exists('SDGLIDER_Config_Meta_Box_Init')) {
    class SDGLIDER_Config_Meta_Box_Init implements SDGLIDER_Meta_Box_Contracts
    {
        public $gliderConfigMetaBoxes;

        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('init', array($this, 'init_set_glider_config_meta_boxes'));

            add_action('add_meta_boxes', array($this, 'meta_boxes'));

            add_action('save_post', array($this, 'save_meta_box'), 10, 2);
        }

        /**
         * Initialize meta boxes
         *
         * @return void
         */
        public function init_set_glider_config_meta_boxes()
        {
            $this->setGliderConfigMetaBoxes(apply_filters('sd_glider_config_meta_boxes', []));
        }

        /**
         * Set meta boxes
         *
         * @param Array $metaBoxes
         * @return void
         */
        public function setGliderConfigMetaBoxes(array $metaBoxes)
        {
            $this->gliderConfigMetaBoxes = $metaBoxes;
        }

        /**
         * Nonce field
         *
         * @return void
         */
        public function nonceField()
        {
            wp_nonce_field('sd_glider_update_config_metabox', 'sd_glider_update_config_metabox_nonce');
        }

        /**
         * Add metaboxes
         *
         * @return void
         */
        public function meta_boxes()
        {
            $gliderConfigMetaBoxes = $this->gliderConfigMetaBoxes;

            array_multisort(
                array_map(function ($el) {
                    return $el['sort_order'];
                }, $gliderConfigMetaBoxes),
                SORT_ASC,
                $gliderConfigMetaBoxes
            );

            add_meta_box('sd_glider_config', __('Slider Configuration', 'sd_glider'), array($this, 'glider_html'), 'sd_glider', 'normal');
        }

        /**
         * Save metabox
         *
         * @param Int $post_id
         * @param Object $post
         * @return void
         */
        public function save_meta_box(Int $post_id, $post)
        {
            $edit_cap = get_post_type_object($post->post_type)->cap->edit_post;
            if (!current_user_can($edit_cap, $post_id)) {
                return;
            }

            if (!isset($_POST['sd_glider_update_config_metabox_nonce']) ||
                !wp_verify_nonce($_POST['sd_glider_update_config_metabox_nonce'], 'sd_glider_update_config_metabox')
            ) {
                return;
            }

            foreach ($this->gliderConfigMetaBoxes as $mBox) {
                // Update meta box
                if (array_key_exists($mBox['key'], $_POST)) {
                    $value = sanitize_text_field($_POST[$mBox['key']]);

                    update_post_meta(
                        $post_id,
                        $mBox['key'],
                        $value
                    );
                } else {
                    if ($mBox['field_type'] == 'checkbox') {
                        update_post_meta($post_id, $mBox['key'], '');
                    }
                }
            }
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
            include_once SDGLIDER_PLUGIN_PATH . 'views/admin/meta-box/slider-config.php';
        }
    }
    $SDGLIDER_Config_Meta_Box_Init = new SDGLIDER_Config_Meta_Box_Init();
}
