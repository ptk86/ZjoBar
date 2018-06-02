import * as moment from 'moment';

export class Vacation {
    constructor(public userId: number,
        public from: Date,
        public to: Date,
        public message: string,
        public isOnDemand: boolean,
        public state: RequestState
    ) {
    }

    get days(): number {
        const msDiff = moment(this.to).diff(this.from);
        const duration = moment.duration(msDiff).asDays();
        return duration;
    }
}

export enum RequestState {
    Registered = 'Oczekuje na akceptację',
    Accepted = 'Zaapceptowany'
}
