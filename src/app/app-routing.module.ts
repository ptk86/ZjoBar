import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { VacationComponent } from './vacation/vacation.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'vacation', component: VacationComponent },
  { path: 'pay', component: PayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
