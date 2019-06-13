import { Observable } from 'rxjs';
import { cube } from './math';
import { sniffCountCLick } from './fromEvent-test';

const obs = new Observable(observer => {
    observer.next(1);
    observer.complete();
});

obs.subscribe(item => console.log(item));

const val = cube(5);
console.log('O : ' + val);

sniffCountCLick().subscribe(count => console.log(count));


