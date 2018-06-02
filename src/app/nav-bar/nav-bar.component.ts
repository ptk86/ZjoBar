import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav>
      <a routerLink="/schedule">Grafik</a>
    </nav>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
