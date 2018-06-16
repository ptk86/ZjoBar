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

      { label: 'Grafik', routerLink: '/schedule' },
      {
        label: 'Wnioski',
        items: [
          { label: 'Urlopy', routerLink: '/vacation' },
          { label: 'Zamiana' }
        ]
      },
      { label: 'Wypłaty', routerLink: 'pay' }
    ];
  }

}
