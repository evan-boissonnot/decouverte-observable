import { Observable } from 'rxjs';

const obs = new Observable(subscriber => {
    subscriber.complete();
});
