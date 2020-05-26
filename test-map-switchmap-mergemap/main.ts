import { of, from, BehaviorSubject } from 'rxjs'; 
import { map, delay, mergeMap, mergeAll, switchAll, switchMap, concatMap } from 'rxjs/operators';

const data = of([
    {
      brand: 'porsche',
      model: '911'
    },
    {
      brand: 'porsche',
      model: 'macan'
    },
    {
      brand: 'ferarri',
      model: '458'
    },
    {
      brand: 'lamborghini',
      model: 'urus'
    }
  ]);

data.pipe(
    map(array => array.map(car => `${car.brand} !!`)) // map to map because first map is an array
).subscribe(item => console.log(item));


const getData = (param) => {
  console.log('???', param);
  return of(param).
          pipe(delay(1000));
};

// here we get observable in subscribe, because of the get data that returns observable
from([1,2,3,4,5,6]).pipe(
  map(param => getData(param))
).subscribe(item => console.log('map - getdata', item));

from([1,2,3,4,5,6]).pipe(
  map(param => getData(param)),
  mergeAll()
).subscribe(item => console.log('map mergeAll - getdata', item));

from([1,2,3,4,5,6]).pipe(
  mergeMap(param => getData(param))
).subscribe(item => console.log('map - mergedmap', item));


from([1,2,3,4,5,6, 7, 8]).pipe(
  map(param => getData(param)),
  switchAll()
).subscribe(item => console.log('map - switchall', item));

// unsubscribe and subscribe to the latest if new observable comes
from([1,2,3,4,5,6, 7, 8]).pipe(
  switchMap(param => getData(param))
).subscribe(item => console.log('map - switchall', item));


const getDataRandom = (param) => {
  const delayTime = Math.floor(Math.random() * 10000) + 1;
  return of(`retrieved data with params : ${param} / delay : ${delayTime}`).pipe(delay(delayTime));
}

from([1, 2, 3, 4]).pipe(
  map(param => getDataRandom(param))
).subscribe(val => val.subscribe(data => console.log('map:', data))); // pas d'ordre attendu

from([1, 2, 3, 4]).pipe(
  mergeMap(param => getDataRandom(param))
).subscribe(val => console.log('mergedmap:', val)); // identique au regular

from([1, 2, 3, 4]).pipe(
  concatMap(param => getDataRandom(param))
).subscribe(val => console.log('concatdmap:', val)); // 
