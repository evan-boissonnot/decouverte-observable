import { of } from 'rxjs';
import { map } from 'rxjs/operators';
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
data.pipe(map(function (array) { return array.map(function (car) { return "" + car.brand; }); })).subscribe(function (item) { return console.log(item); });
//# sourceMappingURL=map.js.map