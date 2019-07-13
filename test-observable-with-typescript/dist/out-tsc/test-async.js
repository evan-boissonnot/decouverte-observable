import { Observable } from 'rxjs';
export function launchTestAsyncTimeout() {
    return new Observable(function (subscriber) {
        subscriber.next(1);
        setTimeout(function () {
            subscriber.next(2);
        }, 500);
        subscriber.next(10);
    });
}
//# sourceMappingURL=test-async.js.map