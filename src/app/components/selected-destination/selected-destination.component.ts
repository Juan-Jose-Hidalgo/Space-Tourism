import { Component, Input } from '@angular/core';
import { Destination } from 'src/app/models/destination.interface';

@Component({
  selector: 'app-selected-destination',
  templateUrl: './selected-destination.component.html',
  styleUrls: ['./selected-destination.component.scss']
})
export class SelectedDestinationComponent {

  @Input() destination!: Destination;
}
