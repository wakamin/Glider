!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=jQuery},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n);s()(document).ready((function(){var e;s()(".sdgl-media__add-btn").on("click",(function(){var t=s()(this).data("target-input"),r=s()(this).data("target-preview");(e=wp.media.frames.metaImageFrame=wp.media({title:sdgl_script.title,button:{text:sdgl_script.button}})).on("select",(function(){var n=e.state().get("selection").first().toJSON();s()(t).val(n.url),s()(r).attr("src",n.url),s()(r).parent().removeClass("sd-hide"),s()(".sdgl-media__remove-wrapper").removeClass("sd-hide")})),e.open()})),s()(".sdgl-media__remove").on("click",(function(e){e.preventDefault();var t=s()(this).data("target-input"),r=s()(this).data("target-preview");s()(t).val(""),s()(r).attr("src",""),s()(r).parent().addClass("sd-hide"),s()(".sdgl-media__remove-wrapper").addClass("sd-hide")})),s()("#sdgl-new-slider-image").on("click",(function(){s.a.ajax({type:"POST",url:sdgl_script.ajaxurl,data:{action:"sdgl_add_slider_image",nonce_ajax:sdgl_script.nonce},success:function(e){var t=e.data.new_slider;s()("#sdgl-sliders").append(t)},error:function(e){console.log(e)}})})),s()("#sdgl-sliders").on("click",".sdgl-media__add-btn",(function(){var t=s()(this).data("target-input"),r=s()(this).data("target-preview");(e=wp.media.frames.metaImageFrame=wp.media({title:sdgl_script.title,button:{text:sdgl_script.button}})).on("select",(function(){var n=e.state().get("selection").first().toJSON();s()(t).val(n.url),s()(r).attr("src",n.url),s()(r).parent().removeClass("sd-hide"),s()(".sdgl-media__remove-wrapper").removeClass("sd-hide")})),e.open()})),s()("#sdgl-sliders").on("click",".sdgl-remove-slide",(function(){s()(this).parent("td").parent("tr").remove()})),s()("#sdgl-sliders tbody").sortable(),s()("#sdgl-sliders tbody").disableSelection(),s()(".sd-glider-text").on("click",".sd-glider-remove-text",(function(){s()(this).parent("div").remove()})),s()(".sd-glider-add-text").on("click",(function(){var e=s()(this).data("key"),t='<div class="sd-flex" id="sd-glider-text-'.concat(e,'">\n                <input type="text" name="_sd_glider_slider[text][').concat(e,'][]" class="widefat sd-mb2 sd-mr2" value="" />\n                <button type="button" class="sd-glider-remove-text button sd-button sd-button--danger" title="').concat(sdgl_script.remote_text,'"><span class="dashicons dashicons-no-alt"></span></button>\n            </div>');s()(t).insertBefore(s()(this))}))}))}]);