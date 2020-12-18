import $ from "jquery";

$(document).ready(function () {
    "use strict";

    /*=============== Meta box media uploader ================ */
    // Instantiates the variable that holds the media library frame.
    var metaImageFrame;

    // Runs when the media button is clicked.
    $(".sdgl-media__add-btn").on("click", function () {
        // Get the field target
        var field_target = $(this).data("target-input");
        var preview_target = $(this).data("target-preview");

        // Sets up the media library frame
        metaImageFrame = wp.media.frames.metaImageFrame = wp.media({
            title: sdgl_script.title,
            button: { text: sdgl_script.button },
        });

        // Runs when an image is selected.
        metaImageFrame.on("select", function () {
            // Grabs the attachment selection and creates a JSON representation of the model.
            var media_attachment = metaImageFrame
                .state()
                .get("selection")
                .first()
                .toJSON();

            // Sends the attachment URL to our custom image input field.
            $(field_target).val(media_attachment.url);
            $(preview_target).attr("src", media_attachment.url);
            $(preview_target).parent().removeClass("sd-hide");
            $(".sdgl-media__remove-wrapper").removeClass("sd-hide");
        });

        // Opens the media library frame.
        metaImageFrame.open();
    });

    // On click remove media button
    $(".sdgl-media__remove").on("click", function (e) {
        e.preventDefault();

        // Get the field target
        var field_target = $(this).data("target-input");
        var preview_target = $(this).data("target-preview");

        $(field_target).val("");
        $(preview_target).attr("src", "");
        $(preview_target).parent().addClass("sd-hide");
        $(".sdgl-media__remove-wrapper").addClass("sd-hide");
    });

    /*=============== Slider Images Meta box ================ */
    $("#sdgl-new-slider-image").on("click", function () {
        $.ajax({
            type: "POST",
            url: sdgl_script.ajaxurl,
            data: {
                action: "sdgl_add_slider_image",
                nonce_ajax: sdgl_script.nonce,
            },
            success: function (res) {
                let data = res.data;
                let new_slider = data.new_slider;

                $("#sdgl-sliders").append(new_slider);
            },
            error: function (err) {
                console.log(err);
            },
        });
    });

    // Runs when the media button is clicked.
    $("#sdgl-sliders").on("click", ".sdgl-media__add-btn", function () {
        // Get the field target
        var field_target = $(this).data("target-input");
        var preview_target = $(this).data("target-preview");

        // Sets up the media library frame
        metaImageFrame = wp.media.frames.metaImageFrame = wp.media({
            title: sdgl_script.title,
            button: { text: sdgl_script.button },
        });

        // Runs when an image is selected.
        metaImageFrame.on("select", function () {
            // Grabs the attachment selection and creates a JSON representation of the model.
            var media_attachment = metaImageFrame
                .state()
                .get("selection")
                .first()
                .toJSON();

            // Sends the attachment URL to our custom image input field.
            $(field_target).val(media_attachment.url);
            $(preview_target).attr("src", media_attachment.url);
            $(preview_target).parent().removeClass("sd-hide");
            $(".sdgl-media__remove-wrapper").removeClass("sd-hide");
        });

        // Opens the media library frame.
        metaImageFrame.open();
    });

    // Remove slide
    $("#sdgl-sliders").on("click", ".sdgl-remove-slide", function () {
        $(this).parent("td").parent("tr").remove();
    });

    // Initialize jQuery UI sortable for slider images table
    $("#sdgl-sliders tbody").sortable();
    $("#sdgl-sliders tbody").disableSelection();

    // Remove slider text
    $(".sd-glider-text").on("click", ".sd-glider-remove-text", function () {
        $(this).parent("div").remove();
    });

    // Add new slider text
    $("#sdgl-sliders").on("click", ".sd-glider-add-text", function () {
        const key = $(this).data("key");
        const html = `<div class="sd-flex" id="sd-glider-text-${key}">
                <input type="text" name="_sd_glider_slider[text][${key}][]" class="widefat sd-mb2 sd-mr2" value="" />
                <button type="button" class="sd-glider-remove-text button sd-button sd-button--danger" title="${sdgl_script.remote_text}"><span class="dashicons dashicons-no-alt"></span></button>
            </div>`;
        $(html).insertBefore($(this));
    });
});
