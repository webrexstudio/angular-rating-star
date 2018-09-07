import { OnInit, SimpleChanges } from '@angular/core';
export declare class StarRatingComponent implements OnInit {
    rating: number;
    isEditable: boolean;
    dataSet: any;
    colors: string[];
    labels: string[];
    activeColor: string;
    normalColor: string;
    startColors: any[];
    per: string;
    showLabels: boolean;
    showNumber: boolean;
    labelBackground: string;
    labelColor: string;
    starSize: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getColor(): void;
    mouseEnter(event: any, index: any): void;
    onSelectRating(index: any): void;
}
