import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CrewMember } from 'src/app/models/crew-member.interface';

@Component({
  selector: 'app-crew-info',
  templateUrl: './crew-info.component.html',
  styleUrls: ['./crew-info.component.scss']
})
export class CrewInfoComponent {

  @Input() crew: CrewMember[] = [];
  @Input() selectedIndex = 0;

}
