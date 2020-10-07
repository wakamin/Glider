<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

/**
 * Glider post type class
 */
if (!class_exists('SDGLIDER_Post_Type')) {
    class SDGLIDER_Post_Type
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('init', array($this, 'register_glider_post_type'));

            add_action('init', array($this, 'control_glider_post_ui'));

            add_filter('manage_edit-sd_glider_columns', array($this, 'custom_columns'));
            add_action('manage_sd_glider_posts_custom_column', array($this, 'custom_columns_value'));
        }

        /**
         * Register glider custom post type
         *
         * @return void
         */
        public static function register_glider_post_type()
        {
            $labels = [
                'name' => _x('Gliders', 'Post type general name', 'sd_glider'),
                'singular_name' => _x('Glider', 'Post type singular name', 'sd_glider'),
                'menu_name' => _x('Gliders', 'Admin menu text', 'sd_glider'),
                'name_admin_bar' => _x('New Glider', 'Add New on Toolbar', 'sd_glider'),
                'add_new' => __('Add New', 'sd_glider'),
                'add_new_item' => __('Add New Glider', 'sd_glider'),
                'new_item' => __('New Glider', 'sd_glider'),
                'edit_item' => __('Edit Glider', 'sd_glider'),
                'view_item' => __('View Glider', 'sd_glider'),
                'all_items' => __('All Gliders', 'sd_glider'),
                'search_items' => __('Search Gliders', 'sd_glider'),
                'parent_item_colon' => __('Parent Gliders:', 'sd_glider'),
                'not_found' => __('No gliders found.', 'sd_glider'),
                'not_found_in_trash' => __('No gliders found in Trash.', 'sd_glider'),
                'archives' => _x('Glider archives', 'The post type archive label used in nav menus.', 'sd_glider'),
                'insert_into_item' => _x('Insert into glider', 'Used when inserting media', 'sd_glider'),
                'uploaded_to_this_item' => _x('Uploaded to this glider', 'Used when viewing media attached to a post', 'sd_glider'),
                'filter_item_list' => _x('Filter glider list', 'Screen reader text for the filter links heading on the post type listing screen', 'sd_glider'),
                'items_list_navigation' => _x('Gliders list navigation', 'Screen reader text for the pagination heading on the post type listing screen', 'sd_glider'),
                'items_list' => _x('Gliders list', 'Screen reader text for the items list heading on the post type listing screen', 'sd_glider'),
            ];

            $args = [
                'labels' => $labels,
                'public' => false,
                'publicly_queryable' => false,
                'show_ui' => true,
                'show_in_menu' => true,
                'query_var' => true,
                'capability_type' => 'post',
                'has_archive' => false,
                'hierarchical' => false,
                'menu_position ' => 6,
                'supports ' => [
                    'custom-fields',
                    'revisions',
                ],
                'show_in_rest' => true,
                'show_in_admin_bar' => true,
                // 'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg width="20" height="20" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path fill="black" d="M512 448q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5 37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm1067 576q0 53-37 90l-491 492q-39 37-91 37-53 0-90-37l-715-716q-38-37-64.5-101t-26.5-117v-416q0-52 38-90t90-38h416q53 0 117 26.5t102 64.5l715 714q37 39 37 91zm384 0q0 53-37 90l-491 492q-39 37-91 37-36 0-59-14t-53-45l470-470q37-37 37-90 0-52-37-91l-715-714q-38-38-102-64.5t-117-26.5h224q53 0 117 26.5t102 64.5l715 714q37 39 37 91z"/></svg>'),
                'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="black" d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"/></svg>'),
            ];

            register_post_type('sd_glider', $args);
        }

        /**
         * Control glider post UI
         *
         * @return void
         */
        public function control_glider_post_ui()
        {
            remove_post_type_support('sd_glider', 'editor');
        }

        /**
         * Add custom columns into wp list table
         *
         * @param Array $columns
         * @return Array
         */
        public function custom_columns($columns)
        {
            $newColumns = [];
            foreach ($columns as $name => $text) {
                $newColumns[$name] = $text;
                if ($name == 'title') {
                    $newColumns['shortcode'] = 'Shortcode';
                }
            }

            return $newColumns;
        }

        /**
         * Custom columns value
         *
         * @param String $column
         * @return void
         */
        public function custom_columns_value($column)
        {
            global $post;
        
            switch ($column) {
                case 'shortcode':
                    include SDGLIDER_PLUGIN_PATH . 'views/admin/meta-box/glider-shortcode.php';
                break;
            }
        }
    }

    $SDGLIDER_Post_Type = new SDGLIDER_Post_Type();
}
