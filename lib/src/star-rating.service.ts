import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarRatingService {

  constructor(@Inject('config') private config ) { }
}
