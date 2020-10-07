<tr>
    <td><span class="dashicons dashicons-move"></span></td>
    <td>
        <?php
            $targetPreview = '_sd_glider_slider-'.$key;
            $targetInput = $targetPreview . '-input';
            sdgl_render_media_button($targetPreview, $targetInput, $value);
        ?>
        <input type="hidden" name="_sd_glider_slider[images][]" id="sd_glider_slider_images-<?php echo $key ?>" value="<?php echo $slide['images'][$key] ?>" />
    </td>
    <td>
        <table class="sd-mbox-form-table" role="presentation">
            <tbody>
                <tr>
                    <th scope="row">
                        <label for="sd_glider_slider_alts-<?php echo $key ?>">Alt Image</label>
                    </th>
                    <td>
                        <input type="text" name="_sd_glider_slider[alts][]" id="sd_glider_slider_alts-<?php echo $key ?>" class="widefat" value="<?php echo $slide['alts'][$key] ?>" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label for="sd_glider_slider_links-<?php echo $key ?>">Link</label>
                    </th>
                    <td>
                        <input type="text" name="_sd_glider_slider[links][]" id="sd_glider_slider_links-<?php echo $key ?>" class="widefat" value="<?php echo $slide['links'][$key] ?>" />
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label for="sd_glider_slider_new_tabs-<?php echo $key ?>">New Tab</label>
                    </th>
                    <td>
                        <select name="_sd_glider_slider[new_tabs][]" id="sd_glider_slider_new_tabs-<?php echo $key ?>">
                            <option value="0" <?php selected($slide['new_tabs'][$key], 0) ?>><?php esc_html_e('No', 'sd_glider') ?></option>
                            <option value="1" <?php selected($slide['new_tabs'][$key], 1) ?>><?php esc_html_e('Yes', 'sd_glider') ?></option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </td>
    <td>
        <button class="button sd-button sd-button--danger" data-key="<?php echo $key ?>">
            <span class="dashicons dashicons-no-alt"></span>
        </button>
    </td>
</tr>