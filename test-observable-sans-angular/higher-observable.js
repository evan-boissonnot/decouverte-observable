const { Observable, from, range, of } = require('rxjs');
const { map, filter, concatAll } = require('rxjs/operators');
const { fromFetch }  = require('rxjs/fetch');


const myObservable = new Observable(subscriber => {
    subscriber.next("https://wwww.google.fr");
    subscriber.next("https://stackoverflow.com/");
});


// from(fetch('https://www.google.fr')).subscribe(item => console.log(item));
