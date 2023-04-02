import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DestinationsMenuComponent } from './destinations-menu/destinations-menu.component';
import { SelectedDestinationComponent } from './selected-destination/selected-destination.component';



@NgModule({
  declarations: [
    DestinationsMenuComponent,
    SelectedDestinationComponent,
  ],
  exports: [
    DestinationsMenuComponent,
    SelectedDestinationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
