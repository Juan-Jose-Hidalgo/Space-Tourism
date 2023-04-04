import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(
    private ts: TechnologyService
  ) { }

  ngOnInit(): void {
    this.getTechnologies();
    console.log(this.technologies);
  }

  ngOnDestroy(): void {
    this.technologiesSub.unsubscribe();
  }

  getTechnologies() {
    this.technologiesSub = this.ts.getTechnologies().subscribe(technologies => this.technologies = technologies);
  }

}
