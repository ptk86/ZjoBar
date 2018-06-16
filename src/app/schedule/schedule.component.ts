import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-schedule',
    template: `
    <div class="ui-g-4">
      <p-schedule [events]="events" [header]="header" [editable]="true" locale="pl"></p-schedule>
    </div>
  `,
    styles: []
})
export class ScheduleComponent implements OnInit {

    events: any[];

    header = {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
    };

    ngOnInit() {
        this.events = [
            {
                'start': '2018-05-28',
                'end': '2018-06-02'
            },
            {
                'start': '2018-06-04',
                'end': '2018-06-09'
            },
            {
                'start': '2018-06-11',
                'end': '2018-06-16'
            },
            {
                'start': '2018-06-18',
                'end': '2018-06-23'
            },
            {
                'start': '2018-06-25',
                'end': '2018-06-30'
            },
            {
                'start': '2018-07-02',
                'end': '2018-07-07'
            },
            {
                'start': '2018-07-09',
                'end': '2018-07-14'
            },
            {
                'start': '2018-07-16',
                'end': '2018-07-21'
            },
            {
                'start': '2018-07-23',
                'end': '2018-07-28'
            },
            {
                'start': '2018-07-30',
                'end': '2018-08-04'
            }
        ];
    }
}
