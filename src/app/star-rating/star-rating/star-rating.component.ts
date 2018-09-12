import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataSet } from './star-rating.constant';
@Component({
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

	@Input() rating: number;
	@Input() isEditable: boolean = false;
	@Input() dataSet: any = DataSet;

	public noOfStars = 5;
	public startColors = [];
	public starSize = "20";
	public labelBackground = this.dataSet.activeColor;

	constructor() { }
	ngOnInit() {
		this.starSize = typeof (this.dataSet.starSize) === "string" ? this.dataSet.starSize : this.starSize;
		this.noOfStars = typeof (this.dataSet.noOfStars) === "number" ? this.dataSet.noOfStars : this.noOfStars;
		this.labelBackground = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.background) === "string" ? this.dataSet.labelsStyle.background : this.labelBackground;
		/* if (this.noOfStars > 5 && this.showLabels == true) {
			if (this.colors.length != this.noOfStars && this.labels.length != this.noOfStars) {
				this.isError = true;
				this.errorMsg = "Please add array[6] for both colors[] and labels[] ";
			}
		}
		else if (this.noOfStars > 5) {
			this.isError = true;
			this.errorMsg = "Please add colour eaquals to noOfStar";
		}
		else {
			this.isError = false;
		} */

	}

	ngOnChanges(changes: SimpleChanges) {
		this.dataSet = { ...DataSet, ...this.dataSet };
		this.getColor();
	}

	getColor() {
		this.dataSet.colors.forEach((color, index) => {
			index = index + 1;
			if (index >= this.rating + 1) {
				this.startColors.push(this.getStarObject(index, 0));
			} else if (index < this.rating) {
				this.startColors.push(this.getStarObject(index, 100));
			} else {
				this.labelBackground = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.background) === "string" ? this.dataSet.labelsStyle.background : color;
				this.dataSet.labelColor = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.color) === "string" ? this.dataSet.labelsStyle.color : '#fff';
				this.dataSet.activeColor = color;
				this.startColors.push(this.getStarObject(index, (100 - (index - this.rating))));
			}
		})
	}

	getStarObject(index, value) {
		return {
			'activeColor': String(value) + "%",
			'grayColor': String(value) + "%",
			'id': Date.now() + "start" + index,
			"url": "url(#" + Date.now() + "start" + index + ")"
		}
	}

	mouseEnter(index) {
		if (this.isEditable) {
			this.rating = index + 1;
			this.startColors = [];
			this.getColor();
		}
	}

	onSelectRating(index) {
		if (this.isEditable) {
			this.rating = index + 1;
			this.startColors = [];
			this.getColor();
		}
	}
}
