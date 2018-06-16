import * as moment from 'moment';

export class WorkerShift {
    constructor(public userId?: number,
        public from?: Date,
        public to?: Date,
        public message?: string,
        public state?: RequestState,
        public withWhom?: string
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
