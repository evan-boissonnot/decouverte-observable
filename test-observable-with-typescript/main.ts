import { Observable } from 'rxjs';
import { cube } from './math';
import { sniffCountCLick } from './fromEvent-test';
import { launchTestAsyncTimeout } from './test-async';
import { getFilteringList } from './filter-on-list';

const obs = new Observable(observer => {
    observer.next(1);
    observer.complete();
});

obs.subscribe(item => console.log(item));

const val = cube(5);
console.log('O : ' + val);

sniffCountCLick().subscribe(count => console.log('sniffCountCLick', count));

launchTestAsyncTimeout().subscribe(item => console.log('launchTestAsyncTimeout', item));

getFilteringList().subscribe(items => console.log('getFilteringList', items));
