(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/@ionic-native/camera/ngx/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ionic-native/camera/ngx/index.js ***!
  \********************************************************/
/*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingType", function() { return EncodingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSourceType", function() { return PictureSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function() { return PopoverArrowDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
    Camera = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Camera);
    return Camera;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFxRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsMkVBQTJFO1lBQzNFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsOEVBQThFO1lBQzlFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7SUF4RkksTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQTlLbkI7RUE4SzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhT3B0aW9ucyB7XG4gIC8qKiBQaWN0dXJlIHF1YWxpdHkgaW4gcmFuZ2UgMC0xMDAuIERlZmF1bHQgaXMgNTAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBEQVRBX1VSTCA6IDAsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZyAoREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlKSxcbiAgICogICAgICBGSUxFX1VSSSA6IDEsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIE5BVElWRV9VUkkgOiAyICBSZXR1cm4gaW1hZ2UgbmF0aXZlIFVSSVxuICAgKiAgICAgICAgICAoZS5nLiwgYXNzZXRzLWxpYnJhcnk6Ly8gb24gaU9TIG9yIGNvbnRlbnQ6Ly8gb24gQW5kcm9pZClcbiAgICovXG4gIGRlc3RpbmF0aW9uVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgc291cmNlIG9mIHRoZSBwaWN0dXJlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS4gRGVmYXVsdCBpcyBDQU1FUkEuXG4gICAqICAgICAgUEhPVE9MSUJSQVJZIDogMCxcbiAgICogICAgICBDQU1FUkEgOiAxLFxuICAgKiAgICAgIFNBVkVEUEhPVE9BTEJVTSA6IDJcbiAgICovXG4gIHNvdXJjZVR5cGU/OiBudW1iZXI7XG4gIC8qKiBBbGxvdyBzaW1wbGUgZWRpdGluZyBvZiBpbWFnZSBiZWZvcmUgc2VsZWN0aW9uLiAqL1xuICBhbGxvd0VkaXQ/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSByZXR1cm5lZCBpbWFnZSBmaWxlJ3MgZW5jb2RpbmcuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkVuY29kaW5nVHlwZS4gRGVmYXVsdCBpcyBKUEVHXG4gICAqICAgICAgSlBFRyA6IDAgICAgUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZVxuICAgKiAgICAgIFBORyA6IDEgICAgIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZVxuICAgKi9cbiAgZW5jb2RpbmdUeXBlPzogbnVtYmVyO1xuICAvKipcbiAgICogV2lkdGggaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRIZWlnaHQuXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBIZWlnaHQgaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRXaWR0aC5cbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXG4gICAqL1xuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHR5cGUgb2YgbWVkaWEgdG8gc2VsZWN0IGZyb20uIE9ubHkgd29ya3Mgd2hlbiBQaWN0dXJlU291cmNlVHlwZVxuICAgKiBpcyBQSE9UT0xJQlJBUlkgb3IgU0FWRURQSE9UT0FMQlVNLiBEZWZpbmVkIGluIENhbWVyYS5NZWRpYVR5cGVcbiAgICogICAgICBQSUNUVVJFOiAwICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuXG4gICAqICAgICAgICAgIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZVxuICAgKiAgICAgIFZJREVPOiAxICAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgV0lMTCBBTFdBWVMgUkVUVVJOIEZJTEVfVVJJXG4gICAqICAgICAgQUxMTUVESUEgOiAyICAgIGFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlc1xuICAgKi9cbiAgbWVkaWFUeXBlPzogbnVtYmVyO1xuICAvKiogUm90YXRlIHRoZSBpbWFnZSB0byBjb3JyZWN0IGZvciB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZSBkdXJpbmcgY2FwdHVyZS4gKi9cbiAgY29ycmVjdE9yaWVudGF0aW9uPzogYm9vbGVhbjtcbiAgLyoqIFNhdmUgdGhlIGltYWdlIHRvIHRoZSBwaG90byBhbGJ1bSBvbiB0aGUgZGV2aWNlIGFmdGVyIGNhcHR1cmUuICovXG4gIHNhdmVUb1Bob3RvQWxidW0/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlIChmcm9udC0gb3IgYmFjay1mYWNpbmcpLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EaXJlY3Rpb24uIERlZmF1bHQgaXMgQkFDSy5cbiAgICogICAgICBCQUNLOiAwXG4gICAqICAgICAgRlJPTlQ6IDFcbiAgICovXG4gIGNhbWVyYURpcmVjdGlvbj86IG51bWJlcjtcbiAgLyoqIGlPUy1vbmx5IG9wdGlvbnMgdGhhdCBzcGVjaWZ5IHBvcG92ZXIgbG9jYXRpb24gaW4gaVBhZC4gRGVmaW5lZCBpbiBDYW1lcmFQb3BvdmVyT3B0aW9ucy4gKi9cbiAgcG9wb3Zlck9wdGlvbnM/OiBDYW1lcmFQb3BvdmVyT3B0aW9ucztcbn1cblxuLyoqXG4gKiBpT1Mtb25seSBwYXJhbWV0ZXJzIHRoYXQgc3BlY2lmeSB0aGUgYW5jaG9yIGVsZW1lbnQgbG9jYXRpb24gYW5kIGFycm93IGRpcmVjdGlvblxuICogb2YgdGhlIHBvcG92ZXIgd2hlbiBzZWxlY3RpbmcgaW1hZ2VzIGZyb20gYW4gaVBhZCdzIGxpYnJhcnkgb3IgYWxidW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9wb3Zlck9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gdGhlIGFycm93IG9uIHRoZSBwb3BvdmVyIHNob3VsZCBwb2ludC4gRGVmaW5lZCBpbiBDYW1lcmEuUG9wb3ZlckFycm93RGlyZWN0aW9uXG4gICAqIE1hdGNoZXMgaU9TIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGNvbnN0YW50cy5cbiAgICogICAgICBBUlJPV19VUCA6IDEsXG4gICAqICAgICAgQVJST1dfRE9XTiA6IDIsXG4gICAqICAgICAgQVJST1dfTEVGVCA6IDQsXG4gICAqICAgICAgQVJST1dfUklHSFQgOiA4LFxuICAgKiAgICAgIEFSUk9XX0FOWSA6IDE1XG4gICAqL1xuICBhcnJvd0RpcjogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBEZXN0aW5hdGlvblR5cGUge1xuICBEQVRBX1VSTCA9IDAsXG4gIEZJTEVfVVJMLFxuICBOQVRJVkVfVVJJXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kaW5nVHlwZSB7XG4gIEpQRUcgPSAwLFxuICBQTkdcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQVxufVxuXG5leHBvcnQgZW51bSBQaWN0dXJlU291cmNlVHlwZSB7XG4gIFBIT1RPTElCUkFSWSA9IDAsXG4gIENBTUVSQSxcbiAgU0FWRURQSE9UT0FMQlVNXG59XG5cbmV4cG9ydCBlbnVtIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiB7XG4gIEFSUk9XX1VQID0gMSxcbiAgQVJST1dfRE9XTixcbiAgQVJST1dfTEVGVCxcbiAgQVJST1dfUklHSFQsXG4gIEFSUk9XX0FOWVxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlRcbn1cblxuLyoqXG4gKiBAbmFtZSBDYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBDYW1lcmFPcHRpb25zID0ge1xuICogICBxdWFsaXR5OiAxMDAsXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICogICBlbmNvZGluZ1R5cGU6IHRoaXMuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXG4gKiB9XG4gKlxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcbiAqICAvLyBJZiBpdCdzIGJhc2U2NCAoREFUQV9VUkwpOlxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgLy8gSGFuZGxlIGVycm9yXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYU9wdGlvbnNcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBFbmNvZGluZ1R5cGUgPSB7XG4gICAgLyoqIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBKUEVHOiAwLFxuICAgIC8qKiBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBQTkc6IDFcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDJcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiA9IHtcbiAgICBBUlJPV19VUDogMSxcbiAgICBBUlJPV19ET1dOOiAyLFxuICAgIEFSUk9XX0xFRlQ6IDQsXG4gICAgQVJST1dfUklHSFQ6IDgsXG4gICAgQVJST1dfQU5ZOiAxNVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0UGljdHVyZShvcHRpb25zPzogQ2FtZXJhT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgaW1hZ2UgZmlsZXMgdGhhdCBhcmUga2VwdCBpbiB0ZW1wb3Jhcnkgc3RvcmFnZSBhZnRlciBjYWxsaW5nIGNhbWVyYS5nZXRQaWN0dXJlLlxuICAgKiBBcHBsaWVzIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgQ2FtZXJhLnNvdXJjZVR5cGUgZXF1YWxzIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS5DQU1FUkEgYW5kIHRoZSBDYW1lcmEuZGVzdGluYXRpb25UeXBlIGVxdWFscyBDYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/http/ngx/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ionic-native/http/ngx/index.js ***!
  \******************************************************/
/*! exports provided: HTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP", function() { return HTTP; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HTTP = /** @class */ (function (_super) {
    __extends(HTTP, _super);
    function HTTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTP.prototype.getBasicAuthHeader = function (username, password) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getBasicAuthHeader", { "sync": true }, arguments); };
    HTTP.prototype.useBasicAuth = function (username, password) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "useBasicAuth", { "sync": true }, arguments); };
    HTTP.prototype.getHeaders = function (host) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getHeaders", { "sync": true }, arguments); };
    HTTP.prototype.setHeader = function (host, header, value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setHeader", { "sync": true }, arguments); };
    HTTP.prototype.getDataSerializer = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setDataSerializer = function (serializer) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setDataSerializer", { "sync": true }, arguments); };
    HTTP.prototype.setCookie = function (url, cookie) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setCookie", { "sync": true }, arguments); };
    HTTP.prototype.clearCookies = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "clearCookies", { "sync": true }, arguments); };
    HTTP.prototype.removeCookies = function (url, cb) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "removeCookies", { "sync": true }, arguments); };
    HTTP.prototype.getCookieString = function (url) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getCookieString", { "sync": true }, arguments); };
    HTTP.prototype.getRequestTimeout = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.setRequestTimeout = function (timeout) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setRequestTimeout", { "sync": true }, arguments); };
    HTTP.prototype.setSSLCertMode = function (mode) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setSSLCertMode", {}, arguments); };
    HTTP.prototype.disableRedirect = function (disable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "disableRedirect", {}, arguments); };
    HTTP.prototype.post = function (url, body, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "post", {}, arguments); };
    HTTP.prototype.get = function (url, parameters, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "get", {}, arguments); };
    HTTP.prototype.put = function (url, body, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "put", {}, arguments); };
    HTTP.prototype.patch = function (url, body, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "patch", {}, arguments); };
    HTTP.prototype.delete = function (url, parameters, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "delete", {}, arguments); };
    HTTP.prototype.head = function (url, parameters, headers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "head", {}, arguments); };
    HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "uploadFile", {}, arguments); };
    HTTP.prototype.downloadFile = function (url, body, headers, filePath) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "downloadFile", {}, arguments); };
    HTTP.prototype.sendRequest = function (url, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "sendRequest", {}, arguments); };
    HTTP.pluginName = "HTTP";
    HTTP.plugin = "cordova-plugin-advanced-http";
    HTTP.pluginRef = "cordova.plugin.http";
    HTTP.repo = "https://github.com/silkimen/cordova-plugin-advanced-http";
    HTTP.platforms = ["Android", "iOS"];
    HTTP = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HTTP);
    return HTTP;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2h0dHAvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBc0U5Qyx3QkFBaUI7Ozs7SUFRekMsaUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxRQUFnQjtJQVVyRCwyQkFBWSxhQUFDLFFBQWdCLEVBQUUsUUFBZ0I7SUFRL0MseUJBQVUsYUFBQyxJQUFZO0lBV3ZCLHdCQUFTLGFBQUMsSUFBWSxFQUFFLE1BQWMsRUFBRSxLQUFhO0lBT3JELGdDQUFpQjtJQVNqQixnQ0FBaUIsYUFBQyxVQUFrQjtJQVFwQyx3QkFBUyxhQUFDLEdBQVcsRUFBRSxNQUFjO0lBTXJDLDJCQUFZO0lBUVosNEJBQWEsYUFBQyxHQUFXLEVBQUUsRUFBYztJQU96Qyw4QkFBZSxhQUFDLEdBQVc7SUFTM0IsZ0NBQWlCO0lBU2pCLGdDQUFpQixhQUFDLE9BQWU7SUFZakMsNkJBQWMsYUFBQyxJQUFpRDtJQVVoRSw4QkFBZSxhQUFDLE9BQWdCO0lBWWhDLG1CQUFJLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0lBWXpDLGtCQUFHLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0lBWTlDLGtCQUFHLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0lBWXhDLG9CQUFLLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZO0lBWTFDLHFCQUFNLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0lBWWpELG1CQUFJLGFBQUMsR0FBVyxFQUFFLFVBQWUsRUFBRSxPQUFZO0lBYy9DLHlCQUFVLGFBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZLEVBQUUsUUFBMkIsRUFBRSxJQUF1QjtJQWFyRywyQkFBWSxhQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsT0FBWSxFQUFFLFFBQWdCO0lBcUJuRSwwQkFBVyxhQUNULEdBQVcsRUFDWCxPQVVDOzs7Ozs7SUE5UFEsSUFBSTtRQURoQixVQUFVLEVBQUU7T0FDQSxJQUFJO2VBdkVqQjtFQXVFMEIsaUJBQWlCO1NBQTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBIVFRQUmVzcG9uc2Uge1xuICAvKipcbiAgICogVGhlIHN0YXR1cyBudW1iZXIgb2YgdGhlIHJlc3BvbnNlXG4gICAqL1xuICBzdGF0dXM6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBoZWFkZXJzIG9mIHRoZSByZXNwb25zZVxuICAgKi9cbiAgaGVhZGVyczogYW55O1xuICAvKipcbiAgICogVGhlIFVSTCBvZiB0aGUgcmVzcG9uc2UuIFRoaXMgcHJvcGVydHkgd2lsbCBiZSB0aGUgZmluYWwgVVJMIG9idGFpbmVkIGFmdGVyIGFueSByZWRpcmVjdHMuXG4gICAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIHRoYXQgaXMgaW4gdGhlIHJlc3BvbnNlLiBUaGlzIHByb3BlcnR5IHVzdWFsbHkgZXhpc3RzIHdoZW4gYSBwcm9taXNlIHJldHVybmVkIGJ5IGEgcmVxdWVzdCBtZXRob2QgcmVzb2x2ZXMuXG4gICAqL1xuICBkYXRhPzogYW55O1xuICAvKipcbiAgICogRXJyb3IgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyLiBUaGlzIHByb3BlcnR5IHVzdWFsbHkgZXhpc3RzIHdoZW4gYSBwcm9taXNlIHJldHVybmVkIGJ5IGEgcmVxdWVzdCBtZXRob2QgcmVqZWN0cy5cbiAgICovXG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEhUVFBcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSAvIFBob25lZ2FwIHBsdWdpbiBmb3IgY29tbXVuaWNhdGluZyB3aXRoIEhUVFAgc2VydmVycy4gU3VwcG9ydHMgaU9TIGFuZCBBbmRyb2lkLlxuICpcbiAqIEFkdmFudGFnZXMgb3ZlciBKYXZhc2NyaXB0IHJlcXVlc3RzOlxuICogLSBCYWNrZ3JvdW5kIHRocmVhZGluZyAtIGFsbCByZXF1ZXN0cyBhcmUgZG9uZSBpbiBhIGJhY2tncm91bmQgdGhyZWFkXG4gKiAtIFNTTCBQaW5uaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9odHRwL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIVFRQKSB7fVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9pb25pYy5pbycsIHt9LCB7fSlcbiAqICAgLnRoZW4oZGF0YSA9PiB7XG4gKlxuICogICAgIGNvbnNvbGUubG9nKGRhdGEuc3RhdHVzKTtcbiAqICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpOyAvLyBkYXRhIHJlY2VpdmVkIGJ5IHNlcnZlclxuICogICAgIGNvbnNvbGUubG9nKGRhdGEuaGVhZGVycyk7XG4gKlxuICogICB9KVxuICogICAuY2F0Y2goZXJyb3IgPT4ge1xuICpcbiAqICAgICBjb25zb2xlLmxvZyhlcnJvci5zdGF0dXMpO1xuICogICAgIGNvbnNvbGUubG9nKGVycm9yLmVycm9yKTsgLy8gZXJyb3IgbWVzc2FnZSBhcyBzdHJpbmdcbiAqICAgICBjb25zb2xlLmxvZyhlcnJvci5oZWFkZXJzKTtcbiAqXG4gKiAgIH0pO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEhUVFBSZXNwb25zZVxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hUVFAnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hZHZhbmNlZC1odHRwJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW4uaHR0cCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2lsa2ltZW4vY29yZG92YS1wbHVnaW4tYWR2YW5jZWQtaHR0cCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhUVFAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIHJldHVybnMgYW4gb2JqZWN0IHJlcHJlc2VudGluZyBhIGJhc2ljIEhUVFAgQXV0aG9yaXphdGlvbiBoZWFkZXIgb2YgdGhlIGZvcm0uXG4gICAqIEBwYXJhbSB1c2VybmFtZSB7c3RyaW5nfSBVc2VybmFtZVxuICAgKiBAcGFyYW0gcGFzc3dvcmQge3N0cmluZ30gUGFzc3dvcmRcbiAgICogQHJldHVybnMge09iamVjdH0gYW4gb2JqZWN0IHJlcHJlc2VudGluZyBhIGJhc2ljIEhUVFAgQXV0aG9yaXphdGlvbiBoZWFkZXIgb2YgdGhlIGZvcm0geydBdXRob3JpemF0aW9uJzogJ0Jhc2ljIGJhc2U2NEVuY29kZWRVc2VybmFtZUFuZFBhc3N3b3JkJ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRCYXNpY0F1dGhIZWFkZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHsgQXV0aG9yaXphdGlvbjogc3RyaW5nIH0ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHNldHMgdXAgYWxsIGZ1dHVyZSByZXF1ZXN0cyB0byB1c2UgQmFzaWMgSFRUUCBhdXRoZW50aWNhdGlvbiB3aXRoIHRoZSBnaXZlbiB1c2VybmFtZSBhbmQgcGFzc3dvcmQuXG4gICAqIEBwYXJhbSB1c2VybmFtZSB7c3RyaW5nfSBVc2VybmFtZVxuICAgKiBAcGFyYW0gcGFzc3dvcmQge3N0cmluZ30gUGFzc3dvcmRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1c2VCYXNpY0F1dGgodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IGFsbCBoZWFkZXJzIGRlZmluZWQgZm9yIGEgZ2l2ZW4gaG9zdG5hbWUuXG4gICAqIEBwYXJhbSBob3N0IHtzdHJpbmd9IFRoZSBob3N0bmFtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm4gYWxsIGhlYWRlcnMgZGVmaW5lZCBmb3IgdGhlIGhvc3RuYW1lXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SGVhZGVycyhob3N0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBoZWFkZXIgZm9yIGFsbCBmdXR1cmUgcmVxdWVzdHMuIFRha2VzIGEgaG9zdG5hbWUsIGEgaGVhZGVyIGFuZCBhIHZhbHVlLlxuICAgKiBAcGFyYW0gaG9zdCB7c3RyaW5nfSBUaGUgaG9zdG5hbWUgdG8gYmUgdXNlZCBmb3Igc2NvcGluZyB0aGlzIGhlYWRlclxuICAgKiBAcGFyYW0gaGVhZGVyIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBoZWFkZXJcbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9IFRoZSB2YWx1ZSBvZiB0aGUgaGVhZGVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SGVhZGVyKGhvc3Q6IHN0cmluZywgaGVhZGVyOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgZGF0YSBzZXJpYWxpemVyIHdoaWNoIHdpbGwgYmUgdXNlZCBmb3IgYWxsIGZ1dHVyZSBQT1NUIGFuZCBQVVQgcmVxdWVzdHMuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGNvbmZpZ3VyZWQgZGF0YSBzZXJpYWxpemVyXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGF0YVNlcmlhbGl6ZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkYXRhIHNlcmlhbGl6ZXIgd2hpY2ggd2lsbCBiZSB1c2VkIGZvciBhbGwgZnV0dXJlIFBPU1QgYW5kIFBVVCByZXF1ZXN0cy4gVGFrZXMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSBzZXJpYWxpemVyLlxuICAgKiBAcGFyYW0gc2VyaWFsaXplciB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgc2VyaWFsaXplci4gQ2FuIGJlIHVybGVuY29kZWQsIHV0Zjggb3IganNvblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldERhdGFTZXJpYWxpemVyKHNlcmlhbGl6ZXI6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIGNvb2tpZS5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBTY29wZSBvZiB0aGUgY29va2llXG4gICAqIEBwYXJhbSBjb29raWUge3N0cmluZ30gUkZDIGNvbXBsaWFudCBjb29raWUgc3RyaW5nXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q29va2llKHVybDogc3RyaW5nLCBjb29raWU6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGNvb2tpZXMuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY2xlYXJDb29raWVzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVtb3ZlIGNvb2tpZXMgZm9yIGdpdmVuIFVSTC5cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gY2JcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVDb29raWVzKHVybDogc3RyaW5nLCBjYjogKCkgPT4gdm9pZCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzb2x2ZSBjb29raWUgc3RyaW5nIGZvciBnaXZlbiBVUkwuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDb29raWVTdHJpbmcodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZ2xvYmFsIHJlcXVlc3QgdGltZW91dCB2YWx1ZSBpbiBzZWNvbmRzLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSByZXR1cm5zIHRoZSBnbG9iYWwgcmVxdWVzdCB0aW1lb3V0IHZhbHVlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UmVxdWVzdFRpbWVvdXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGdsb2JhbCByZXF1ZXN0IHRpbWVvdXQgdmFsdWUgaW4gc2Vjb25kcy5cbiAgICogQHBhcmFtIHRpbWVvdXQge251bWJlcn0gVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy4gRGVmYXVsdCA2MFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJlcXVlc3RUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0IFNTTCBDZXJ0IGhhbmRsaW5nIG1vZGUsIGJlaW5nIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlc1xuICAgKiBkZWZhdWx0OiBkZWZhdWx0IFNTTCBjZXJ0IGhhbmRsaW5nIHVzaW5nIHN5c3RlbSdzIENBIGNlcnRzXG4gICAqIGxlZ2FjeTogdXNlIGxlZ2FjeSBkZWZhdWx0IGJlaGF2aW9yICg8IDIuMC4zKSwgZXhjbHVkaW5nIHVzZXIgaW5zdGFsbGVkIENBIGNlcnRzIChvbmx5IGZvciBBbmRyb2lkKVxuICAgKiBub2NoZWNrOiBkaXNhYmxlIFNTTCBjZXJ0IGNoZWNraW5nLCB0cnVzdGluZyBhbGwgY2VydHMgKG1lYW50IHRvIGJlIHVzZWQgb25seSBmb3IgdGVzdGluZyBwdXJwb3NlcylcbiAgICogcGlubmVkOiB0cnVzdCBvbmx5IHByb3ZpZGVkIGNlcnRzXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3NpbGtpbWVuL2NvcmRvdmEtcGx1Z2luLWFkdmFuY2VkLWh0dHAjc2V0c3NsY2VydG1vZGVcbiAgICogQHBhcmFtIHsnZGVmYXVsdCcgfCAnbGVnYWN5JyB8ICdub2NoZWNrJyB8ICdwaW5uZWQnfSBtb2RlIFNTTCBDZXJ0IGhhbmRsaW5nIG1vZGVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0U1NMQ2VydE1vZGUobW9kZTogJ2RlZmF1bHQnIHwgJ2xlZ2FjeScgfCAnbm9jaGVjaycgfCAncGlubmVkJyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGZvbGxvd2luZyByZWRpcmVjdHMgYXV0b21hdGljYWxseS5cbiAgICogQHBhcmFtIGRpc2FibGUge2Jvb2xlYW59IFNldCB0byB0cnVlIHRvIGRpc2FibGUgZm9sbG93aW5nIHJlZGlyZWN0cyBhdXRvbWF0aWNhbGx5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGlzYWJsZVJlZGlyZWN0KGRpc2FibGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIFBPU1QgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVyczogYW55KTogUHJvbWlzZTxIVFRQUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIEdFVCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0KHVybDogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBQVVQgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgUEFUQ0ggcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHBhdGNoKHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSk6IFByb21pc2U8SFRUUFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBERUxFVEUgcmVxdWVzdFxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7T2JqZWN0fSBQYXJhbWV0ZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxIVFRQUmVzcG9uc2U+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRlbGV0ZSh1cmw6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgSEVBRCByZXF1ZXN0XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHtPYmplY3R9IFBhcmFtZXRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEhUVFBSZXNwb25zZT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZSBvbiBzdWNjZXNzLCBhbmQgcmVqZWN0IG9uIGZhaWx1cmVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGVhZCh1cmw6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBoZWFkZXJzOiBhbnkpOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gYm9keSB7T2JqZWN0fSBUaGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gaGVhZGVycyB7T2JqZWN0fSBUaGUgaGVhZGVycyB0byBzZXQgZm9yIHRoaXMgcmVxdWVzdFxuICAgKiBAcGFyYW0gZmlsZVBhdGgge3N0cmluZ30gVGhlIGxvY2FsIHBhdGgocykgb2YgdGhlIGZpbGUocykgdG8gdXBsb2FkXG4gICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IFRoZSBuYW1lKHMpIG9mIHRoZSBwYXJhbWV0ZXIgdG8gcGFzcyB0aGUgZmlsZShzKSBhbG9uZyBhc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgRmlsZUVudHJ5IHByb21pc2UgdGhhdCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1cGxvYWRGaWxlKHVybDogc3RyaW5nLCBib2R5OiBhbnksIGhlYWRlcnM6IGFueSwgZmlsZVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLCBuYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVGhlIHVybCB0byBzZW5kIHRoZSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSBib2R5IHtPYmplY3R9IFRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBoZWFkZXJzIHtPYmplY3R9IFRoZSBoZWFkZXJzIHRvIHNldCBmb3IgdGhpcyByZXF1ZXN0XG4gICAqIEBwYXJhbSBmaWxlUGF0aCB7c3RyaW5nfSBUaGUgcGF0aCB0byBkb3dubG9hZCB0aGUgZmlsZSB0bywgaW5jbHVkaW5nIHRoZSBmaWxlIG5hbWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBGaWxlRW50cnkgcHJvbWlzZSB0aGF0IHJlc29sdmUgb24gc3VjY2VzcywgYW5kIHJlamVjdCBvbiBmYWlsdXJlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRvd25sb2FkRmlsZSh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzOiBhbnksIGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFRoZSB1cmwgdG8gc2VuZCB0aGUgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7T2JqZWN0fSBvcHRpb25zIGZvciBpbmRpdmlkdWFsIHJlcXVlc3RcbiAgICogQHBhcmFtIG9wdGlvbnMubWV0aG9kIHtzdHJpbmd9IHJlcXVlc3QgbWV0aG9kXG4gICAqIEBwYXJhbSBvcHRpb25zLmRhdGEge09iamVjdH0gcGF5bG9hZCB0byBiZSBzZW5kIHRvIHRoZSBzZXJ2ZXIgKG9ubHkgYXBwbGljYWJsZSBvbiBwb3N0LCBwdXQgb3IgcGF0Y2ggbWV0aG9kcylcbiAgICogQHBhcmFtIG9wdGlvbnMucGFyYW1zIHtPYmplY3R9IHF1ZXJ5IHBhcmFtcyB0byBiZSBhcHBlbmRlZCB0byB0aGUgVVJMIChvbmx5IGFwcGxpY2FibGUgb24gZ2V0LCBoZWFkLCBkZWxldGUsIHVwbG9hZCBvciBkb3dubG9hZCBtZXRob2RzKVxuICAgKiBAcGFyYW0gb3B0aW9ucy5zZXJpYWxpemVyIHtzdHJpbmd9IGRhdGEgc2VyaWFsaXplciB0byBiZSB1c2VkIChvbmx5IGFwcGxpY2FibGUgb24gcG9zdCwgcHV0IG9yIHBhdGNoIG1ldGhvZHMpLCBkZWZhdWx0cyB0byBnbG9iYWwgc2VyaWFsaXplciB2YWx1ZSwgc2VlIHNldERhdGFTZXJpYWxpemVyIGZvciBzdXBwb3J0ZWQgdmFsdWVzXG4gICAqIEBwYXJhbSBvcHRpb25zLnRpbWVvdXQge251bWJlcn0gdGltZW91dCB2YWx1ZSBmb3IgdGhlIHJlcXVlc3QgaW4gc2Vjb25kcywgZGVmYXVsdHMgdG8gZ2xvYmFsIHRpbWVvdXQgdmFsdWVcbiAgICogQHBhcmFtIG9wdGlvbnMuaGVhZGVycyB7T2JqZWN0fSBoZWFkZXJzIG9iamVjdCAoa2V5IHZhbHVlIHBhaXIpLCB3aWxsIGJlIG1lcmdlZCB3aXRoIGdsb2JhbCB2YWx1ZXNcbiAgICogQHBhcmFtIG9wdGlvbnMuZmlsZVBhdGgge3N0cmluZ30gZmlsZSBwYXRoKHMpIHRvIGJlIHVzZWQgZHVyaW5nIHVwbG9hZCBhbmQgZG93bmxvYWQgc2VlIHVwbG9hZEZpbGUgYW5kIGRvd25sb2FkRmlsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMubmFtZSB7c3RyaW5nfSBuYW1lKHMpIHRvIGJlIHVzZWQgZHVyaW5nIHVwbG9hZCBzZWUgdXBsb2FkRmlsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMucmVzcG9uc2VUeXBlIHtzdHJpbmd9IHJlc3BvbnNlIHR5cGUsIGRlZmF1bHRzIHRvIHRleHRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8SFRUUFJlc3BvbnNlPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlIG9uIHN1Y2Nlc3MsIGFuZCByZWplY3Qgb24gZmFpbHVyZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kUmVxdWVzdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBtZXRob2Q6ICdnZXQnIHwgJ3Bvc3QnIHwgJ3B1dCcgfCAncGF0Y2gnIHwgJ2hlYWQnIHwgJ2RlbGV0ZScgfCAndXBsb2FkJyB8ICdkb3dubG9hZCc7XG4gICAgICBkYXRhPzogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9O1xuICAgICAgcGFyYW1zPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9O1xuICAgICAgc2VyaWFsaXplcj86ICdqc29uJyB8ICd1cmxlbmNvZGVkJyB8ICd1dGY4JztcbiAgICAgIHRpbWVvdXQ/OiBudW1iZXI7XG4gICAgICBoZWFkZXJzPzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9O1xuICAgICAgZmlsZVBhdGg/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIG5hbWU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICd0ZXh0JyB8ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbic7XG4gICAgfVxuICApOiBQcm9taXNlPEhUVFBSZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>tab1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Câmera</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button routerLink=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"ion-padding\">\n\n  <!--p>Vamos bater uma foto:</p-->\n  <img *ngIf=\"imagem\" [src]=\"imagem\">\n  <ion-button (click)=\"baterFoto()\">Tirar foto</ion-button>\n  <ion-button (click)=\"predictImg()\">Nível Glicêmico</ion-button>\n  <!--p>Teste: <span id=\"teste\"></span></p-->\n  <h3>{{ message }}</h3>\n  </div>\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Galeria</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  routerLink=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n  \n    <!--p>Vamos bater uma foto:</p-->\n    <img *ngIf=\"imageSrc\" [src]=\"imageSrc\">\n    <ion-button (click)=\"abrirGaleria()\">Galeria</ion-button>\n    <ion-button>Nível Glicêmico</ion-button>\n  \n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n  <img src=\"assets/icon/Iglycemic_v1.png\">\n  <ion-card-header>\n    <ion-card-subtitle>Aplicativo</ion-card-subtitle>\n    <ion-card-title>Iglycemic</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    Aplicativo para predição de nível glicêmico de alimentos para o monitoramento dietético para pacientes diabéticos.\n  </ion-card-content>\n</ion-card>\n\n\n<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\" color=\"primary\">\n      <ion-tab-button routerLink=\"/tabs\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Inicio</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button (click)=\"pushPage2()\">\n        <ion-icon name=\"camera\"></ion-icon>\n        <!--img [src]=\"imagem\"-->\n        <ion-label>Foto</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button (click)=\"pushPage3()\">\n        <ion-icon name=\"images\"></ion-icon>\n        <ion-label>Galeria</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  \n  </ion-tabs>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
    }
];
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() { }
    ngOnInit() {
    }
};
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab1Page);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");








//import { HttpClient } from 'selenium-webdriver/http';
//import { Camera } from '@ionic-native/camera'
const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
    }
];
let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]],
        providers: [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let Tab2Page = class Tab2Page {
    constructor(camera, sn, http, loadingCrtl, toast) {
        this.camera = camera;
        this.sn = sn;
        this.http = http;
        this.loadingCrtl = loadingCrtl;
        this.toast = toast;
        this.teste = null;
        this.img_api = null;
        this.API_URL = 'https://deploy-tcc.herokuapp.com/predict';
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    ngOnInit() {
        this.baterFoto();
        //console.log("TTTOO")
    }
    baterFoto() {
        this.camera.getPicture(this.options).then((imageData) => {
            console.log(imageData);
            this.imagem = 'data:image/jpeg;base64,' + imageData;
            this.img_api = imageData;
        }, (err) => {
            alert('Ops!\nHouve um erro');
            console.log(err);
        });
    }
    predictImg() {
        let data_img = {
            "image": this.img_api,
        };
        alert("TE");
        alert(this.img_api);
        this.http.post(this.API_URL, data_img, {}).then(data => {
            //resolve(data.data.json());
            alert('Entrou');
            this.message = data.data;
            alert(this.message);
        }).catch((error) => {
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], Tab2Page);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







/*
import {File} from '@ionic-native/file';
import {Transfer} from '@ionic-native/transfer';
import {FilePath} from '@ionic-native/file-path/ngx';
import { Camera } from '@ionic-native/camera/ngx';*/
const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
    }
];
let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]],
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");


//import { File } from '@ionic-native/file';
//import { Transfer} from '@ionic-native/transfer';
//import { FilePath } from '@ionic-native/file-path/ngx';

//import { WebView } from '@ionic-native/ionic-webview/ngx';

let Tab3Page = class Tab3Page {
    constructor(camera, sn) {
        this.camera = camera;
        this.sn = sn;
        this.imageSrc = null;
        this.options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
    }
    ngOnInit() {
        this.abrirGaleria();
    }
    abrirGaleria() {
        this.camera.getPicture(this.options).then((imageData) => {
            this.imageSrc = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            alert('Ops!\nHouve um erro');
            console.log(err);
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], Tab3Page);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _tab1_tab1_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts");
/* harmony import */ var _tab2_tab2_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts");
/* harmony import */ var _tab3_tab3_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");












const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]
    }
];
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _tab1_tab1_module__WEBPACK_IMPORTED_MODULE_8__["Tab1PageModule"],
            _tab2_tab2_module__WEBPACK_IMPORTED_MODULE_9__["Tab2PageModule"],
            _tab3_tab3_module__WEBPACK_IMPORTED_MODULE_10__["Tab3PageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");






let TabsPage = class TabsPage {
    constructor(camera, sn, nav, http) {
        this.camera = camera;
        this.sn = sn;
        this.nav = nav;
        this.http = http;
        this.imagem = null;
        this.API_URL = 'https://deploy-tcc.herokuapp.com/';
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        };
    }
    ngOnInit() {
        console.log("TTTOO");
        //alert('ENTROU');
        this.http.get(this.API_URL, {}, {}).then(data => {
            console.log(data.status);
            console.log(data.data);
            this.message = data.data;
            //alert(this.message);
        }).catch(error => {
            console.log(error.status);
            //alert(this.message);
        });
    }
    pushPage2() {
        this.nav.navigateForward("/tabs/tab2");
    }
    pushPage3() {
        this.nav.navigateForward("/tabs/tab3");
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] }
];
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]])
], TabsPage);



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _tab1_tab1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab1/tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _tab2_tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tab2/tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tab3/tab3.page */ "./src/app/tab3/tab3.page.ts");







const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"]
    },
    {
        path: 'tab1',
        component: _tab1_tab1_page__WEBPACK_IMPORTED_MODULE_4__["Tab1Page"]
    },
    {
        path: 'tab2',
        component: _tab2_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]
    },
    {
        path: 'tab3',
        component: _tab3_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map