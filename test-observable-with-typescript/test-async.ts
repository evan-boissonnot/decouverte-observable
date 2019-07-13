import { Observable } from 'rxjs';

export function launchTestAsyncTimeout(): Observable<number> {
    return new Observable<number>(subscriber => {
        subscriber.next(1);

        setTimeout(() => {
            subscriber.next(2);
        }, 500);

        subscriber.next(10);

    })
}