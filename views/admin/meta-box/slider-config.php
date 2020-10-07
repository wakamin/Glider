<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

?>

<table class="sd-mbox-form-table" role="presentation">
    <tbody>
        <?php foreach ($this->gliderConfigMetaBoxes as $mBox): ?>
        <?php $value = esc_attr(get_post_meta($post->ID, $mBox['key'], true)); ?>
            <tr>
                <th scope="row">
                    <label for="sd_coupon_code"><?php echo $mBox['name'] ?></label>
                </th>
                <td>
                    <?php if ($mBox['field_type'] == 'text'): ?>
                        <input type="text" class="<?php echo $mBox['wide_field'] ? 'widefat' : '' ?>" name="<?php echo $mBox['key'] ?>" id="<?php echo $mBox['key'] ?>" value="<?php echo $value ?>" />
                    <?php endif; ?>

                    <?php if ($mBox['field_type'] == 'select'): ?>
                        <select name="<?php echo $mBox['key'] ?>" id="<?php echo $mBox['key'] ?>" class="sd-select2">
                            <?php $options = call_user_func($mBox['options']); ?>
                            <?php foreach ($options as $option): ?>
                                <option value="<?php echo esc_attr($option['value']) ?>" <?php selected($value, esc_attr($option['value'])) ?>><?php echo esc_attr($option['text']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    <?php endif; ?>

                    <?php if ($mBox['field_type'] == 'datepicker'): ?>
                        <input type="text" class="sd-datepicker" name="<?php echo $mBox['key'] ?>" id="<?php echo $mBox['key'] ?>" value="<?php echo $value ?>" />
                    <?php endif; ?>

                    <?php if ($mBox['field_type'] == 'checkbox'): ?>
                        <input type="checkbox" name="<?php echo $mBox['key'] ?>" id="<?php echo $mBox['key'] ?>" value="yes" <?php echo $value == 'yes' ? 'checked' : '' ?> />
                    <?php endif; ?>

                    <?php if ($mBox['field_type'] == 'media'): ?>
                        <?php
                            $targetPreview = $mBox['key'];
                            $targetInput = $targetPreview . '-input';
                            sdgl_render_media_button($targetPreview, $targetInput, $value);
                        ?>
                        <input type="hidden" name="<?php echo $mBox['key'] ?>" id="<?php echo $targetInput ?>" value="<?php echo $value ?>" />
                    <?php endif; ?>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>