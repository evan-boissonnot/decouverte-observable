import { Observable } from 'rxjs';
import { cube } from './math';

const obs = new Observable(observer => {
    observer.next(1);
    observer.complete();
});

obs.subscribe(item => console.log(item));

const val = cube(5);
console.log('O : ' + val);



