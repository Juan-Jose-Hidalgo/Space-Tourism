import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { technologies } from '../mocks/technologies.mock';
import { Technology } from '../models/technology.interface';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private technologyArray: Technology[] = [];

  constructor() { }

  getTechnologies() {
    return new Observable<Technology[]>(observer => {
      this.technologyArray = [...technologies];
      observer.next(this.technologyArray);
    })
  }
}
