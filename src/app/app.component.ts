import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { reset } from '@store/meta-reducers';
import { RootState } from '@app/store';
import * as fromIssues from '@store/issue/issue.selector';

/**
 * Main component of the application.
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    stats$: Observable<fromIssues.IssueStats>;

    /**
     * DI Constructor
     * @param _store
     */
    constructor(private _store: Store<RootState>) {
        this.stats$ = this._store.select(fromIssues.selectStats);
    }

    /**
     * Dispatches the action that resets the store's state.
     */
    reset(): void {
        this._store.dispatch(reset());
    }
}
