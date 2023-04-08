import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrewMember } from 'src/app/models/crew-member.interface';
import { CrewService } from 'src/app/services/crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit, OnDestroy {

  public selectedIndex = 0;
  public crew: CrewMember[] = [];

  private crewSub!: Subscription;
  private touchEndX!: number;
  private touchStarted = false;
  private touchStartX!: number;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.touchStarted = true;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    if (!this.touchStarted) return;
    this.touchEndX = event.touches[0].clientX;
  }

  @HostListener('touchmove', ['$event'])
  ontTouchMove(event: TouchEvent): void {
    if (!this.touchStarted) return;
    this.touchEndX = event.touches[0].clientX;
  }

  @HostListener('touchend')
  onTouchEnd(): void {
    if (!this.touchStarted) return;

    const touchDiff = this.touchStartX - this.touchEndX;
    const absTouchDiff = Math.abs(touchDiff);

    // Change slide if swipe distance is greater than 50px
    if (absTouchDiff > 50) {
      if (touchDiff < 0) this.selectNext();
      else this.selectPrevious();
    }

    this.touchStarted = false;
  }

  constructor(
    private cs: CrewService
  ) { }

  ngOnInit(): void {
    this.getCrew();
  }

  ngOnDestroy(): void {
    this.crewSub.unsubscribe();
  }

  getCrew() {
    this.crewSub = this.cs.getCrew().subscribe(crew => this.crew = crew);
  }

  selectItem(index: number) {
    this.selectedIndex = index;
  }

  selectNext(): void {
    this.selectedIndex = (this.selectedIndex === this.crew.length - 1) ? 0 : this.selectedIndex + 1;
  }

  selectPrevious(): void {
    this.selectedIndex = (this.selectedIndex === 0) ? this.crew.length - 1 : this.selectedIndex - 1;
  }

}
