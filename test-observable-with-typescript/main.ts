import { Observable } from 'rxjs';

const obs = new Observable(observer => {
    observer.next(1);
    observer.complete();
});

obs.subscribe(item => console.log(item));