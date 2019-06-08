const { Observable, range, of } = require('rxjs');
const { map, filter } = require('rxjs/operators');

// ===== DISCOVER OBSERVABLE =====
// create observables

const obs = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next("test");
    subscriber.next(new Date());

    let i = 0;
    const beginDate = new Date();
    const repeatInterval = setInterval(() => {
        
        subscriber.next('ouin');
        

        const intervalCry = (new Date()).getSeconds() - beginDate.getSeconds();
        if(intervalCry > 5) {
            clearInterval(repeatInterval);
            subscriber.complete();
        }
    }, 10);
});

obs.subscribe(item => console.log(item));


