import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Technology } from 'src/app/models/technology.interface';

@Component({
  selector: 'app-tech-nav',
  templateUrl: './tech-nav.component.html',
  styleUrls: ['./tech-nav.component.scss']
})
export class TechNavComponent {

  @Input() technologies: Technology[] = [];
  @Output() newIndex = new EventEmitter<number>();

  public selectedIndex = 0;

  updateIndex(index: number): void {
    this.selectedIndex = index;
    this.newIndex.emit(this.selectedIndex);
  }

}
