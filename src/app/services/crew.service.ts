import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { crew } from '../mocks/crew.mock';
import { CrewMember } from '../models/crew-member.interface';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  private crewArray: CrewMember[] = [];

  constructor() { }

  getCrew() {
    return new Observable<CrewMember[]>(observer => {
      this.crewArray = [...crew];
      observer.next(this.crewArray);
    })
  }
}
