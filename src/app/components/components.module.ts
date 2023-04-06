import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CrewInfoComponent } from './crew-info/crew-info.component';
import { TechInfoComponent } from './tech-info/tech-info.component';
import { TechNavComponent } from './tech-nav/tech-nav.component';



@NgModule({
  declarations: [
    CrewInfoComponent,
    TechInfoComponent,
    TechNavComponent,
  ],
  exports: [
    CrewInfoComponent,
    TechInfoComponent,
    TechNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
