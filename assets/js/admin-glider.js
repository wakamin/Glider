/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/admin-glider.js":
/*!***************************************!*\
  !*** ./src/assets/js/admin-glider.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  "use strict";
  /*=============== Meta box media uploader ================ */
  // Instantiates the variable that holds the media library frame.

  var metaImageFrame; // Runs when the media button is clicked.

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdgl-media__add-btn").on("click", function () {
    // Get the field target
    var field_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-input");
    var preview_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-preview"); // Sets up the media library frame

    metaImageFrame = wp.media.frames.metaImageFrame = wp.media({
      title: sdgl_script.title,
      button: {
        text: sdgl_script.button
      }
    }); // Runs when an image is selected.

    metaImageFrame.on("select", function () {
      // Grabs the attachment selection and creates a JSON representation of the model.
      var media_attachment = metaImageFrame.state().get("selection").first().toJSON(); // Sends the attachment URL to our custom image input field.

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(field_target).val(media_attachment.url);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).attr("src", media_attachment.url);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).parent().removeClass("sd-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdgl-media__remove-wrapper").removeClass("sd-hide");
    }); // Opens the media library frame.

    metaImageFrame.open();
  }); // On click remove media button

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdgl-media__remove").on("click", function (e) {
    e.preventDefault(); // Get the field target

    var field_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-input");
    var preview_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-preview");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(field_target).val("");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).attr("src", "");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).parent().addClass("sd-hide");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdgl-media__remove-wrapper").addClass("sd-hide");
  });
  /*=============== Slider Images Meta box ================ */

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-new-slider-image").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      type: "POST",
      url: sdgl_script.ajaxurl,
      data: {
        action: "sdgl_add_slider_image",
        nonce_ajax: sdgl_script.nonce
      },
      success: function success(res) {
        var data = res.data;
        var new_slider = data.new_slider;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-sliders").append(new_slider);
      },
      error: function error(err) {
        console.log(err);
      }
    });
  }); // Runs when the media button is clicked.

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-sliders").on("click", ".sdgl-media__add-btn", function () {
    // Get the field target
    var field_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-input");
    var preview_target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target-preview"); // Sets up the media library frame

    metaImageFrame = wp.media.frames.metaImageFrame = wp.media({
      title: sdgl_script.title,
      button: {
        text: sdgl_script.button
      }
    }); // Runs when an image is selected.

    metaImageFrame.on("select", function () {
      // Grabs the attachment selection and creates a JSON representation of the model.
      var media_attachment = metaImageFrame.state().get("selection").first().toJSON(); // Sends the attachment URL to our custom image input field.

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(field_target).val(media_attachment.url);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).attr("src", media_attachment.url);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(preview_target).parent().removeClass("sd-hide");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sdgl-media__remove-wrapper").removeClass("sd-hide");
    }); // Opens the media library frame.

    metaImageFrame.open();
  }); // Remove slide

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-sliders").on("click", ".sdgl-remove-slide", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent("td").parent("tr").remove();
  }); // Initialize jQuery UI sortable for slider images table

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-sliders tbody").sortable();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#sdgl-sliders tbody").disableSelection(); // Remove slider text

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sd-glider-text").on("click", ".sd-glider-remove-text", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent("div").remove();
  }); // Add new slider text

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sd-glider-add-text").on("click", function () {
    var key = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("key");
    var html = "<div class=\"sd-flex\" id=\"sd-glider-text-".concat(key, "\">\n                <input type=\"text\" name=\"_sd_glider_slider[text][").concat(key, "][]\" class=\"widefat sd-mb2 sd-mr2\" value=\"\" />\n                <button type=\"button\" class=\"sd-glider-remove-text button sd-button sd-button--danger\" title=\"").concat(sdgl_script.remote_text, "\"><span class=\"dashicons dashicons-no-alt\"></span></button>\n            </div>");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(html).insertBefore(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
});

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/assets/js/admin-glider.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\nirax\wp-content\plugins\glider\src\assets\js\admin-glider.js */"./src/assets/js/admin-glider.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hZG1pbi1nbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJtZXRhSW1hZ2VGcmFtZSIsIm9uIiwiZmllbGRfdGFyZ2V0IiwiZGF0YSIsInByZXZpZXdfdGFyZ2V0Iiwid3AiLCJtZWRpYSIsImZyYW1lcyIsInRpdGxlIiwic2RnbF9zY3JpcHQiLCJidXR0b24iLCJ0ZXh0IiwibWVkaWFfYXR0YWNobWVudCIsInN0YXRlIiwiZ2V0IiwiZmlyc3QiLCJ0b0pTT04iLCJ2YWwiLCJ1cmwiLCJhdHRyIiwicGFyZW50IiwicmVtb3ZlQ2xhc3MiLCJvcGVuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkQ2xhc3MiLCJhamF4IiwidHlwZSIsImFqYXh1cmwiLCJhY3Rpb24iLCJub25jZV9hamF4Iiwibm9uY2UiLCJzdWNjZXNzIiwicmVzIiwibmV3X3NsaWRlciIsImFwcGVuZCIsImVycm9yIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsInNvcnRhYmxlIiwiZGlzYWJsZVNlbGVjdGlvbiIsImtleSIsImh0bWwiLCJyZW1vdGVfdGV4dCIsImluc2VydEJlZm9yZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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eEIsRUFBaUMsd0JBQWpDLEVBQTJELFlBQVk7QUFDbkVKLGlEQUFDLENBQUMsSUFBRCxDQUFELENBQVF1QixNQUFSLENBQWUsS0FBZixFQUFzQm9CLE1BQXRCO0FBQ0gsR0FGRCxFQXBIMEIsQ0F3SDFCOztBQUNBM0MsK0NBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCSSxFQUF6QixDQUE0QixPQUE1QixFQUFxQyxZQUFZO0FBQzdDLFFBQU0wQyxHQUFHLEdBQUc5Qyw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLENBQWEsS0FBYixDQUFaO0FBQ0EsUUFBTXlDLElBQUksd0RBQThDRCxHQUE5QyxzRkFDaURBLEdBRGpELHFMQUU4RmxDLFdBQVcsQ0FBQ29DLFdBRjFHLHVGQUFWO0FBSUFoRCxpREFBQyxDQUFDK0MsSUFBRCxDQUFELENBQVFFLFlBQVIsQ0FBcUJqRCw2Q0FBQyxDQUFDLElBQUQsQ0FBdEI7QUFDSCxHQVBEO0FBUUgsQ0FqSUQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSx3QiIsImZpbGUiOiJhZG1pbi1nbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvKj09PT09PT09PT09PT09PSBNZXRhIGJveCBtZWRpYSB1cGxvYWRlciA9PT09PT09PT09PT09PT09ICovXHJcbiAgICAvLyBJbnN0YW50aWF0ZXMgdGhlIHZhcmlhYmxlIHRoYXQgaG9sZHMgdGhlIG1lZGlhIGxpYnJhcnkgZnJhbWUuXHJcbiAgICB2YXIgbWV0YUltYWdlRnJhbWU7XHJcblxyXG4gICAgLy8gUnVucyB3aGVuIHRoZSBtZWRpYSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICQoXCIuc2RnbC1tZWRpYV9fYWRkLWJ0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBHZXQgdGhlIGZpZWxkIHRhcmdldFxyXG4gICAgICAgIHZhciBmaWVsZF90YXJnZXQgPSAkKHRoaXMpLmRhdGEoXCJ0YXJnZXQtaW5wdXRcIik7XHJcbiAgICAgICAgdmFyIHByZXZpZXdfdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKFwidGFyZ2V0LXByZXZpZXdcIik7XHJcblxyXG4gICAgICAgIC8vIFNldHMgdXAgdGhlIG1lZGlhIGxpYnJhcnkgZnJhbWVcclxuICAgICAgICBtZXRhSW1hZ2VGcmFtZSA9IHdwLm1lZGlhLmZyYW1lcy5tZXRhSW1hZ2VGcmFtZSA9IHdwLm1lZGlhKHtcclxuICAgICAgICAgICAgdGl0bGU6IHNkZ2xfc2NyaXB0LnRpdGxlLFxyXG4gICAgICAgICAgICBidXR0b246IHsgdGV4dDogc2RnbF9zY3JpcHQuYnV0dG9uIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJ1bnMgd2hlbiBhbiBpbWFnZSBpcyBzZWxlY3RlZC5cclxuICAgICAgICBtZXRhSW1hZ2VGcmFtZS5vbihcInNlbGVjdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIEdyYWJzIHRoZSBhdHRhY2htZW50IHNlbGVjdGlvbiBhbmQgY3JlYXRlcyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIG1vZGVsLlxyXG4gICAgICAgICAgICB2YXIgbWVkaWFfYXR0YWNobWVudCA9IG1ldGFJbWFnZUZyYW1lXHJcbiAgICAgICAgICAgICAgICAuc3RhdGUoKVxyXG4gICAgICAgICAgICAgICAgLmdldChcInNlbGVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgICAgIC50b0pTT04oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNlbmRzIHRoZSBhdHRhY2htZW50IFVSTCB0byBvdXIgY3VzdG9tIGltYWdlIGlucHV0IGZpZWxkLlxyXG4gICAgICAgICAgICAkKGZpZWxkX3RhcmdldCkudmFsKG1lZGlhX2F0dGFjaG1lbnQudXJsKTtcclxuICAgICAgICAgICAgJChwcmV2aWV3X3RhcmdldCkuYXR0cihcInNyY1wiLCBtZWRpYV9hdHRhY2htZW50LnVybCk7XHJcbiAgICAgICAgICAgICQocHJldmlld190YXJnZXQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwic2QtaGlkZVwiKTtcclxuICAgICAgICAgICAgJChcIi5zZGdsLW1lZGlhX19yZW1vdmUtd3JhcHBlclwiKS5yZW1vdmVDbGFzcyhcInNkLWhpZGVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE9wZW5zIHRoZSBtZWRpYSBsaWJyYXJ5IGZyYW1lLlxyXG4gICAgICAgIG1ldGFJbWFnZUZyYW1lLm9wZW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9uIGNsaWNrIHJlbW92ZSBtZWRpYSBidXR0b25cclxuICAgICQoXCIuc2RnbC1tZWRpYV9fcmVtb3ZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgZmllbGQgdGFyZ2V0XHJcbiAgICAgICAgdmFyIGZpZWxkX3RhcmdldCA9ICQodGhpcykuZGF0YShcInRhcmdldC1pbnB1dFwiKTtcclxuICAgICAgICB2YXIgcHJldmlld190YXJnZXQgPSAkKHRoaXMpLmRhdGEoXCJ0YXJnZXQtcHJldmlld1wiKTtcclxuXHJcbiAgICAgICAgJChmaWVsZF90YXJnZXQpLnZhbChcIlwiKTtcclxuICAgICAgICAkKHByZXZpZXdfdGFyZ2V0KS5hdHRyKFwic3JjXCIsIFwiXCIpO1xyXG4gICAgICAgICQocHJldmlld190YXJnZXQpLnBhcmVudCgpLmFkZENsYXNzKFwic2QtaGlkZVwiKTtcclxuICAgICAgICAkKFwiLnNkZ2wtbWVkaWFfX3JlbW92ZS13cmFwcGVyXCIpLmFkZENsYXNzKFwic2QtaGlkZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qPT09PT09PT09PT09PT09IFNsaWRlciBJbWFnZXMgTWV0YSBib3ggPT09PT09PT09PT09PT09PSAqL1xyXG4gICAgJChcIiNzZGdsLW5ldy1zbGlkZXItaW1hZ2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogc2RnbF9zY3JpcHQuYWpheHVybCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInNkZ2xfYWRkX3NsaWRlcl9pbWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgbm9uY2VfYWpheDogc2RnbF9zY3JpcHQubm9uY2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3X3NsaWRlciA9IGRhdGEubmV3X3NsaWRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI3NkZ2wtc2xpZGVyc1wiKS5hcHBlbmQobmV3X3NsaWRlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUnVucyB3aGVuIHRoZSBtZWRpYSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICQoXCIjc2RnbC1zbGlkZXJzXCIpLm9uKFwiY2xpY2tcIiwgXCIuc2RnbC1tZWRpYV9fYWRkLWJ0blwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBmaWVsZCB0YXJnZXRcclxuICAgICAgICB2YXIgZmllbGRfdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKFwidGFyZ2V0LWlucHV0XCIpO1xyXG4gICAgICAgIHZhciBwcmV2aWV3X3RhcmdldCA9ICQodGhpcykuZGF0YShcInRhcmdldC1wcmV2aWV3XCIpO1xyXG5cclxuICAgICAgICAvLyBTZXRzIHVwIHRoZSBtZWRpYSBsaWJyYXJ5IGZyYW1lXHJcbiAgICAgICAgbWV0YUltYWdlRnJhbWUgPSB3cC5tZWRpYS5mcmFtZXMubWV0YUltYWdlRnJhbWUgPSB3cC5tZWRpYSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBzZGdsX3NjcmlwdC50aXRsZSxcclxuICAgICAgICAgICAgYnV0dG9uOiB7IHRleHQ6IHNkZ2xfc2NyaXB0LmJ1dHRvbiB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSdW5zIHdoZW4gYW4gaW1hZ2UgaXMgc2VsZWN0ZWQuXHJcbiAgICAgICAgbWV0YUltYWdlRnJhbWUub24oXCJzZWxlY3RcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBHcmFicyB0aGUgYXR0YWNobWVudCBzZWxlY3Rpb24gYW5kIGNyZWF0ZXMgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtb2RlbC5cclxuICAgICAgICAgICAgdmFyIG1lZGlhX2F0dGFjaG1lbnQgPSBtZXRhSW1hZ2VGcmFtZVxyXG4gICAgICAgICAgICAgICAgLnN0YXRlKClcclxuICAgICAgICAgICAgICAgIC5nZXQoXCJzZWxlY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAgICAgICAudG9KU09OKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZW5kcyB0aGUgYXR0YWNobWVudCBVUkwgdG8gb3VyIGN1c3RvbSBpbWFnZSBpbnB1dCBmaWVsZC5cclxuICAgICAgICAgICAgJChmaWVsZF90YXJnZXQpLnZhbChtZWRpYV9hdHRhY2htZW50LnVybCk7XHJcbiAgICAgICAgICAgICQocHJldmlld190YXJnZXQpLmF0dHIoXCJzcmNcIiwgbWVkaWFfYXR0YWNobWVudC51cmwpO1xyXG4gICAgICAgICAgICAkKHByZXZpZXdfdGFyZ2V0KS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcInNkLWhpZGVcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2RnbC1tZWRpYV9fcmVtb3ZlLXdyYXBwZXJcIikucmVtb3ZlQ2xhc3MoXCJzZC1oaWRlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBPcGVucyB0aGUgbWVkaWEgbGlicmFyeSBmcmFtZS5cclxuICAgICAgICBtZXRhSW1hZ2VGcmFtZS5vcGVuKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSZW1vdmUgc2xpZGVcclxuICAgICQoXCIjc2RnbC1zbGlkZXJzXCIpLm9uKFwiY2xpY2tcIiwgXCIuc2RnbC1yZW1vdmUtc2xpZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KFwidGRcIikucGFyZW50KFwidHJcIikucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIGpRdWVyeSBVSSBzb3J0YWJsZSBmb3Igc2xpZGVyIGltYWdlcyB0YWJsZVxyXG4gICAgJChcIiNzZGdsLXNsaWRlcnMgdGJvZHlcIikuc29ydGFibGUoKTtcclxuICAgICQoXCIjc2RnbC1zbGlkZXJzIHRib2R5XCIpLmRpc2FibGVTZWxlY3Rpb24oKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgc2xpZGVyIHRleHRcclxuICAgICQoXCIuc2QtZ2xpZGVyLXRleHRcIikub24oXCJjbGlja1wiLCBcIi5zZC1nbGlkZXItcmVtb3ZlLXRleHRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KFwiZGl2XCIpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIG5ldyBzbGlkZXIgdGV4dFxyXG4gICAgJChcIi5zZC1nbGlkZXItYWRkLXRleHRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gJCh0aGlzKS5kYXRhKFwia2V5XCIpO1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBgPGRpdiBjbGFzcz1cInNkLWZsZXhcIiBpZD1cInNkLWdsaWRlci10ZXh0LSR7a2V5fVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIl9zZF9nbGlkZXJfc2xpZGVyW3RleHRdWyR7a2V5fV1bXVwiIGNsYXNzPVwid2lkZWZhdCBzZC1tYjIgc2QtbXIyXCIgdmFsdWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzZC1nbGlkZXItcmVtb3ZlLXRleHQgYnV0dG9uIHNkLWJ1dHRvbiBzZC1idXR0b24tLWRhbmdlclwiIHRpdGxlPVwiJHtzZGdsX3NjcmlwdC5yZW1vdGVfdGV4dH1cIj48c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtbm8tYWx0XCI+PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICQoaHRtbCkuaW5zZXJ0QmVmb3JlKCQodGhpcykpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9