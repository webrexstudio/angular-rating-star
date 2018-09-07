(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-rating-star', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['angular-rating-star'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var StarRatingComponent = (function () {
        function StarRatingComponent() {
            this.isEditable = false;
            this.dataSet = {};
            this.colors = ["#ff0109", "#ff7f2b", "#f7ba44", "#9ACD32", "#5ba82a"];
            this.labels = ["Bad", "Not Good", "Average", "Good", "Best"];
            this.activeColor = "#808080";
            this.normalColor = "rgba(0,0,0,0.3)";
            this.startColors = [];
            this.per = "100%";
            this.showLabels = true;
            this.showNumber = true;
            this.labelBackground = this.activeColor;
            this.labelColor = "#fff";
            this.starSize = "20";
        }
        /**
         * @return {?}
         */
        StarRatingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.showLabels = typeof (this.dataSet.showLabels) === "boolean" ? this.dataSet.showLabels : true;
                this.showNumber = typeof (this.dataSet.showNumber) === "boolean" ? this.dataSet.showNumber : true;
                this.colors = typeof (this.dataSet.colors) === "object" && this.dataSet.colors.length == 5 ? this.dataSet.colors : this.colors;
                this.labels = typeof (this.dataSet.labels) === "object" && this.dataSet.labels.length == 5 ? this.dataSet.labels : this.labels;
                this.normalColor = typeof (this.dataSet.normalColor) === "string" ? this.dataSet.normalColor : this.normalColor;
                this.labelBackground = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.background) === "string" ? this.dataSet.labelsStyle.background : this.labelBackground;
                this.labelColor = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.color) === "string" ? this.dataSet.labelsStyle.color : this.labelColor;
                this.starSize = typeof (this.dataSet.starSize) === "string" ? this.dataSet.starSize : this.starSize;
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        StarRatingComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                setTimeout(function () {
                    _this.getColor();
                }, true);
            };
        /**
         * @return {?}
         */
        StarRatingComponent.prototype.getColor = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.colors.forEach(function (color, index) {
                    index = index + 1;
                    if (index >= _this.rating + 1) {
                        _this.startColors.push({
                            'activeColor': String(0) + "%",
                            'grayColor': String(0) + "%",
                            'id': Date.now() + "start" + index,
                            "url": "url(#" + Date.now() + "start" + index + ")"
                        });
                    }
                    else if (index < _this.rating) {
                        _this.startColors.push({
                            'activeColor': String(100) + "%",
                            'grayColor': String(100) + "%",
                            'id': Date.now() + "start" + index,
                            "url": "url(#" + Date.now() + "start" + index + ")"
                        });
                    }
                    else {
                        _this.activeColor = color;
                        _this.labelBackground = typeof (_this.dataSet.labelsStyle) === "object" && typeof (_this.dataSet.labelsStyle.background) === "string" ? _this.dataSet.labelsStyle.background : color;
                        _this.labelColor = typeof (_this.dataSet.labelsStyle) === "object" && typeof (_this.dataSet.labelsStyle.color) === "string" ? _this.dataSet.labelsStyle.color : '#fff';
                        _this.startColors.push({
                            'activeColor': String(100 - (index - _this.rating) * 100) + "%",
                            'grayColor': String(100 - (index - _this.rating) * 100) + "%",
                            'id': Date.now() + "start" + index,
                            "url": "url(#" + Date.now() + "start" + index + ")"
                        });
                    }
                });
            };
        /**
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        StarRatingComponent.prototype.mouseEnter = /**
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
            function (event, index) {
                var _this = this;
                if (this.isEditable) {
                    this.rating = index + 1;
                    setTimeout(function () {
                        _this.startColors = [];
                        _this.getColor();
                    }, true);
                }
            };
        /**
         * @param {?} index
         * @return {?}
         */
        StarRatingComponent.prototype.onSelectRating = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                var _this = this;
                if (this.isEditable) {
                    this.rating = index + 1;
                    setTimeout(function () {
                        _this.startColors = [];
                        _this.getColor();
                    }, true);
                }
            };
        StarRatingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-star-rating',
                        template: "<div class=\"rating\">\n  <div class=\"stars\">\n    <div class=\"star\" *ngFor=\"let startColor of startColors; let i=index\" (click)=\"onSelectRating(i)\" (mouseenter)=\"mouseEnter($event,i)\"\n      [ngClass]=\"isEditable ? 'editable' : ''\">\n\n      <svg [attr.height.px]=\"starSize\" viewBox=\"0 0 16 16\" [attr.width.px]=\"starSize\">\n        <defs>\n          <linearGradient id=\"{{startColor.id}}\">\n            <stop offset=\"0%\" [attr.stop-color]=\"activeColor\" />\n            <stop [attr.offset]=\"startColor.activeColor\" [attr.stop-color]=\"activeColor\" />\n            <stop [attr.offset]=\"startColor.grayColor\" [attr.stop-color]=\"normalColor\" />\n            <stop offset=\"100%\" [attr.stop-color]=\"normalColor\" />\n          </linearGradient>\n        </defs>\n        <g fill=\"none\" fill-rule=\"evenodd\" id=\"Icons with numbers\" stroke=\"none\" stroke-width=\"1\">\n          <g [attr.fill]=\"startColor.url\" id=\"Group\" transform=\"translate(-384.000000, -480.000000)\">\n            <path d=\"M392,491.953125 L387.022583,495.99353 L389.032704,489.524391 L384.015259,486.030029 L390.052612,486.030029 L392,480 L393.984253,486.030029 L400.065063,486.030029 L394.967296,489.524392 L397.036133,495.99353 L392,491.953125 Z M392,491.953125\"\n              id=\"Star 240 copy\" />\n          </g>\n        </g>\n      </svg>\n    </div>\n  </div>\n  <div *ngIf=\"showLabels || showNumber\" class=\"number base-tooltip\" [style.background-color]=\"labelBackground\"\n    [style.color]=\"labelColor\">\n    <div *ngIf=\"showNumber\">{{rating}}</div>\n    <div *ngIf=\"showLabels\" [ngClass]=\"{'rightSpace': showNumber}\" class=\"t-content\">{{rating > 4 ? labels[4] : rating\n      > 3 ? labels[3] : rating > 2 ? labels[2] : rating > 1 ? labels[1] : labels[0]}}</div>\n  </div>\n</div>\n",
                        styles: [".rating,.rating .stars{display:flex;align-items:center}.rating .stars .editable{cursor:pointer}.rating .number{font-weight:700;background:#3291ff;color:#fff;border-radius:3px;align-items:center;justify-content:center;display:flex;padding:2px 5px 3px;margin-left:10px;text-transform:capitalize}.rating .number .t-content.rightSpace{margin-left:5px}"]
                    }] }
        ];
        /** @nocollapse */
        StarRatingComponent.ctorParameters = function () { return []; };
        StarRatingComponent.propDecorators = {
            rating: [{ type: i0.Input }],
            isEditable: [{ type: i0.Input }],
            dataSet: [{ type: i0.Input }]
        };
        return StarRatingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var StarRatingModule = (function () {
        function StarRatingModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        StarRatingModule.forRoot = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: StarRatingComponent,
                    providers: [
                        { provide: 'config', useValue: config }
                    ]
                };
            };
        StarRatingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [StarRatingComponent],
                        exports: [StarRatingComponent]
                    },] }
        ];
        return StarRatingModule;
    }());
    StarRatingModule.forRoot({ apiKey: 'shhhhh' });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var StarRatingService = (function () {
        function StarRatingService(config) {
            this.config = config;
        }
        StarRatingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        StarRatingService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['config',] }] }
            ];
        };
        /** @nocollapse */ StarRatingService.ngInjectableDef = i0.defineInjectable({ factory: function StarRatingService_Factory() { return new StarRatingService(i0.inject("config")); }, token: StarRatingService, providedIn: "root" });
        return StarRatingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.StarRatingComponent = StarRatingComponent;
    exports.StarRatingModule = StarRatingModule;
    exports.StarRatingService = StarRatingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXRpbmctc3Rhci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItcmF0aW5nLXN0YXIvc3JjL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1yYXRpbmctc3Rhci9zcmMvc3Rhci1yYXRpbmcubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLXJhdGluZy1zdGFyL3NyYy9zdGFyLXJhdGluZy5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FwcC1zdGFyLXJhdGluZycsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdGFyLXJhdGluZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N0YXItcmF0aW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhclJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KCkgcmF0aW5nOiBudW1iZXI7XG5cdEBJbnB1dCgpIGlzRWRpdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgZGF0YVNldDogYW55ID0ge307XG5cblx0cHVibGljIGNvbG9ycyA9IFtcIiNmZjAxMDlcIiwgXCIjZmY3ZjJiXCIsIFwiI2Y3YmE0NFwiLCBcIiM5QUNEMzJcIiwgXCIjNWJhODJhXCJdO1xuXHRwdWJsaWMgbGFiZWxzID0gW1wiQmFkXCIsIFwiTm90IEdvb2RcIiwgXCJBdmVyYWdlXCIsIFwiR29vZFwiLCBcIkJlc3RcIl07XG5cdHB1YmxpYyBhY3RpdmVDb2xvciA9IFwiIzgwODA4MFwiO1xuXHRwdWJsaWMgbm9ybWFsQ29sb3IgPSBcInJnYmEoMCwwLDAsMC4zKVwiO1xuXHRwdWJsaWMgc3RhcnRDb2xvcnMgPSBbXTtcblx0cHVibGljIHBlciA9IFwiMTAwJVwiO1xuXHRwdWJsaWMgc2hvd0xhYmVsczogYm9vbGVhbiA9IHRydWU7XG5cdHB1YmxpYyBzaG93TnVtYmVyOiBib29sZWFuID0gdHJ1ZTtcblx0cHVibGljIGxhYmVsQmFja2dyb3VuZCA9IHRoaXMuYWN0aXZlQ29sb3I7XG5cdHB1YmxpYyBsYWJlbENvbG9yID0gXCIjZmZmXCI7XG5cdHB1YmxpYyBzdGFyU2l6ZSA9IFwiMjBcIjtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNob3dMYWJlbHMgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5zaG93TGFiZWxzKSA9PT0gXCJib29sZWFuXCIgPyB0aGlzLmRhdGFTZXQuc2hvd0xhYmVscyA6IHRydWU7XG5cdFx0dGhpcy5zaG93TnVtYmVyID0gdHlwZW9mICh0aGlzLmRhdGFTZXQuc2hvd051bWJlcikgPT09IFwiYm9vbGVhblwiID8gdGhpcy5kYXRhU2V0LnNob3dOdW1iZXIgOiB0cnVlO1xuXHRcdHRoaXMuY29sb3JzID0gdHlwZW9mICh0aGlzLmRhdGFTZXQuY29sb3JzKSA9PT0gXCJvYmplY3RcIiAmJiB0aGlzLmRhdGFTZXQuY29sb3JzLmxlbmd0aCA9PSA1ID8gdGhpcy5kYXRhU2V0LmNvbG9ycyA6IHRoaXMuY29sb3JzO1xuXHRcdHRoaXMubGFiZWxzID0gdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzKSA9PT0gXCJvYmplY3RcIiAmJiB0aGlzLmRhdGFTZXQubGFiZWxzLmxlbmd0aCA9PSA1ID8gdGhpcy5kYXRhU2V0LmxhYmVscyA6IHRoaXMubGFiZWxzO1xuXHRcdHRoaXMubm9ybWFsQ29sb3IgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5ub3JtYWxDb2xvcikgPT09IFwic3RyaW5nXCIgPyB0aGlzLmRhdGFTZXQubm9ybWFsQ29sb3IgOiB0aGlzLm5vcm1hbENvbG9yO1xuXHRcdHRoaXMubGFiZWxCYWNrZ3JvdW5kID0gdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmJhY2tncm91bmQpID09PSBcInN0cmluZ1wiID8gdGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmJhY2tncm91bmQgOiB0aGlzLmxhYmVsQmFja2dyb3VuZDtcblx0XHR0aGlzLmxhYmVsQ29sb3IgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuY29sb3IpID09PSBcInN0cmluZ1wiID8gdGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmNvbG9yIDogdGhpcy5sYWJlbENvbG9yO1xuXHRcdHRoaXMuc3RhclNpemUgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5zdGFyU2l6ZSkgPT09IFwic3RyaW5nXCIgPyB0aGlzLmRhdGFTZXQuc3RhclNpemUgOiB0aGlzLnN0YXJTaXplO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5nZXRDb2xvcigpO1xuXHRcdH0sIHRydWUpO1xuXHR9XG5cblx0Z2V0Q29sb3IoKSB7XG5cdFx0dGhpcy5jb2xvcnMuZm9yRWFjaCgoY29sb3IsIGluZGV4KSA9PiB7XG5cdFx0XHRpbmRleCA9IGluZGV4ICsgMTtcblx0XHRcdGlmIChpbmRleCA+PSB0aGlzLnJhdGluZyArIDEpIHtcblx0XHRcdFx0dGhpcy5zdGFydENvbG9ycy5wdXNoKHtcblx0XHRcdFx0XHQnYWN0aXZlQ29sb3InOiBTdHJpbmcoMCkgKyBcIiVcIixcblx0XHRcdFx0XHQnZ3JheUNvbG9yJzogU3RyaW5nKDApICsgXCIlXCIsXG5cdFx0XHRcdFx0J2lkJzogRGF0ZS5ub3coKSArIFwic3RhcnRcIiArIGluZGV4LFxuXHRcdFx0XHRcdFwidXJsXCI6IFwidXJsKCNcIiArIERhdGUubm93KCkgKyBcInN0YXJ0XCIgKyBpbmRleCArIFwiKVwiXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYgKGluZGV4IDwgdGhpcy5yYXRpbmcpIHtcblx0XHRcdFx0dGhpcy5zdGFydENvbG9ycy5wdXNoKHtcblx0XHRcdFx0XHQnYWN0aXZlQ29sb3InOiBTdHJpbmcoMTAwKSArIFwiJVwiLFxuXHRcdFx0XHRcdCdncmF5Q29sb3InOiBTdHJpbmcoMTAwKSArIFwiJVwiLFxuXHRcdFx0XHRcdCdpZCc6IERhdGUubm93KCkgKyBcInN0YXJ0XCIgKyBpbmRleCxcblx0XHRcdFx0XHRcInVybFwiOiBcInVybCgjXCIgKyBEYXRlLm5vdygpICsgXCJzdGFydFwiICsgaW5kZXggKyBcIilcIlxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hY3RpdmVDb2xvciA9IGNvbG9yO1xuXHRcdFx0XHR0aGlzLmxhYmVsQmFja2dyb3VuZCA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZS5iYWNrZ3JvdW5kKSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZS5iYWNrZ3JvdW5kIDogY29sb3I7XG5cdFx0XHRcdHRoaXMubGFiZWxDb2xvciA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZS5jb2xvcikgPT09IFwic3RyaW5nXCIgPyB0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuY29sb3IgOiAnI2ZmZic7XG5cblx0XHRcdFx0dGhpcy5zdGFydENvbG9ycy5wdXNoKHtcblx0XHRcdFx0XHQnYWN0aXZlQ29sb3InOiBTdHJpbmcoMTAwIC0gKGluZGV4IC0gdGhpcy5yYXRpbmcpICogMTAwKSArIFwiJVwiLFxuXHRcdFx0XHRcdCdncmF5Q29sb3InOiBTdHJpbmcoMTAwIC0gKGluZGV4IC0gdGhpcy5yYXRpbmcpICogMTAwKSArIFwiJVwiLFxuXHRcdFx0XHRcdCdpZCc6IERhdGUubm93KCkgKyBcInN0YXJ0XCIgKyBpbmRleCxcblx0XHRcdFx0XHRcInVybFwiOiBcInVybCgjXCIgKyBEYXRlLm5vdygpICsgXCJzdGFydFwiICsgaW5kZXggKyBcIilcIlxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRtb3VzZUVudGVyKGV2ZW50LCBpbmRleCkge1xuXHRcdGlmICh0aGlzLmlzRWRpdGFibGUpIHtcblx0XHRcdHRoaXMucmF0aW5nID0gaW5kZXggKyAxO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RhcnRDb2xvcnMgPSBbXTtcblx0XHRcdFx0dGhpcy5nZXRDb2xvcigpO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblxuXG5cdG9uU2VsZWN0UmF0aW5nKGluZGV4KSB7XG5cdFx0aWYgKHRoaXMuaXNFZGl0YWJsZSkge1xuXHRcdFx0dGhpcy5yYXRpbmcgPSBpbmRleCArIDE7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5zdGFydENvbG9ycyA9IFtdO1xuXHRcdFx0XHR0aGlzLmdldENvbG9yKCk7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3RhclJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdGFyUmF0aW5nQ29tcG9uZW50XSxcbiAgZXhwb3J0czpbU3RhclJhdGluZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3RhclJhdGluZ01vZHVsZSB7IFxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdGFyUmF0aW5nQ29tcG9uZW50LFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuU3RhclJhdGluZ01vZHVsZS5mb3JSb290KHsgYXBpS2V5OiAnc2hoaGhoJyB9KVxuXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RhclJhdGluZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnICkgeyB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkluamVjdGFibGUiLCJJbmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQXlCQzs4QkFmK0IsS0FBSzsyQkFDWixFQUFFOzBCQUVWLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzswQkFDdkQsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDOytCQUN6QyxTQUFTOytCQUNULGlCQUFpQjsrQkFDakIsRUFBRTt1QkFDVixNQUFNOzhCQUNVLElBQUk7OEJBQ0osSUFBSTttQ0FDUixJQUFJLENBQUMsV0FBVzs4QkFDckIsTUFBTTs0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