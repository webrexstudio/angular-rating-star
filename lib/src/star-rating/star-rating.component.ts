import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

	@Input() rating: number;
	@Input() isEditable: boolean = false;
	@Input() dataSet: any = {};

	public colors = ["#ff0109", "#ff7f2b", "#f7ba44", "#9ACD32", "#5ba82a"];
	public labels = ["Bad", "Not Good", "Average", "Good", "Best"];
	public activeColor = "#808080";
	public normalColor = "rgba(0,0,0,0.3)";
	public startColors = [];
	public per = "100%";
	public showLabels: boolean = true;
	public showNumber: boolean = true;
	public labelBackground = this.activeColor;
	public labelColor = "#fff";
	public starSize = "20";

	constructor() { }
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

	ngOnChanges(changes: SimpleChanges) {
		setTimeout(() => {
			this.getColor();
		}, true);
	}

	getColor() {
		this.colors.forEach((color, index) => {
			index = index + 1;
			if (index >= this.rating + 1) {
				this.startColors.push({
					'activeColor': String(0) + "%",
					'grayColor': String(0) + "%",
					'id': Date.now() + "start" + index,
					"url": "url(#" + Date.now() + "start" + index + ")"
				})
			} else if (index < this.rating) {
				this.startColors.push({
					'activeColor': String(100) + "%",
					'grayColor': String(100) + "%",
					'id': Date.now() + "start" + index,
					"url": "url(#" + Date.now() + "start" + index + ")"
				})
			} else {
				this.activeColor = color;
				this.labelBackground = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.background) === "string" ? this.dataSet.labelsStyle.background : color;
				this.labelColor = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.color) === "string" ? this.dataSet.labelsStyle.color : '#fff';

				this.startColors.push({
					'activeColor': String(100 - (index - this.rating) * 100) + "%",
					'grayColor': String(100 - (index - this.rating) * 100) + "%",
					'id': Date.now() + "start" + index,
					"url": "url(#" + Date.now() + "start" + index + ")"
				})
			}
		})
	}

	mouseEnter(event, index) {
		if (this.isEditable) {
			this.rating = index + 1;
			setTimeout(() => {
				this.startColors = [];
				this.getColor();
			}, true);
		}
	}



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
