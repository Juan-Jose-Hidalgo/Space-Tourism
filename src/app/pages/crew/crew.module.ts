import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgOptimizedImage } from '@angular/common'

import { SharedModule } from 'src/app/shared/shared.module';

import { CrewRoutingModule } from './crew-routing.module';
import { CrewComponent } from './crew.component';
import { CrewInfoComponent } from './components/crew-info/crew-info.component';


@NgModule({
  declarations: [
    CrewComponent,
    CrewInfoComponent
  ],
  exports: [
    CrewComponent
  ],
  imports: [
    CommonModule,
    CrewRoutingModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class CrewModule { }
