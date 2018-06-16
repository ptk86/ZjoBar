import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { ScheduleModule } from 'primeng/schedule';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { VacationComponent } from './vacation/vacation.component';
import { VacationListComponent } from './vacation/vacation-list.component';
import { VacationListItemComponent } from './vacation/vacation-list-item.component';
import { PayComponent } from './pay/pay.component';
import { WorkerShiftComponent } from './worker-shift/worker-shift.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LayoutComponent,
    MenuComponent,
    VacationComponent,
    VacationListComponent,
    VacationListItemComponent,
    PayComponent,
    WorkerShiftComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ScheduleModule,
    MenubarModule,
    BreadcrumbModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
