import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';
export function sniffCountCLick() {
    return fromEvent(document, 'click')
        .pipe(throttleTime(2000), // raise observable next each 2 seconds
    scan(function (count) { return count + 1; }, 10) // seed 10: beginning of counting²
    );
}
//# sourceMappingURL=fromEvent-test.js.map