# Rating-star

The Rating-star extension provides a tag extension that when embedded in a page allows users to rate different "properties" of the page.

## Demos and Sample Usage

For Demos and sample usage of this package have a look at the Link [angular-rating-star](https://www.webrexstudio.com/angular-rating-star/).

## Installation 

```
npm install angular-rating-star --save
```

## Import StarRatingModule

import the StarRatingModule in your application module

```
import { StarRatingModule } from 'angular-rating-star';

@NgModule({
    imports: [StarRatingModule]
})
```

## Usage

Use in your <*component.html*> 

```
<app-star-rating [rating]="3" [isEditable] = "true" [dataSet] = "dataSet"></app-star-rating>
```

## Properties
**rating** `[0-5]`

define rating from 0 to 5, default is 0. 
  
```
<app-star-rating [rating]="2" [isEditable] = "true"></app-star-rating>     
```
  
**isEditable** `[true/false]`

Is rating editable or not, default is false.
```
<app-star-rating [rating]="3" [isEditable] = "true"></app-star-rating>`
```

**dataset** `[options]`

You can configure control by passing options.
```    
<app-star-rating [rating]="3" [isEditable] = "true" [dataSet] = "dataSet"></app-star-rating>`
```

## Options
  
User can customize Rating-star by passing options like below
  
**normalColor**`[String / Hexadecimal Colors]`

Colors string like “rgb(123,221,255)” or “#c3c366” for not filled star.
```
dataSet = {
            normalColor: #ccc // Set the default colour of component
}
```

**showLabels**`[true/false]`

Is label text visible or not, default is true
```
dataSet = {
            showLabels: false // hide the label
}
```

**showNumber**`[true/false]`

Is label number visible or not, default is true
```
dataSet = {
            showNumber: false // hide the visible in the label
}
```
          
**colors**`[Array]`

Array of five colors in order from 1 to 5
```
dataSet = {
            colors: ["#ff4545", "#ffa534", "#c3c366", "#6ac34e", "#45B523"] // Set the five colours 
}
```
 
**labels**`[Array]`

Array of five strings for label text in order from 1 to 5
```
dataSet = {
            labels: ["Bad", "Not Bad", "Average", "Good", "Best",] // Set the five Labels 
}
```
  
**labelsStyle**`[Object]`

Object for styling label - background and color as shown above
```
dataSet = {
            labelsStyle: {
                background: '#3F51B5',
                color: '#f8f8f8',
          }
}
```

**starSize**`[String]`

Set the size of star, default size is 20px.
```
dataSet = {
            starSize: 20 // Set the default Size of component
}
```
