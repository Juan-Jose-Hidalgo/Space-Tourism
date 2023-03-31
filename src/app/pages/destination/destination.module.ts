import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { DestinationComponent } from './destination.component';


@NgModule({
  declarations: [
    DestinationComponent
  ],
  exports: [
    DestinationComponent
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule
  ]
})
export class DestinationModule { }
