import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-layout',
  template: `
  <div class="ui-g">
    <div class="ui-g-12">
      <app-menu></app-menu>
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styles: []
})
export class LayoutComponent {

}
