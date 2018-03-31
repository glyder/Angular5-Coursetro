import { Component, OnInit } from '@angular/core';

// Added
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  // template: `
  // <p>This is my inline template HTML!</p>
  // `,
  templateUrl: './home.component.html',
  // styles: [`
  // p { font-weight: bold; }
  // div { color: gray; }
  // `],
  styleUrls: ['./home.component.scss'],
  animations: [

    // Animations here...
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(15px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.1s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(15px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])


  ]
})

export class HomeComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  itemCount: number = 4;

  btnText = 'Add an item';
  goalText = '';
  goals = ['My first life goal', 'I want to eat chocolate', 'Go running!'];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount -= 1;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';

    this.itemCount = this.goals.length;
  }

}
