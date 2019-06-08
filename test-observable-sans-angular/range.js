const { Observable, range, of } = require('rxjs');
const { map, filter } = require('rxjs/operators');


 
range(1, 200).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));

range(1, 100).pipe(
    filter(x => {
        console.log('eee', x);
    })
).subscribe(x => console.log(x));


const array = [1, 2, 3, 5, 6];

of(array).
pipe(
    filter(item => {
        console.log(item);
        return item.filter(i => i == 2);
    })
).
subscribe(item => console.log('i', item));

