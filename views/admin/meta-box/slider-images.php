<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

$slider = unserialize(get_post_meta($post->ID, '_sd_glider_slider', true));

?>

<table id="sdgl-sliders" class="sd-mb3 striped widefat wp-list-table">
    <thead>
        <tr>
            <th></th>
            <th>Image</th>
            <th>Details</th>
            <th>Remove</th>
        </tr>
    </thead>
    <tbody>
        <?php if ($slider != ''): ?>
            <?php foreach ($slider['images'] as $key => $image): ?>
                <?php
                    $randomKey = sdgl_random_string();
                    include SDGLIDER_PLUGIN_PATH . 'views/admin/share/slider-tr.php';
                ?>
            <?php endforeach; ?>
        <?php endif; ?>
    </tbody>
</table>

<button type="button" id="sdgl-new-slider-image" class="button sd-button"><span class="dashicons dashicons-plus"></span> Add New</button>