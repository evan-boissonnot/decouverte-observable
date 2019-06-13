import { fromEvent, Observable } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

export function sniffCountCLick(): Observable<number> {
    return fromEvent(document, 'click')
    .pipe(
        throttleTime(2000), // raise observable next each 2 seconds
        scan(count => count + 1, 10) // seed 10: beginning of counting²
        );
    }
    