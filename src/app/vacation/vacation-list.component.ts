import { Component, OnInit } from '@angular/core';
import { Vacation, RequestState } from './vacation';
import * as moment from 'moment';

@Component({
    selector: 'app-vacation-list',
    templateUrl: './vacation-list.component.html',
    styles: [`label {
        font-weight: bold;
        margin-top: .25em;
        display: block;}`]
})
export class VacationListComponent {
    displayDialog: boolean;
    minDateValue: Date = new Date();


    tempItem: Vacation;

    sekectedItem: Vacation;

    newItem: boolean;

    vacationList: Vacation[] = [
        new Vacation(1, new Date('2018-06-01'), new Date('2018-06-02'), 'Wyjazd w góry', true, RequestState.Registered),
        new Vacation(1, new Date('2018-06-03'), new Date('2018-06-04'), 'loerem ipsum pierdu pierdu', true, RequestState.Registered),
        new Vacation(1, new Date('2018-06-03'), new Date('2018-06-04'), 'loerem ipsum pierdu pierdu', true, RequestState.Registered),

    ];

    showDialogToAdd() {
        this.newItem = true;
        this.tempItem = new Vacation();
        this.tempItem.isOnDemand = false;
        this.tempItem.state = RequestState.Registered;
        this.displayDialog = true;
    }

    save() {
        const vacationList = [...this.vacationList];
        if (this.newItem) {
            vacationList.push(this.tempItem);
        } else {
            vacationList[this.vacationList.indexOf(this.sekectedItem)] = this.tempItem;
        }

        this.vacationList = vacationList;
        this.tempItem = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newItem = false;
        this.tempItem = this.cloneItem(event.data);
        this.displayDialog = true;
    }

    cloneItem(v: Vacation): Vacation {
        const clone = new Vacation();
        clone.from = v.from;
        clone.to = v.to;
        clone.isOnDemand = v.isOnDemand;
        clone.message = v.message;
        clone.state = v.state;
        clone.userId = v.userId;

        return clone;
    }
}
