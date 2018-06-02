import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation',
  template: `

      <app-vacation-list></app-vacation-list>

  `,
  styles: []
})
export class VacationComponent implements OnInit {

  ngOnInit(): void {
  }
}
