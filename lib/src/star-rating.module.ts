import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StarRatingComponent],
  exports:[StarRatingComponent]
})
export class StarRatingModule { 
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule: StarRatingComponent,
      providers: [
        { provide: 'config', useValue: config }
      ]
    };
  }
}

StarRatingModule.forRoot({ apiKey: 'shhhhh' })

