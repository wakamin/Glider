<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

// Functions
include_once SDGLIDER_PLUGIN_PATH . 'includes/functions/helper.php';

// Meta box interface
include_once SDGLIDER_PLUGIN_PATH . 'includes/interfaces/class-sdglider-meta-box-contracts.php';

// Post type
include_once SDGLIDER_PLUGIN_PATH . 'includes/admin/class-sdglider-post-type.php';

// Slider images meta box
include_once SDGLIDER_PLUGIN_PATH . 'includes/admin/meta-box/class-sdglider-meta-box-images.php';

// Glider shortcode meta box
include_once SDGLIDER_PLUGIN_PATH . 'includes/admin/meta-box/class-sdglider-shortcode-meta-box.php';

// Admin scripts
include_once SDGLIDER_PLUGIN_PATH . 'includes/admin/class-sdglider-admin-scripts.php';

// Admin Ajax
include_once SDGLIDER_PLUGIN_PATH . 'includes/admin/class-sdglider-admin-ajax.php';

// Glider shortcode
include_once SDGLIDER_PLUGIN_PATH . 'includes/frontend/class-sdglider-shodrtcode.php';
