import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Destination } from 'src/app/models/destination.interface';

@Component({
  selector: 'app-destinations-menu',
  templateUrl: './destinations-menu.component.html',
  styleUrls: ['./destinations-menu.component.scss']
})
export class DestinationsMenuComponent {
  @Input() destinations: Destination[] = [];
  @Output() destination = new EventEmitter<string>();

  sendDestination(destination: string) {
    this.destination.emit(destination);
  }
}
