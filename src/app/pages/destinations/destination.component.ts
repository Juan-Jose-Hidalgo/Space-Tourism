import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Destination } from 'src/app/models/destination.interface';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit, OnDestroy {

  public destinationsSubs!: Subscription;
  public destinations: Destination[] = [];
  public selectedIndex = 0;

  constructor(
    private ds: DestinationsService,
  ) { }

  ngOnInit(): void {
    this.getDestinations();
  }

  getDestinations(): void {
    this.destinationsSubs = this.ds.getDestinations().subscribe(res => this.destinations = res);
  }

  ngOnDestroy(): void {
    this.destinationsSubs.unsubscribe();
  }

  changeIndex(index: number) {
    this.selectedIndex = index;
  }


}

