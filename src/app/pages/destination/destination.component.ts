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
  public destinationSub!: Subscription;
  public destinations: Destination[] = [];
  public destination!: Destination;

  constructor(
    private ds: DestinationsService
  ) { }

  ngOnInit(): void {
    this.getDestinations();
  }

  getDestinations(): void {
    this.destinationsSubs = this.ds.getDestinations().subscribe(res => this.destinations = res);
  }

  getDestination(name: string) {
    this.destinationSub = this.ds.getDestination(name).subscribe(destination => this.destination = destination);
  }

  ngOnDestroy(): void {
    this.destinationsSubs.unsubscribe();
    this.destinationSub.unsubscribe();
  }


}

