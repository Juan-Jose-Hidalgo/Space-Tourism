import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TechInfoComponent } from './tech-info/tech-info.component';
import { TechNavComponent } from './tech-nav/tech-nav.component';



@NgModule({
  declarations: [
    TechInfoComponent,
    TechNavComponent,
  ],
  exports: [
    TechInfoComponent,
    TechNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
