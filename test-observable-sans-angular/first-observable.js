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

// observable are not asynchronous
const obsLikeFunction = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
});

console.log('first');

obsLikeFunction.subscribe(item => console.log(item));

console.log('end');


