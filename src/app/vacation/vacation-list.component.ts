import { Component, OnInit } from '@angular/core';
import { Vacation, RequestState } from './vacation';

@Component({
  selector: 'app-vacation-list',
  template: `
      <p-table [value]="vacationList">
        <ng-template pTemplate="header">
            <tr>
                <th>Stan</th>
                <th>Od</th>
                <th>Do</th>
                <th>Liczba dni</th>
                <th>Na żądanie</th>
                <th>Wiadmość</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-vacation>
            <tr>
                <td>{{vacation.state }}</td>
                <td>{{vacation.from | date:'yyyy-MM-dd'}}</td>
                <td>{{vacation.to | date:'yyyy-MM-dd'}}</td>
                <td>{{vacation.days}}</td>
                <td>{{vacation.isOnDemand}}</td>
                <td>{{vacation.message}}</td>
            </tr>
        </ng-template>
      </p-table>
  `,
  styles: []
})
export class VacationListComponent implements OnInit {

  vacationList: Vacation[] = [
    new Vacation(1, new Date('2018-06-01'), new Date('2018-06-02'), 'Wyjazd w góry', true, RequestState.Registered),
    new Vacation(1, new Date('2018-06-03'), new Date('2018-06-04'), 'loerem ipsum pierdu pierdu', true, RequestState.Registered),
    new Vacation(1, new Date('2018-06-03'), new Date('2018-06-04'), 'loerem ipsum pierdu pierdu', true, RequestState.Registered),

  ];

  ngOnInit() {
  }

}
