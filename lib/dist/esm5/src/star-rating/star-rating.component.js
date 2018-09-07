/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { StarRatingComponent };
if (false) {
    /** @type {?} */
    StarRatingComponent.prototype.rating;
    /** @type {?} */
    StarRatingComponent.prototype.isEditable;
    /** @type {?} */
    StarRatingComponent.prototype.dataSet;
    /** @type {?} */
    StarRatingComponent.prototype.colors;
    /** @type {?} */
    StarRatingComponent.prototype.labels;
    /** @type {?} */
    StarRatingComponent.prototype.activeColor;
    /** @type {?} */
    StarRatingComponent.prototype.normalColor;
    /** @type {?} */
    StarRatingComponent.prototype.startColors;
    /** @type {?} */
    StarRatingComponent.prototype.per;
    /** @type {?} */
    StarRatingComponent.prototype.showLabels;
    /** @type {?} */
    StarRatingComponent.prototype.showNumber;
    /** @type {?} */
    StarRatingComponent.prototype.labelBackground;
    /** @type {?} */
    StarRatingComponent.prototype.labelColor;
    /** @type {?} */
    StarRatingComponent.prototype.starSize;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1yYXRpbmctc3Rhci8iLCJzb3VyY2VzIjpbInNyYy9zdGFyLXJhdGluZy9zdGFyLXJhdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7SUF5QmxGOzBCQWYrQixLQUFLO3VCQUNaLEVBQUU7c0JBRVYsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO3NCQUN2RCxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7MkJBQ3pDLFNBQVM7MkJBQ1QsaUJBQWlCOzJCQUNqQixFQUFFO21CQUNWLE1BQU07MEJBQ1UsSUFBSTswQkFDSixJQUFJOytCQUNSLElBQUksQ0FBQyxXQUFXOzBCQUNyQixNQUFNO3dCQUNSLElBQUk7S0FFTDs7OztJQUNqQixzQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNsRyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNsRyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1B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eyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhcHAtc3Rhci1yYXRpbmcnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3Rhci1yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdGFyLXJhdGluZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgpIHJhdGluZzogbnVtYmVyO1xuXHRASW5wdXQoKSBpc0VkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIGRhdGFTZXQ6IGFueSA9IHt9O1xuXG5cdHB1YmxpYyBjb2xvcnMgPSBbXCIjZmYwMTA5XCIsIFwiI2ZmN2YyYlwiLCBcIiNmN2JhNDRcIiwgXCIjOUFDRDMyXCIsIFwiIzViYTgyYVwiXTtcblx0cHVibGljIGxhYmVscyA9IFtcIkJhZFwiLCBcIk5vdCBHb29kXCIsIFwiQXZlcmFnZVwiLCBcIkdvb2RcIiwgXCJCZXN0XCJdO1xuXHRwdWJsaWMgYWN0aXZlQ29sb3IgPSBcIiM4MDgwODBcIjtcblx0cHVibGljIG5vcm1hbENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuMylcIjtcblx0cHVibGljIHN0YXJ0Q29sb3JzID0gW107XG5cdHB1YmxpYyBwZXIgPSBcIjEwMCVcIjtcblx0cHVibGljIHNob3dMYWJlbHM6IGJvb2xlYW4gPSB0cnVlO1xuXHRwdWJsaWMgc2hvd051bWJlcjogYm9vbGVhbiA9IHRydWU7XG5cdHB1YmxpYyBsYWJlbEJhY2tncm91bmQgPSB0aGlzLmFjdGl2ZUNvbG9yO1xuXHRwdWJsaWMgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuXHRwdWJsaWMgc3RhclNpemUgPSBcIjIwXCI7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zaG93TGFiZWxzID0gdHlwZW9mICh0aGlzLmRhdGFTZXQuc2hvd0xhYmVscykgPT09IFwiYm9vbGVhblwiID8gdGhpcy5kYXRhU2V0LnNob3dMYWJlbHMgOiB0cnVlO1xuXHRcdHRoaXMuc2hvd051bWJlciA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LnNob3dOdW1iZXIpID09PSBcImJvb2xlYW5cIiA/IHRoaXMuZGF0YVNldC5zaG93TnVtYmVyIDogdHJ1ZTtcblx0XHR0aGlzLmNvbG9ycyA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LmNvbG9ycykgPT09IFwib2JqZWN0XCIgJiYgdGhpcy5kYXRhU2V0LmNvbG9ycy5sZW5ndGggPT0gNSA/IHRoaXMuZGF0YVNldC5jb2xvcnMgOiB0aGlzLmNvbG9ycztcblx0XHR0aGlzLmxhYmVscyA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVscykgPT09IFwib2JqZWN0XCIgJiYgdGhpcy5kYXRhU2V0LmxhYmVscy5sZW5ndGggPT0gNSA/IHRoaXMuZGF0YVNldC5sYWJlbHMgOiB0aGlzLmxhYmVscztcblx0XHR0aGlzLm5vcm1hbENvbG9yID0gdHlwZW9mICh0aGlzLmRhdGFTZXQubm9ybWFsQ29sb3IpID09PSBcInN0cmluZ1wiID8gdGhpcy5kYXRhU2V0Lm5vcm1hbENvbG9yIDogdGhpcy5ub3JtYWxDb2xvcjtcblx0XHR0aGlzLmxhYmVsQmFja2dyb3VuZCA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZS5iYWNrZ3JvdW5kKSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZS5iYWNrZ3JvdW5kIDogdGhpcy5sYWJlbEJhY2tncm91bmQ7XG5cdFx0dGhpcy5sYWJlbENvbG9yID0gdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmNvbG9yKSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZS5jb2xvciA6IHRoaXMubGFiZWxDb2xvcjtcblx0XHR0aGlzLnN0YXJTaXplID0gdHlwZW9mICh0aGlzLmRhdGFTZXQuc3RhclNpemUpID09PSBcInN0cmluZ1wiID8gdGhpcy5kYXRhU2V0LnN0YXJTaXplIDogdGhpcy5zdGFyU2l6ZTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuZ2V0Q29sb3IoKTtcblx0XHR9LCB0cnVlKTtcblx0fVxuXG5cdGdldENvbG9yKCkge1xuXHRcdHRoaXMuY29sb3JzLmZvckVhY2goKGNvbG9yLCBpbmRleCkgPT4ge1xuXHRcdFx0aW5kZXggPSBpbmRleCArIDE7XG5cdFx0XHRpZiAoaW5kZXggPj0gdGhpcy5yYXRpbmcgKyAxKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRDb2xvcnMucHVzaCh7XG5cdFx0XHRcdFx0J2FjdGl2ZUNvbG9yJzogU3RyaW5nKDApICsgXCIlXCIsXG5cdFx0XHRcdFx0J2dyYXlDb2xvcic6IFN0cmluZygwKSArIFwiJVwiLFxuXHRcdFx0XHRcdCdpZCc6IERhdGUubm93KCkgKyBcInN0YXJ0XCIgKyBpbmRleCxcblx0XHRcdFx0XHRcInVybFwiOiBcInVybCgjXCIgKyBEYXRlLm5vdygpICsgXCJzdGFydFwiICsgaW5kZXggKyBcIilcIlxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIGlmIChpbmRleCA8IHRoaXMucmF0aW5nKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnRDb2xvcnMucHVzaCh7XG5cdFx0XHRcdFx0J2FjdGl2ZUNvbG9yJzogU3RyaW5nKDEwMCkgKyBcIiVcIixcblx0XHRcdFx0XHQnZ3JheUNvbG9yJzogU3RyaW5nKDEwMCkgKyBcIiVcIixcblx0XHRcdFx0XHQnaWQnOiBEYXRlLm5vdygpICsgXCJzdGFydFwiICsgaW5kZXgsXG5cdFx0XHRcdFx0XCJ1cmxcIjogXCJ1cmwoI1wiICsgRGF0ZS5ub3coKSArIFwic3RhcnRcIiArIGluZGV4ICsgXCIpXCJcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlQ29sb3IgPSBjb2xvcjtcblx0XHRcdFx0dGhpcy5sYWJlbEJhY2tncm91bmQgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuYmFja2dyb3VuZCkgPT09IFwic3RyaW5nXCIgPyB0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuYmFja2dyb3VuZCA6IGNvbG9yO1xuXHRcdFx0XHR0aGlzLmxhYmVsQ29sb3IgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuY29sb3IpID09PSBcInN0cmluZ1wiID8gdGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmNvbG9yIDogJyNmZmYnO1xuXG5cdFx0XHRcdHRoaXMuc3RhcnRDb2xvcnMucHVzaCh7XG5cdFx0XHRcdFx0J2FjdGl2ZUNvbG9yJzogU3RyaW5nKDEwMCAtIChpbmRleCAtIHRoaXMucmF0aW5nKSAqIDEwMCkgKyBcIiVcIixcblx0XHRcdFx0XHQnZ3JheUNvbG9yJzogU3RyaW5nKDEwMCAtIChpbmRleCAtIHRoaXMucmF0aW5nKSAqIDEwMCkgKyBcIiVcIixcblx0XHRcdFx0XHQnaWQnOiBEYXRlLm5vdygpICsgXCJzdGFydFwiICsgaW5kZXgsXG5cdFx0XHRcdFx0XCJ1cmxcIjogXCJ1cmwoI1wiICsgRGF0ZS5ub3coKSArIFwic3RhcnRcIiArIGluZGV4ICsgXCIpXCJcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0bW91c2VFbnRlcihldmVudCwgaW5kZXgpIHtcblx0XHRpZiAodGhpcy5pc0VkaXRhYmxlKSB7XG5cdFx0XHR0aGlzLnJhdGluZyA9IGluZGV4ICsgMTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Q29sb3JzID0gW107XG5cdFx0XHRcdHRoaXMuZ2V0Q29sb3IoKTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cblxuXHRvblNlbGVjdFJhdGluZyhpbmRleCkge1xuXHRcdGlmICh0aGlzLmlzRWRpdGFibGUpIHtcblx0XHRcdHRoaXMucmF0aW5nID0gaW5kZXggKyAxO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RhcnRDb2xvcnMgPSBbXTtcblx0XHRcdFx0dGhpcy5nZXRDb2xvcigpO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=