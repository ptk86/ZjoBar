import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation-list-item',
  template: `
    <p>
      Moje wnioski:
    </p>
  `,
  styles: []
})
export class VacationListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
