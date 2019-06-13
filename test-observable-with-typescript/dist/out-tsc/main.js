import { Observable } from 'rxjs';
var obs = new Observable(function (observer) {
    observer.next(1);
    observer.complete();
});
obs.subscribe(function (item) { return console.log(item); });
//# sourceMappingURL=main.js.map