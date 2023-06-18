import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { reset } from '@store/meta-reducers';

/**
 * Main component of the application.
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    /**
     * DI Constructor
     * @param _store
     */
    constructor(private _store: Store) {}

    /**
     * Dispatches the action that resets the store's state.
     */
    reset(): void {
        this._store.dispatch(reset());
    }
}
