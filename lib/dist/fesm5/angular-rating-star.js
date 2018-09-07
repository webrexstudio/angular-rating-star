import { Component, Input, NgModule, Injectable, Inject, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StarRatingComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'app-star-rating',
                    template: "<div class=\"rating\">\n  <div class=\"stars\">\n    <div class=\"star\" *ngFor=\"let startColor of startColors; let i=index\" (click)=\"onSelectRating(i)\" (mouseenter)=\"mouseEnter($event,i)\"\n      [ngClass]=\"isEditable ? 'editable' : ''\">\n\n      <svg [attr.height.px]=\"starSize\" viewBox=\"0 0 16 16\" [attr.width.px]=\"starSize\">\n        <defs>\n          <linearGradient id=\"{{startColor.id}}\">\n            <stop offset=\"0%\" [attr.stop-color]=\"activeColor\" />\n            <stop [attr.offset]=\"startColor.activeColor\" [attr.stop-color]=\"activeColor\" />\n            <stop [attr.offset]=\"startColor.grayColor\" [attr.stop-color]=\"normalColor\" />\n            <stop offset=\"100%\" [attr.stop-color]=\"normalColor\" />\n          </linearGradient>\n        </defs>\n        <g fill=\"none\" fill-rule=\"evenodd\" id=\"Icons with numbers\" stroke=\"none\" stroke-width=\"1\">\n          <g [attr.fill]=\"startColor.url\" id=\"Group\" transform=\"translate(-384.000000, -480.000000)\">\n            <path d=\"M392,491.953125 L387.022583,495.99353 L389.032704,489.524391 L384.015259,486.030029 L390.052612,486.030029 L392,480 L393.984253,486.030029 L400.065063,486.030029 L394.967296,489.524392 L397.036133,495.99353 L392,491.953125 Z M392,491.953125\"\n              id=\"Star 240 copy\" />\n          </g>\n        </g>\n      </svg>\n    </div>\n  </div>\n  <div *ngIf=\"showLabels || showNumber\" class=\"number base-tooltip\" [style.background-color]=\"labelBackground\"\n    [style.color]=\"labelColor\">\n    <div *ngIf=\"showNumber\">{{rating}}</div>\n    <div *ngIf=\"showLabels\" [ngClass]=\"{'rightSpace': showNumber}\" class=\"t-content\">{{rating > 4 ? labels[4] : rating\n      > 3 ? labels[3] : rating > 2 ? labels[2] : rating > 1 ? labels[1] : labels[0]}}</div>\n  </div>\n</div>\n",
                    styles: [".rating,.rating .stars{display:flex;align-items:center}.rating .stars .editable{cursor:pointer}.rating .number{font-weight:700;background:#3291ff;color:#fff;border-radius:3px;align-items:center;justify-content:center;display:flex;padding:2px 5px 3px;margin-left:10px;text-transform:capitalize}.rating .number .t-content.rightSpace{margin-left:5px}"]
                }] }
    ];
    /** @nocollapse */
    StarRatingComponent.ctorParameters = function () { return []; };
    StarRatingComponent.propDecorators = {
        rating: [{ type: Input }],
        isEditable: [{ type: Input }],
        dataSet: [{ type: Input }]
    };
    return StarRatingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StarRatingModule = /** @class */ (function () {
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
var StarRatingService = /** @class */ (function () {
    function StarRatingService(config) {
        this.config = config;
    }
    StarRatingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StarRatingService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ StarRatingService.ngInjectableDef = defineInjectable({ factory: function StarRatingService_Factory() { return new StarRatingService(inject("config")); }, token: StarRatingService, providedIn: "root" });
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

export { StarRatingComponent, StarRatingModule, StarRatingService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yYXRpbmctc3Rhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1yYXRpbmctc3Rhci9zcmMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXJhdGluZy1zdGFyL3NyYy9zdGFyLXJhdGluZy5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItcmF0aW5nLXN0YXIvc3JjL3N0YXItcmF0aW5nLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXBwLXN0YXItcmF0aW5nJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3Rhci1yYXRpbmcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFyUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKSByYXRpbmc6IG51bWJlcjtcblx0QElucHV0KCkgaXNFZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRASW5wdXQoKSBkYXRhU2V0OiBhbnkgPSB7fTtcblxuXHRwdWJsaWMgY29sb3JzID0gW1wiI2ZmMDEwOVwiLCBcIiNmZjdmMmJcIiwgXCIjZjdiYTQ0XCIsIFwiIzlBQ0QzMlwiLCBcIiM1YmE4MmFcIl07XG5cdHB1YmxpYyBsYWJlbHMgPSBbXCJCYWRcIiwgXCJOb3QgR29vZFwiLCBcIkF2ZXJhZ2VcIiwgXCJHb29kXCIsIFwiQmVzdFwiXTtcblx0cHVibGljIGFjdGl2ZUNvbG9yID0gXCIjODA4MDgwXCI7XG5cdHB1YmxpYyBub3JtYWxDb2xvciA9IFwicmdiYSgwLDAsMCwwLjMpXCI7XG5cdHB1YmxpYyBzdGFydENvbG9ycyA9IFtdO1xuXHRwdWJsaWMgcGVyID0gXCIxMDAlXCI7XG5cdHB1YmxpYyBzaG93TGFiZWxzOiBib29sZWFuID0gdHJ1ZTtcblx0cHVibGljIHNob3dOdW1iZXI6IGJvb2xlYW4gPSB0cnVlO1xuXHRwdWJsaWMgbGFiZWxCYWNrZ3JvdW5kID0gdGhpcy5hY3RpdmVDb2xvcjtcblx0cHVibGljIGxhYmVsQ29sb3IgPSBcIiNmZmZcIjtcblx0cHVibGljIHN0YXJTaXplID0gXCIyMFwiO1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2hvd0xhYmVscyA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LnNob3dMYWJlbHMpID09PSBcImJvb2xlYW5cIiA/IHRoaXMuZGF0YVNldC5zaG93TGFiZWxzIDogdHJ1ZTtcblx0XHR0aGlzLnNob3dOdW1iZXIgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5zaG93TnVtYmVyKSA9PT0gXCJib29sZWFuXCIgPyB0aGlzLmRhdGFTZXQuc2hvd051bWJlciA6IHRydWU7XG5cdFx0dGhpcy5jb2xvcnMgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5jb2xvcnMpID09PSBcIm9iamVjdFwiICYmIHRoaXMuZGF0YVNldC5jb2xvcnMubGVuZ3RoID09IDUgPyB0aGlzLmRhdGFTZXQuY29sb3JzIDogdGhpcy5jb2xvcnM7XG5cdFx0dGhpcy5sYWJlbHMgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHMpID09PSBcIm9iamVjdFwiICYmIHRoaXMuZGF0YVNldC5sYWJlbHMubGVuZ3RoID09IDUgPyB0aGlzLmRhdGFTZXQubGFiZWxzIDogdGhpcy5sYWJlbHM7XG5cdFx0dGhpcy5ub3JtYWxDb2xvciA9IHR5cGVvZiAodGhpcy5kYXRhU2V0Lm5vcm1hbENvbG9yKSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuZGF0YVNldC5ub3JtYWxDb2xvciA6IHRoaXMubm9ybWFsQ29sb3I7XG5cdFx0dGhpcy5sYWJlbEJhY2tncm91bmQgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuYmFja2dyb3VuZCkgPT09IFwic3RyaW5nXCIgPyB0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuYmFja2dyb3VuZCA6IHRoaXMubGFiZWxCYWNrZ3JvdW5kO1xuXHRcdHRoaXMubGFiZWxDb2xvciA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZS5jb2xvcikgPT09IFwic3RyaW5nXCIgPyB0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuY29sb3IgOiB0aGlzLmxhYmVsQ29sb3I7XG5cdFx0dGhpcy5zdGFyU2l6ZSA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LnN0YXJTaXplKSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuZGF0YVNldC5zdGFyU2l6ZSA6IHRoaXMuc3RhclNpemU7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmdldENvbG9yKCk7XG5cdFx0fSwgdHJ1ZSk7XG5cdH1cblxuXHRnZXRDb2xvcigpIHtcblx0XHR0aGlzLmNvbG9ycy5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcblx0XHRcdGluZGV4ID0gaW5kZXggKyAxO1xuXHRcdFx0aWYgKGluZGV4ID49IHRoaXMucmF0aW5nICsgMSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Q29sb3JzLnB1c2goe1xuXHRcdFx0XHRcdCdhY3RpdmVDb2xvcic6IFN0cmluZygwKSArIFwiJVwiLFxuXHRcdFx0XHRcdCdncmF5Q29sb3InOiBTdHJpbmcoMCkgKyBcIiVcIixcblx0XHRcdFx0XHQnaWQnOiBEYXRlLm5vdygpICsgXCJzdGFydFwiICsgaW5kZXgsXG5cdFx0XHRcdFx0XCJ1cmxcIjogXCJ1cmwoI1wiICsgRGF0ZS5ub3coKSArIFwic3RhcnRcIiArIGluZGV4ICsgXCIpXCJcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPCB0aGlzLnJhdGluZykge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Q29sb3JzLnB1c2goe1xuXHRcdFx0XHRcdCdhY3RpdmVDb2xvcic6IFN0cmluZygxMDApICsgXCIlXCIsXG5cdFx0XHRcdFx0J2dyYXlDb2xvcic6IFN0cmluZygxMDApICsgXCIlXCIsXG5cdFx0XHRcdFx0J2lkJzogRGF0ZS5ub3coKSArIFwic3RhcnRcIiArIGluZGV4LFxuXHRcdFx0XHRcdFwidXJsXCI6IFwidXJsKCNcIiArIERhdGUubm93KCkgKyBcInN0YXJ0XCIgKyBpbmRleCArIFwiKVwiXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUNvbG9yID0gY29sb3I7XG5cdFx0XHRcdHRoaXMubGFiZWxCYWNrZ3JvdW5kID0gdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmJhY2tncm91bmQpID09PSBcInN0cmluZ1wiID8gdGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmJhY2tncm91bmQgOiBjb2xvcjtcblx0XHRcdFx0dGhpcy5sYWJlbENvbG9yID0gdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmNvbG9yKSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZS5jb2xvciA6ICcjZmZmJztcblxuXHRcdFx0XHR0aGlzLnN0YXJ0Q29sb3JzLnB1c2goe1xuXHRcdFx0XHRcdCdhY3RpdmVDb2xvcic6IFN0cmluZygxMDAgLSAoaW5kZXggLSB0aGlzLnJhdGluZykgKiAxMDApICsgXCIlXCIsXG5cdFx0XHRcdFx0J2dyYXlDb2xvcic6IFN0cmluZygxMDAgLSAoaW5kZXggLSB0aGlzLnJhdGluZykgKiAxMDApICsgXCIlXCIsXG5cdFx0XHRcdFx0J2lkJzogRGF0ZS5ub3coKSArIFwic3RhcnRcIiArIGluZGV4LFxuXHRcdFx0XHRcdFwidXJsXCI6IFwidXJsKCNcIiArIERhdGUubm93KCkgKyBcInN0YXJ0XCIgKyBpbmRleCArIFwiKVwiXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdG1vdXNlRW50ZXIoZXZlbnQsIGluZGV4KSB7XG5cdFx0aWYgKHRoaXMuaXNFZGl0YWJsZSkge1xuXHRcdFx0dGhpcy5yYXRpbmcgPSBpbmRleCArIDE7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5zdGFydENvbG9ycyA9IFtdO1xuXHRcdFx0XHR0aGlzLmdldENvbG9yKCk7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXG5cblx0b25TZWxlY3RSYXRpbmcoaW5kZXgpIHtcblx0XHRpZiAodGhpcy5pc0VkaXRhYmxlKSB7XG5cdFx0XHR0aGlzLnJhdGluZyA9IGluZGV4ICsgMTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Q29sb3JzID0gW107XG5cdFx0XHRcdHRoaXMuZ2V0Q29sb3IoKTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdGFyUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zdGFyLXJhdGluZy9zdGFyLXJhdGluZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N0YXJSYXRpbmdDb21wb25lbnRdLFxuICBleHBvcnRzOltTdGFyUmF0aW5nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdGFyUmF0aW5nTW9kdWxlIHsgXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0YXJSYXRpbmdDb21wb25lbnQsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG5TdGFyUmF0aW5nTW9kdWxlLmZvclJvb3QoeyBhcGlLZXk6ICdzaGhoaGgnIH0pXG5cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdGFyUmF0aW5nU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWcgKSB7IH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUF5QkM7MEJBZitCLEtBQUs7dUJBQ1osRUFBRTtzQkFFVixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7c0JBQ3ZELENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQzsyQkFDekMsU0FBUzsyQkFDVCxpQkFBaUI7MkJBQ2pCLEVBQUU7bUJBQ1YsTUFBTTswQkFDVSxJQUFJOzBCQUNKLElBQUk7K0JBQ1IsSUFBSSxDQUFDLFdBQVc7MEJBQ3JCLE1BQU07d0JBQ1IsSUFBSTtLQUVMOzs7O0lBQ2pCLHNDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxJQUFJLENB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