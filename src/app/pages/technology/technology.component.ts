import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Technology } from 'src/app/models/technology.interface';
import { TechnologyService } from 'src/app/services/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit, OnDestroy {

  private technologiesSub!: Subscription;
  public technologies: Technology[] = [];
  public selectedIndex = 0;
  public landscape: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.landscape = window.innerWidth >= 1440 ? false : true;
    console.log('width:', window.innerWidth);
    console.log('landscape:', this.landscape);
  }

  constructor(
    private ts: TechnologyService
  ) { }

  ngOnInit(): void {
    this.onResize();
    this.getTechnologies();
  }

  ngOnDestroy(): void {
    this.technologiesSub.unsubscribe();
  }

  getTechnologies() {
    this.technologiesSub = this.ts.getTechnologies().subscribe(technologies => this.technologies = technologies);
  }

  updateIndex(index: number): void {
    this.selectedIndex = index;
  }

}
