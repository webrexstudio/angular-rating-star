/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class StarRatingComponent {
    constructor() {
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
    ngOnInit() {
        this.showLabels = typeof (this.dataSet.showLabels) === "boolean" ? this.dataSet.showLabels : true;
        this.showNumber = typeof (this.dataSet.showNumber) === "boolean" ? this.dataSet.showNumber : true;
        this.colors = typeof (this.dataSet.colors) === "object" && this.dataSet.colors.length == 5 ? this.dataSet.colors : this.colors;
        this.labels = typeof (this.dataSet.labels) === "object" && this.dataSet.labels.length == 5 ? this.dataSet.labels : this.labels;
        this.normalColor = typeof (this.dataSet.normalColor) === "string" ? this.dataSet.normalColor : this.normalColor;
        this.labelBackground = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.background) === "string" ? this.dataSet.labelsStyle.background : this.labelBackground;
        this.labelColor = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.color) === "string" ? this.dataSet.labelsStyle.color : this.labelColor;
        this.starSize = typeof (this.dataSet.starSize) === "string" ? this.dataSet.starSize : this.starSize;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        setTimeout(() => {
            this.getColor();
        }, true);
    }
    /**
     * @return {?}
     */
    getColor() {
        this.colors.forEach((color, index) => {
            index = index + 1;
            if (index >= this.rating + 1) {
                this.startColors.push({
                    'activeColor': String(0) + "%",
                    'grayColor': String(0) + "%",
                    'id': Date.now() + "start" + index,
                    "url": "url(#" + Date.now() + "start" + index + ")"
                });
            }
            else if (index < this.rating) {
                this.startColors.push({
                    'activeColor': String(100) + "%",
                    'grayColor': String(100) + "%",
                    'id': Date.now() + "start" + index,
                    "url": "url(#" + Date.now() + "start" + index + ")"
                });
            }
            else {
                this.activeColor = color;
                this.labelBackground = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.background) === "string" ? this.dataSet.labelsStyle.background : color;
                this.labelColor = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.color) === "string" ? this.dataSet.labelsStyle.color : '#fff';
                this.startColors.push({
                    'activeColor': String(100 - (index - this.rating) * 100) + "%",
                    'grayColor': String(100 - (index - this.rating) * 100) + "%",
                    'id': Date.now() + "start" + index,
                    "url": "url(#" + Date.now() + "start" + index + ")"
                });
            }
        });
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    mouseEnter(event, index) {
        if (this.isEditable) {
            this.rating = index + 1;
            setTimeout(() => {
                this.startColors = [];
                this.getColor();
            }, true);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onSelectRating(index) {
        if (this.isEditable) {
            this.rating = index + 1;
            setTimeout(() => {
                this.startColors = [];
                this.getColor();
            }, true);
        }
    }
}
StarRatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-star-rating',
                template: "<div class=\"rating\">\n  <div class=\"stars\">\n    <div class=\"star\" *ngFor=\"let startColor of startColors; let i=index\" (click)=\"onSelectRating(i)\" (mouseenter)=\"mouseEnter($event,i)\"\n      [ngClass]=\"isEditable ? 'editable' : ''\">\n\n      <svg [attr.height.px]=\"starSize\" viewBox=\"0 0 16 16\" [attr.width.px]=\"starSize\">\n        <defs>\n          <linearGradient id=\"{{startColor.id}}\">\n            <stop offset=\"0%\" [attr.stop-color]=\"activeColor\" />\n            <stop [attr.offset]=\"startColor.activeColor\" [attr.stop-color]=\"activeColor\" />\n            <stop [attr.offset]=\"startColor.grayColor\" [attr.stop-color]=\"normalColor\" />\n            <stop offset=\"100%\" [attr.stop-color]=\"normalColor\" />\n          </linearGradient>\n        </defs>\n        <g fill=\"none\" fill-rule=\"evenodd\" id=\"Icons with numbers\" stroke=\"none\" stroke-width=\"1\">\n          <g [attr.fill]=\"startColor.url\" id=\"Group\" transform=\"translate(-384.000000, -480.000000)\">\n            <path d=\"M392,491.953125 L387.022583,495.99353 L389.032704,489.524391 L384.015259,486.030029 L390.052612,486.030029 L392,480 L393.984253,486.030029 L400.065063,486.030029 L394.967296,489.524392 L397.036133,495.99353 L392,491.953125 Z M392,491.953125\"\n              id=\"Star 240 copy\" />\n          </g>\n        </g>\n      </svg>\n    </div>\n  </div>\n  <div *ngIf=\"showLabels || showNumber\" class=\"number base-tooltip\" [style.background-color]=\"labelBackground\"\n    [style.color]=\"labelColor\">\n    <div *ngIf=\"showNumber\">{{rating}}</div>\n    <div *ngIf=\"showLabels\" [ngClass]=\"{'rightSpace': showNumber}\" class=\"t-content\">{{rating > 4 ? labels[4] : rating\n      > 3 ? labels[3] : rating > 2 ? labels[2] : rating > 1 ? labels[1] : labels[0]}}</div>\n  </div>\n</div>\n",
                styles: [".rating,.rating .stars{display:flex;align-items:center}.rating .stars .editable{cursor:pointer}.rating .number{font-weight:700;background:#3291ff;color:#fff;border-radius:3px;align-items:center;justify-content:center;display:flex;padding:2px 5px 3px;margin-left:10px;text-transform:capitalize}.rating .number .t-content.rightSpace{margin-left:5px}"]
            }] }
];
/** @nocollapse */
StarRatingComponent.ctorParameters = () => [];
StarRatingComponent.propDecorators = {
    rating: [{ type: Input }],
    isEditable: [{ type: Input }],
    dataSet: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci1yYXRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1yYXRpbmctc3Rhci8iLCJzb3VyY2VzIjpbInNyYy9zdGFyLXJhdGluZy9zdGFyLXJhdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQU9uRixNQUFNO0lBa0JMOzBCQWYrQixLQUFLO3VCQUNaLEVBQUU7c0JBRVYsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO3NCQUN2RCxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7MkJBQ3pDLFNBQVM7MkJBQ1QsaUJBQWlCOzJCQUNqQixFQUFFO21CQUNWLE1BQU07MEJBQ1UsSUFBSTswQkFDSixJQUFJOytCQUNSLElBQUksQ0FBQyxXQUFXOzBCQUNyQixNQUFNO3dCQUNSLElBQUk7S0FFTDs7OztJQUNqQixRQUFRO1FBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2hILElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoTSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENB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RyxHQUFHLENBQUMsR0FBRyxHQUFHO29CQUM1RCxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sR0FBRyxLQUFLO29CQUNsQyxLQUFLLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLEdBQUc7aUJBQ25ELENBQUMsQ0FBQTthQUNGO1NBQ0QsQ0FBQyxDQUFBO0tBQ0Y7Ozs7OztJQUVELFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDeEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2hCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDVDtLQUNEOzs7OztJQUlELGNBQWMsQ0FBQyxLQUFLO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN4QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDaEIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNUO0tBQ0Q7OztZQTdGRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isd3lEQUEyQzs7YUFFM0M7Ozs7O3FCQUdDLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXBwLXN0YXItcmF0aW5nJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0YXItcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3Rhci1yYXRpbmcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFyUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKSByYXRpbmc6IG51bWJlcjtcblx0QElucHV0KCkgaXNFZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXHRASW5wdXQoKSBkYXRhU2V0OiBhbnkgPSB7fTtcblxuXHRwdWJsaWMgY29sb3JzID0gW1wiI2ZmMDEwOVwiLCBcIiNmZjdmMmJcIiwgXCIjZjdiYTQ0XCIsIFwiIzlBQ0QzMlwiLCBcIiM1YmE4MmFcIl07XG5cdHB1YmxpYyBsYWJlbHMgPSBbXCJCYWRcIiwgXCJOb3QgR29vZFwiLCBcIkF2ZXJhZ2VcIiwgXCJHb29kXCIsIFwiQmVzdFwiXTtcblx0cHVibGljIGFjdGl2ZUNvbG9yID0gXCIjODA4MDgwXCI7XG5cdHB1YmxpYyBub3JtYWxDb2xvciA9IFwicmdiYSgwLDAsMCwwLjMpXCI7XG5cdHB1YmxpYyBzdGFydENvbG9ycyA9IFtdO1xuXHRwdWJsaWMgcGVyID0gXCIxMDAlXCI7XG5cdHB1YmxpYyBzaG93TGFiZWxzOiBib29sZWFuID0gdHJ1ZTtcblx0cHVibGljIHNob3dOdW1iZXI6IGJvb2xlYW4gPSB0cnVlO1xuXHRwdWJsaWMgbGFiZWxCYWNrZ3JvdW5kID0gdGhpcy5hY3RpdmVDb2xvcjtcblx0cHVibGljIGxhYmVsQ29sb3IgPSBcIiNmZmZcIjtcblx0cHVibGljIHN0YXJTaXplID0gXCIyMFwiO1xuXG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2hvd0xhYmVscyA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LnNob3dMYWJlbHMpID09PSBcImJvb2xlYW5cIiA/IHRoaXMuZGF0YVNldC5zaG93TGFiZWxzIDogdHJ1ZTtcblx0XHR0aGlzLnNob3dOdW1iZXIgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5zaG93TnVtYmVyKSA9PT0gXCJib29sZWFuXCIgPyB0aGlzLmRhdGFTZXQuc2hvd051bWJlciA6IHRydWU7XG5cdFx0dGhpcy5jb2xvcnMgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5jb2xvcnMpID09PSBcIm9iamVjdFwiICYmIHRoaXMuZGF0YVNldC5jb2xvcnMubGVuZ3RoID09IDUgPyB0aGlzLmRhdGFTZXQuY29sb3JzIDogdGhpcy5jb2xvcnM7XG5cdFx0dGhpcy5sYWJlbHMgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHMpID09PSBcIm9iamVjdFwiICYmIHRoaXMuZGF0YVNldC5sYWJlbHMubGVuZ3RoID09IDUgPyB0aGlzLmRhdGFTZXQubGFiZWxzIDogdGhpcy5sYWJlbHM7XG5cdFx0dGhpcy5ub3JtYWxDb2xvciA9IHR5cGVvZiAodGhpcy5kYXRhU2V0Lm5vcm1hbENvbG9yKSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuZGF0YVNldC5ub3JtYWxDb2xvciA6IHRoaXMubm9ybWFsQ29sb3I7XG5cdFx0dGhpcy5sYWJlbEJhY2tncm91bmQgPSB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuYmFja2dyb3VuZCkgPT09IFwic3RyaW5nXCIgPyB0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuYmFja2dyb3VuZCA6IHRoaXMubGFiZWxCYWNrZ3JvdW5kO1xuXHRcdHRoaXMubGFiZWxDb2xvciA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgKHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZS5jb2xvcikgPT09IFwic3RyaW5nXCIgPyB0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUuY29sb3IgOiB0aGlzLmxhYmVsQ29sb3I7XG5cdFx0dGhpcy5zdGFyU2l6ZSA9IHR5cGVvZiAodGhpcy5kYXRhU2V0LnN0YXJTaXplKSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuZGF0YVNldC5zdGFyU2l6ZSA6IHRoaXMuc3RhclNpemU7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmdldENvbG9yKCk7XG5cdFx0fSwgdHJ1ZSk7XG5cdH1cblxuXHRnZXRDb2xvcigpIHtcblx0XHR0aGlzLmNvbG9ycy5mb3JFYWNoKChjb2xvciwgaW5kZXgpID0+IHtcblx0XHRcdGluZGV4ID0gaW5kZXggKyAxO1xuXHRcdFx0aWYgKGluZGV4ID49IHRoaXMucmF0aW5nICsgMSkge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Q29sb3JzLnB1c2goe1xuXHRcdFx0XHRcdCdhY3RpdmVDb2xvcic6IFN0cmluZygwKSArIFwiJVwiLFxuXHRcdFx0XHRcdCdncmF5Q29sb3InOiBTdHJpbmcoMCkgKyBcIiVcIixcblx0XHRcdFx0XHQnaWQnOiBEYXRlLm5vdygpICsgXCJzdGFydFwiICsgaW5kZXgsXG5cdFx0XHRcdFx0XCJ1cmxcIjogXCJ1cmwoI1wiICsgRGF0ZS5ub3coKSArIFwic3RhcnRcIiArIGluZGV4ICsgXCIpXCJcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPCB0aGlzLnJhdGluZykge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Q29sb3JzLnB1c2goe1xuXHRcdFx0XHRcdCdhY3RpdmVDb2xvcic6IFN0cmluZygxMDApICsgXCIlXCIsXG5cdFx0XHRcdFx0J2dyYXlDb2xvcic6IFN0cmluZygxMDApICsgXCIlXCIsXG5cdFx0XHRcdFx0J2lkJzogRGF0ZS5ub3coKSArIFwic3RhcnRcIiArIGluZGV4LFxuXHRcdFx0XHRcdFwidXJsXCI6IFwidXJsKCNcIiArIERhdGUubm93KCkgKyBcInN0YXJ0XCIgKyBpbmRleCArIFwiKVwiXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUNvbG9yID0gY29sb3I7XG5cdFx0XHRcdHRoaXMubGFiZWxCYWNrZ3JvdW5kID0gdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmJhY2tncm91bmQpID09PSBcInN0cmluZ1wiID8gdGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmJhY2tncm91bmQgOiBjb2xvcjtcblx0XHRcdFx0dGhpcy5sYWJlbENvbG9yID0gdHlwZW9mICh0aGlzLmRhdGFTZXQubGFiZWxzU3R5bGUpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiAodGhpcy5kYXRhU2V0LmxhYmVsc1N0eWxlLmNvbG9yKSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuZGF0YVNldC5sYWJlbHNTdHlsZS5jb2xvciA6ICcjZmZmJztcblxuXHRcdFx0XHR0aGlzLnN0YXJ0Q29sb3JzLnB1c2goe1xuXHRcdFx0XHRcdCdhY3RpdmVDb2xvcic6IFN0cmluZygxMDAgLSAoaW5kZXggLSB0aGlzLnJhdGluZykgKiAxMDApICsgXCIlXCIsXG5cdFx0XHRcdFx0J2dyYXlDb2xvcic6IFN0cmluZygxMDAgLSAoaW5kZXggLSB0aGlzLnJhdGluZykgKiAxMDApICsgXCIlXCIsXG5cdFx0XHRcdFx0J2lkJzogRGF0ZS5ub3coKSArIFwic3RhcnRcIiArIGluZGV4LFxuXHRcdFx0XHRcdFwidXJsXCI6IFwidXJsKCNcIiArIERhdGUubm93KCkgKyBcInN0YXJ0XCIgKyBpbmRleCArIFwiKVwiXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdG1vdXNlRW50ZXIoZXZlbnQsIGluZGV4KSB7XG5cdFx0aWYgKHRoaXMuaXNFZGl0YWJsZSkge1xuXHRcdFx0dGhpcy5yYXRpbmcgPSBpbmRleCArIDE7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5zdGFydENvbG9ycyA9IFtdO1xuXHRcdFx0XHR0aGlzLmdldENvbG9yKCk7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXG5cblx0b25TZWxlY3RSYXRpbmcoaW5kZXgpIHtcblx0XHRpZiAodGhpcy5pc0VkaXRhYmxlKSB7XG5cdFx0XHR0aGlzLnJhdGluZyA9IGluZGV4ICsgMTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN0YXJ0Q29sb3JzID0gW107XG5cdFx0XHRcdHRoaXMuZ2V0Q29sb3IoKTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdH1cblx0fVxufVxuIl19