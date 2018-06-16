import { Component } from '@angular/core';
import * as moment from 'moment';
import { WorkerShift, RequestState } from './worker-shift';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-worker-shift',
  templateUrl: './worker-shift.components.html' ,
  styles: []
})
export class WorkerShiftComponent {

  displayDialog: boolean;
    minDateValue: Date = new Date();

    workers: SelectItem[] = [
        { label: 'Jarosław K', value: 'Jarosław K'},
        { label: 'Donald T', value: 'Donald T'},
        { label: 'Mateusz M', value: 'Mateusz M'}
    ];

    tempItem: WorkerShift;

    sekectedItem: WorkerShift;

    newItem: boolean;

    shiftList: WorkerShift[] = [
        new WorkerShift(1, new Date('2018-06-01'), new Date('2018-06-02'), 'safhaksjfhkasj safkjnfskj', RequestState.Registered, 'Jarosław K'),
        new WorkerShift(1, new Date('2018-06-03'), new Date('2018-06-04'), 'blah blah blah', RequestState.Registered, 'Donald T'),
        new WorkerShift(1, new Date('2018-06-03'), new Date('2018-06-04'), 'uaasda asdlkasdlk', RequestState.Registered, 'Mateusz M'),

    ];

    showDialogToAdd() {
        this.newItem = true;
        this.tempItem = new WorkerShift();
        this.tempItem.state = RequestState.Registered;
        this.displayDialog = true;
    }

    save() {
        const shiftList = [...this.shiftList];
        if (this.newItem) {
            shiftList.push(this.tempItem);
        } else {
            shiftList[this.shiftList.indexOf(this.sekectedItem)] = this.tempItem;
        }

        this.shiftList = shiftList;
        this.tempItem = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newItem = false;
        this.tempItem = this.cloneItem(event.data);
        this.displayDialog = true;
    }

    cloneItem(v: WorkerShift): WorkerShift {
        const clone = new WorkerShift();
        clone.from = v.from;
        clone.to = v.to;
        clone.message = v.message;
        clone.state = v.state;
        clone.userId = v.userId;

        return clone;
    }

}
