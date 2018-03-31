import { Component, OnInit } from '@angular/core';

// Added
import { ActivatedRoute } from '@angular/router';   // subscribe (res.id)
import { Router } from '@angular/router';           // router.navigate['']

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate(['']);
    return false;
  }

}
