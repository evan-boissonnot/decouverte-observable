import { of, from } from 'rxjs';
import { map, delay, mergeMap, mergeAll, switchAll, switchMap, concatMap } from 'rxjs/operators';
var data = of([
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
data.pipe(map(function (array) { return array.map(function (car) { return car.brand + " !!"; }); }) // map to map because first map is an array
).subscribe(function (item) { return console.log(item); });
var getData = function (param) {
    console.log('???', param);
    return of(param).
        pipe(delay(1000));
};
// here we get observable in subscribe, because of the get data that returns observable
from([1, 2, 3, 4, 5, 6]).pipe(map(function (param) { return getData(param); })).subscribe(function (item) { return console.log('map - getdata', item); });
from([1, 2, 3, 4, 5, 6]).pipe(map(function (param) { return getData(param); }), mergeAll()).subscribe(function (item) { return console.log('map mergeAll - getdata', item); });
from([1, 2, 3, 4, 5, 6]).pipe(mergeMap(function (param) { return getData(param); })).subscribe(function (item) { return console.log('map - mergedmap', item); });
from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(map(function (param) { return getData(param); }), switchAll()).subscribe(function (item) { return console.log('map - switchall', item); });
// unsubscribe and subscribe to the latest if new observable comes
from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(switchMap(function (param) { return getData(param); })).subscribe(function (item) { return console.log('map - switchall', item); });
var getDataRandom = function (param) {
    var delayTime = Math.floor(Math.random() * 10000) + 1;
    return of("retrieved data with params : " + param + " / delay : " + delayTime).pipe(delay(delayTime));
};
from([1, 2, 3, 4]).pipe(map(function (param) { return getDataRandom(param); })).subscribe(function (val) { return val.subscribe(function (data) { return console.log('map:', data); }); });
from([1, 2, 3, 4]).pipe(mergeMap(function (param) { return getDataRandom(param); })).subscribe(function (val) { return console.log('mergedmap:', val); });
from([1, 2, 3, 4]).pipe(concatMap(function (param) { return getDataRandom(param); })).subscribe(function (val) { return console.log('concatdmap:', val); });
//# sourceMappingURL=main.js.map