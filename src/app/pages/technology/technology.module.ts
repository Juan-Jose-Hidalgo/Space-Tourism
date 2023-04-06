import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ComponentsModule } from 'src/app/components/components.module';
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
    ComponentsModule,
    TechnologyRoutingModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class TechnologyModule { }
