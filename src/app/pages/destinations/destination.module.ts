import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DestinationComponent } from './destination.component';
import { DestinationsMenuComponent } from './components/destinations-menu/destinations-menu.component';
import { SelectedDestinationComponent } from './components/destination/destination.component';



@NgModule({
  declarations: [
    DestinationComponent,
    DestinationsMenuComponent,
    SelectedDestinationComponent
  ],
  exports: [
    DestinationComponent
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class DestinationModule { }
