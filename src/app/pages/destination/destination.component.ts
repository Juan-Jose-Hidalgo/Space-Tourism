import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Destination } from 'src/app/models/destination.interface';
import { DestinationsService } from 'src/app/services/destinations.service';
import { TitleService } from 'src/app/services/title.service';

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
  public urlParam: string = 'moon';

  constructor(
    private ar: ActivatedRoute,
    private ds: DestinationsService,
    private router: Router,
    private ts: TitleService
  ) { }

  ngOnInit(): void {
    this.urlParam = this.ar.snapshot.paramMap.get('name') || '';
    this.checkDestination(this.urlParam);
    this.ts.setTitle(`Destination - ${this.urlParam}`);
  }

  getDestinations(): void {
    this.destinationsSubs = this.ds.getDestinations().subscribe(res => this.destinations = res);
  }

  getDestination(name: string) {
    this.destinationSub = this.ds.getDestination(name).subscribe(destination => this.destination = destination);
  }

  checkDestination(name: string) {
    this.getDestinations();
    const result = this.destinations.some(destination => destination.name === this.urlParam);

    if (result) this.getDestination(name);
    else this.router.navigateByUrl('/');
  }

  changeDestination(param: string) {
    this.getDestination(param);
    this.ts.setTitle(`Destination - ${param}`);
  }

  ngOnDestroy(): void {
    this.destinationsSubs.unsubscribe();
    this.destinationSub.unsubscribe();
  }


}

