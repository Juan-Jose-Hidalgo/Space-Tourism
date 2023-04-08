import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Destination } from 'src/app/models/destination.interface';

@Component({
  selector: 'app-destinations-menu',
  templateUrl: './destinations-menu.component.html',
  styleUrls: ['./destinations-menu.component.scss']
})
export class DestinationsMenuComponent {
  @Input() destinations: Destination[] = [];
  @Output() updatedIndex = new EventEmitter<number>();

  public selectedIndex = 0;

  changeIndex(index: number) {
    this.selectedIndex = index;
    this.updatedIndex.emit(index);
  }
}
