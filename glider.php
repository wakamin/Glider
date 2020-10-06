<?php

/**
 * Plugin Name: Glider
 * Plugin URI: https://www.samudradigital.com
 * Description: Image slider powered by Glide JS.
 * Version: 1.0.0
 * Author: Kasmin
 * Author URI: https://github.com/wakamin
 * License: GPL-2.0+
 * License URI: http://www.gnu.local/license/gpl-2.0.txt
 * Text Domain: sd_glider
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

// Constants
define('SDGLIDER_PLUGIN_URL', plugin_dir_url(__FILE__));
define('SDGLIDER_PLUGIN_PATH', plugin_dir_path(__FILE__));

// Initialize
require_once SDGLIDER_PLUGIN_PATH . 'init.php';
