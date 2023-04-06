import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DestinationsMenuComponent } from './destinations-menu/destinations-menu.component';
import { SelectedDestinationComponent } from './selected-destination/selected-destination.component';
import { CrewInfoComponent } from './crew-info/crew-info.component';
import { TechInfoComponent } from './tech-info/tech-info.component';
import { TechNavComponent } from './tech-nav/tech-nav.component';



@NgModule({
  declarations: [
    CrewInfoComponent,
    DestinationsMenuComponent,
    SelectedDestinationComponent,
    TechInfoComponent,
    TechNavComponent,
  ],
  exports: [
    CrewInfoComponent,
    DestinationsMenuComponent,
    SelectedDestinationComponent,
    TechInfoComponent,
    TechNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
