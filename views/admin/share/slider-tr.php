<tr>
    <td class="sd-move"><span class="dashicons dashicons-move"></span></td>
    <td>
        <?php
            $targetPreview = 'sd_glider_slider_images-'.$randomKey;
            $targetInput = $targetPreview . '-input';
            sdgl_render_media_button($targetPreview, $targetInput, $image);
        ?>
        <input type="hidden" name="_sd_glider_slider[images][]" id="sd_glider_slider_images-<?php echo $randomKey ?>-input" value="<?php echo $image ?>" />
    </td>
    <td>
        <table class="sd-mbox-form-table" role="presentation">
            <tbody>
                <tr>
                    <th scope="row">
                        <label for="sd_glider_slider_alts-<?php echo $randomKey ?>">Alt Image</label>
                    </th>
                    <td>
                        <input type="text" name="_sd_glider_slider[alts][]" id="sd_glider_slider_alts-<?php echo $randomKey ?>" class="widefat" value="<?php echo $slider['alts'][$key] ?>" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label for="sd_glider_slider_links-<?php echo $randomKey ?>">Link</label>
                    </th>
                    <td>
                        <input type="text" name="_sd_glider_slider[links][]" id="sd_glider_slider_links-<?php echo $randomKey ?>" class="widefat" value="<?php echo $slider['links'][$key] ?>" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label for="sd_glider_slider_new_tabs-<?php echo $randomKey ?>">New Tab</label>
                    </th>
                    <td>
                        <select name="_sd_glider_slider[new_tabs][]" id="sd_glider_slider_new_tabs-<?php echo $randomKey ?>">
                            <option value="0" <?php selected($slider['new_tabs'][$key], 0) ?>><?php esc_html_e('No', 'sd_glider') ?></option>
                            <option value="1" <?php selected($slider['new_tabs'][$key], 1) ?>><?php esc_html_e('Yes', 'sd_glider') ?></option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label>Text</label>
                    </th>
                    <td>
                        <div class="sd-glider-text">
                            <?php if (isset($slider['text']) && !empty($slider['text'])): ?>
                                <?php foreach ($slider['text'][$key] as $text): ?>
                                    <div class="sd-flex" id="sd-glider-text-<?php echo $key ?>">
                                        <input type="text" name="_sd_glider_slider[text][<?php echo $key ?>][]" class="widefat sd-mb2 sd-mr2" value="<?php echo $text ?>" />
                                        <button type="button" class="sd-glider-remove-text button sd-button sd-button--danger" title="<?php esc_html_e('Remove', 'sd_glider'); ?>"><span class="dashicons dashicons-no-alt"></span></button>
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                            <button type="button" class="button sd-glider-add-text" data-key="<?php echo $key ?>">Add new text</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
    <td>
        <button type="button" class="button sd-button sd-button--danger sdgl-remove-slide" data-key="<?php echo $randomKey ?>">
            <span class="dashicons dashicons-no-alt"></span>
        </button>
    </td>
</tr>