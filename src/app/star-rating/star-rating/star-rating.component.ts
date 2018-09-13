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


	public startColors = [];
	public starSize = "20";
	public labelBackground = this.dataSet.activeColor;
	public rgb: any;
	public errorMsg: String;

	constructor() { }
	ngOnInit() {
		this.starSize = typeof (this.dataSet.starSize) === "string" ? this.dataSet.starSize : this.starSize;
		this.labelBackground = typeof (this.dataSet.labelsStyle) === "object" && typeof (this.dataSet.labelsStyle.background) === "string" ? this.dataSet.labelsStyle.background : this.labelBackground;
	}

	ngOnChanges(changes: SimpleChanges) {
		this.dataSet = { ...DataSet, ...this.dataSet };

		if (this.dataSet.noOfStars > this.dataSet.colors.length) {
			if (this.dataSet.noOfStars > this.dataSet.labels.length) {
				this.errorMsg = "You Need to add " + this.dataSet.noOfStars + " labels in array of labels";
			}
			else {
				this.errorMsg = "";
			}

			this.rgb = this.interpolateColors("rgb(220, 33, 15)", "rgb(74, 146, 17)", this.dataSet.noOfStars);
			this.dataSet.colors = [];
			this.rgb.forEach(element => {
				this.dataSet.colors.push(this.rgbToHex(element[0], element[1], element[2]));
			});
		}
		else {
			this.errorMsg = "";
		}

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

	// Getiing colour range dunamically
	interpolateColor(color1, color2, factor) {
		if (arguments.length < 3) {
			factor = 0.5;
		}
		var result = color1.slice();
		for (var i = 0; i < 3; i++) {
			result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
		}
		return result;
	};
	// My function to interpolate between two colors completely, returning an array
	interpolateColors(color1, color2, steps) {
		var stepFactor = 1 / (steps - 1),
			interpolatedColorArray = [];

		color1 = color1.match(/\d+/g).map(Number);
		color2 = color2.match(/\d+/g).map(Number);

		for (var i = 0; i < steps; i++) {
			interpolatedColorArray.push(this.interpolateColor(color1, color2, stepFactor * i));
		}

		return interpolatedColorArray;
	}

	//convert RGB to hex 
	componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	rgbToHex(r, g, b) {
		return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
	}



}
