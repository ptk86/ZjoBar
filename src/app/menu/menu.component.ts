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
        label: 'Dostępność',
        items: [
          { label: 'Moja dostępność' }
        ],
        expanded: true
      },
      {
        label: 'Urlopy',
        items: [
          { label: 'Wnioski urlopowe' }
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
