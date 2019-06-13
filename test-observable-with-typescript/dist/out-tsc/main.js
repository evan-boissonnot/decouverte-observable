import { Observable } from 'rxjs';
import { cube } from './math';
var obs = new Observable(function (observer) {
    observer.next(1);
    observer.complete();
});
obs.subscribe(function (item) { return console.log(item); });
var val = cube(5);
console.log('O : ' + val);
//# sourceMappingURL=main.js.map