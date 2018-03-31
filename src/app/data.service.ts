import { Injectable } from '@angular/core';

// A great way of sharing data between components is to use the Rxjs BehaviorSubject library.
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// @Injectable() decorator, which means we can import it into other components and
// access its properties and methods.
@Injectable()

export class DataService {

  // initial goal through goals as a BehaviorSubject, and then define a goal property as an observable.
  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();


  constructor() {
  }

  // Used to update the goal property
  changeGoal(goal) {
    this.goals.next(goal);
  }

  add(a, b) {
    return a + b;
  }

}
