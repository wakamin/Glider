<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

$slider = get_post_meta($post->ID, '_sd_glider_slider', true);
$slider = $slider != '' ? unserialize($slider) : [];

?>

<button type="button" id="sdgl-new-slider-image" class="button sd-button"><span class="dashicons dashicons-plus"></span> Add New</button>

<table id="sdgl-sliders" class="sd-mt3 table-striped widefat wp-list-table">
    <thead>
        <tr>
            <th></th>
            <th>Image</th>
            <th>Details</th>
            <th>Remove</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($slider as $key => $slide): ?>
            <?php include SDGLIDER_PLUGIN_PATH . 'views/admin/share/slider-tr.php' ?>
        <?php endforeach; ?>
    </tbody>
</table>