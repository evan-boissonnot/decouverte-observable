const { Observable, range, of } = require('rxjs');
const { map, filter } = require('rxjs/operators');

// ===== DISCOVER OBSERVABLE =====
// create observables

const obs = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next("test");
    subscriber.next(new Date());
    
    setTimeout(() => {
        subscriber.error('some error');
    }, 2000);
    
    subscriber.error('error 0'); // error one stop the other
    subscriber.complete(); // due to error, complete never arrive
});

obs.subscribe((x) => { console.log('next', x); },
(error) => { console.log('error', error); },
() => { console.log('complete'); });


const obs2 = new Observable(subscriber => {
    
    setTimeout(() => {
        subscriber.error('2 some error');
    }, 2000);
    
    subscriber.complete(); // due to error, complete never arrive
});

obs2.subscribe((x) => { console.log('2. next', x); },
(error) => { console.log('2. error', error); },
() => { console.log('2. complete'); });