import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { TechnologyComponent } from './technology.component';


@NgModule({
  declarations: [
    TechnologyComponent
  ],
  exports: [
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    SharedModule
  ]
})
export class TechnologyModule { }