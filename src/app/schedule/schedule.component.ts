import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  template: `
      <p-schedule [events]="events" [editable]="true" locale="pl"  (onDayClick)=onAddEvent() ></p-schedule>
  `,
  styles: []
})
export class ScheduleComponent implements OnInit {

  events: any[];

    ngOnInit() {
        this.events = [
            {
                'title': 'All Day Event',
                'start': '2016-01-01'
            },
            {
                'title': 'Long Event',
                'start': '2018-05-28',
                'end': '2018-06-02'
            },
            {
                'title': 'Repeating Event',
                'start': '2016-01-09T16:00:00'
            },
            {
                'title': 'Repeating Event',
                'start': '2016-01-16T16:00:00'
            },
            {
                'title': 'Conference',
                'start': '2016-01-11',
                'end': '2016-01-13'
            }
        ];
    }

    onAddEvent(){
      this.events.push(
        {
          'title': 'Long Event',
          'start': '2018-05-28',
          'end': '2018-06-02'
        }
      );
    }

}
