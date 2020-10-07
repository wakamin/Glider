<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Glider config metabox class
 */
if (!class_exists('SDGLIDER_Config_Meta_Box')) {
    class SDGLIDER_Config_Meta_Box
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_filter('sd_glider_config_meta_boxes', array($this, 'glider_config_meta_boxes'));
        }

        /**
         * Add fields to glider config metabox
         *
         * @param Array $metaBoxes
         * @return Array
         */
        public function glider_config_meta_boxes(array $metaBoxes)
        {
            $newMetaBoxes = [
                [
                    'key' => '_sd_glider_link',
                    'name' => __('Link', 'sd_glider'),
                    'field_type' => 'text',
                    'wide_field' => true,
                    'sort_order' => 10
                ],
                [
                    'key' => '_sd_glider_images',
                    'name' => __('Coupon Image', 'sd_glider'),
                    'field_type' => 'media',
                    'sort_order' => 50
                ],
            ];
            
            return array_merge($metaBoxes, $newMetaBoxes);
        }
    }

    $SDGLIDER_Config_Meta_Box = new SDGLIDER_Config_Meta_Box();
}
