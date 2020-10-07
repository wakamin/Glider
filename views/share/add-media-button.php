<div class="sdgl-media">
    <div class="sdgl-media__image-preview-wrapper<?php echo !$value || $value == '' ? ' sd-hide' : '' ?>">
        <img id="<?php echo $mediaBtnData['preview-target-id'] ?>" src="<?php echo $value ?>">
    </div>

    <div class="sdgl-media__add-btn-wrapper">
        <button 
            type="button" 
            class="button sdgl-media__add-btn"
            data-target-input="#<?php echo $mediaBtnData['input-target-id'] ?>"
            data-target-preview="#<?php echo $mediaBtnData['preview-target-id'] ?>"
        >
            <?php _e('Choose Media', 'sd_coupon_central')?>
        </button>
    </div>

    <div class="sdgl-media__remove-wrapper<?php echo !$value || $value == '' ? ' sdgl-hide' : '' ?>"">
        <a 
            href="#"
            class="sd-text-danger sdgl-media__remove"
            data-target-input="#<?php echo $mediaBtnData['input-target-id'] ?>"
            data-target-preview="#<?php echo $mediaBtnData['preview-target-id'] ?>"
        >
            <?php _e('Remove', 'sd_coupon_central'); ?>
        </a>
    </div>
</div>