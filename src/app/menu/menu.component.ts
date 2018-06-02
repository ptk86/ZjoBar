import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Grafik',
        items: [
          { label: 'Grafik', routerLink: '/schedule' }
        ],
        expanded: true
      },
      {
        label: 'Wnioski',
        items: [
          { label: 'Urlopy', routerLink: '/vacation' },
          { label: 'Zamiana' }
        ],
        expanded: true
      },
      {
        label: 'Księgowość',
        items: [
          { label: 'Wypłaty' }
        ],
        expanded: true
      }
    ];
  }

}
