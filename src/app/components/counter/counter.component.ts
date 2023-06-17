import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { increment, multiply, State } from '@store/counter.store';

/**
 * Counter component
 */
@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
    count$: Observable<number>;

    /**
     * DI Constructor
     * @param _store
     */
    constructor(private _store: Store<State>) {
        this.count$ = this._store.select((state) => state.count);
    }

    /**
     * Dispatches the action to increase the counter.
     */
    increment(): void {
        this._store.dispatch(increment());
    }

    /**
     * Dispatches the action to multiply the counter
     * by a given factor.
     * @param factor
     */
    multiply(factor: string): void {
        this._store.dispatch(multiply({ factor: parseFloat(factor) }));
    }
}
