import { Component, Input } from '@angular/core';
import { Destination } from 'src/app/models/destination.interface';

@Component({
  selector: 'app-selected-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class SelectedDestinationComponent {

  @Input() destination!: Destination;
}
