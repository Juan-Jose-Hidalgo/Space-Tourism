import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { TechInfoComponent } from './components/tech-info/tech-info.component';
import { TechNavComponent } from './components/tech-nav/tech-nav.component';
import { TechnologyComponent } from './technology.component';


@NgModule({
  declarations: [
    TechInfoComponent,
    TechNavComponent,
    TechnologyComponent
  ],
  exports: [
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class TechnologyModule { }
