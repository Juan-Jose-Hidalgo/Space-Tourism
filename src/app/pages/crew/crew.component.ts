import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrewMember } from 'src/app/models/crew-member.interface';
import { CrewService } from 'src/app/services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit, OnDestroy {

  public crew: CrewMember[] = [];
  private crewSub!: Subscription;

  constructor(
    private cs: CrewService
  ) { }

  ngOnInit(): void {
    this.getCrew();
  }

  getCrew() {
    this.crewSub = this.cs.getCrew().subscribe(crew => this.crew = crew);
  }

  ngOnDestroy(): void {
    this.crewSub.unsubscribe();
  }

}
