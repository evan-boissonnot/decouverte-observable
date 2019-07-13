import { Observable, of, from } from 'rxjs';
import { filter } from 'rxjs/operators';

let array = [1, 2, 3, 4, 5, 6];

export function getFilteringList(): Observable<number> {
    return from(array).pipe(filter(num => num % 2 === 0));
}