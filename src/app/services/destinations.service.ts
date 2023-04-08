import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { destinations } from '../mocks/destinations.mock';
import { Destination } from '../models/destination.interface';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private destinationsArray: Destination[] = [];

  constructor() { }

  getDestinations() {
    return new Observable<Destination[]>(observer => {
      this.destinationsArray = [...destinations];
      observer.next(this.destinationsArray);
    })
  }
}
