import { Component, Input } from '@angular/core';
import { Technology } from 'src/app/models/technology.interface';

@Component({
  selector: 'app-tech-info',
  templateUrl: './tech-info.component.html',
  styleUrls: ['./tech-info.component.scss']
})
export class TechInfoComponent {

  @Input() technology!: Technology;

}
