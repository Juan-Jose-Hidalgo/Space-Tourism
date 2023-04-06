import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';
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
    ComponentsModule,
    DestinationRoutingModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class DestinationModule { }
