const { Observable, range, of } = require('rxjs');
const { map, filter } = require('rxjs/operators');


map(x => x+1)( of(1,2,3)).subscribe(v => console.log(v));

// not run like before, because here, map x is an array, not each number
of([1, 2, 3]).pipe(
    map(x => x + 1)
).subscribe(v => console.log(v));


of(1, 2, 3).pipe(
    map(x => x +1)
).subscribe(v => console.log(v));

range(1, 3).pipe(
    map(x => x + 1)
).subscribe(item => console.log(item));