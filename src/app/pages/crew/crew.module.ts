import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgOptimizedImage } from '@angular/common'

import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CrewRoutingModule } from './crew-routing.module';
import { CrewComponent } from './crew.component';


@NgModule({
  declarations: [
    CrewComponent
  ],
  exports: [
    CrewComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CrewRoutingModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class CrewModule { }
