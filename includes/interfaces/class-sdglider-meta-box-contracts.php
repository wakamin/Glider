<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Metabox interface
 */
if (!interface_exists('SDGLIDER_Meta_Box_Contracts')) {
    interface SDGLIDER_Meta_Box_Contracts
    {
        /**
         * Generate nonce field
         *
         * @return void
         */
        public function nonceField();

        /**
         * Add meta boxes
         *
         * @return void
         */
        public function meta_boxes();

        /**
         * Save meta box
         *
         * @param Int $post_id
         * @param Onject $post
         * @return void
         */
        public function save_meta_box($post_id, $post);
    }
}
