import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CrewRoutingModule,
    SharedModule
  ]
})
export class CrewModule { }
