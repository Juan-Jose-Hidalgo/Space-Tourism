import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DestinationsMenuComponent } from './destinations-menu/destinations-menu.component';
import { SelectedDestinationComponent } from './selected-destination/selected-destination.component';
import { CrewInfoComponent } from './crew-info/crew-info.component';



@NgModule({
  declarations: [
    CrewInfoComponent,
    DestinationsMenuComponent,
    SelectedDestinationComponent,
  ],
  exports: [
    CrewInfoComponent,
    DestinationsMenuComponent,
    SelectedDestinationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
