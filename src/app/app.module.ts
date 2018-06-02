import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ScheduleModule } from 'primeng/schedule';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { VacationComponent } from './vacation/vacation.component';
import { VacationListComponent } from './vacation/vacation-list.component';
import { VacationListItemComponent } from './vacation/vacation-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LayoutComponent,
    MenuComponent,
    VacationComponent,
    VacationListComponent,
    VacationListItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScheduleModule,
    PanelMenuModule,
    BreadcrumbModule,
    PanelModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
