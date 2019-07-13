import { Observable } from 'rxjs';
import { cube } from './math';
import { sniffCountCLick } from './fromEvent-test';
import { launchTestAsyncTimeout } from './test-async';
var obs = new Observable(function (observer) {
    observer.next(1);
    observer.complete();
});
obs.subscribe(function (item) { return console.log(item); });
var val = cube(5);
console.log('O : ' + val);
sniffCountCLick().subscribe(function (count) { return console.log(count); });
launchTestAsyncTimeout().subscribe(function (item) { return console.log(item); });
//# sourceMappingURL=main.js.map