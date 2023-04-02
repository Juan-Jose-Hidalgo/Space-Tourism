import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { destinations } from '../mocks/destinations.mock';
import { Destination } from '../models/destination.interface';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private destinationsArray: Destination[] = [];
  private destination!: Destination;

  constructor() { }

  getDestinations() {
    return new Observable<Destination[]>(observer => {
      this.destinationsArray = [...destinations];
      observer.next(this.destinationsArray);
    })
  }

  getDestination(name: string) {
    return new Observable<Destination>(observer => {
      const result = destinations.filter(destination => destination.name === name);
      this.destination = result[0];
      observer.next(this.destination);
    })
  }
}
