import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsMenuComponent } from './destinations-menu/destinations-menu.component';



@NgModule({
  declarations: [
    DestinationsMenuComponent
  ],
  exports: [
    DestinationsMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
