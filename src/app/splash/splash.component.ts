import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  constructor(private router: Router) {}

  ngOnInit() {
      setTimeout(() => {
          this.router.navigate(['github-search-repository']);
      }, 7000);  
  }
}
