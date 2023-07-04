import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Issue } from '@models/issues/issue.interface';
import { RootState } from '@app/store';
import * as fromIssues from '@store/issue/issue.selector';
import * as IssueActions from '@store/issue/issue.actions';

/**
 * Component that renders the list of issues
 */
@Component({
    selector: 'issues-list',
    templateUrl: './issues-list.component.html',
    styleUrls: ['./issues-list.component.scss'],
})
export class IssuesListComponent {
    issues$: Observable<Issue[]>;

    /**
     * DI Constructor
     * @param _store
     */
    constructor(private _store: Store<RootState>) {
        this.issues$ = this._store.pipe(fromIssues.selectAllLoaded());
    }

    /**
     * Search input on input event.
     * @param text
     */
    search(text: string): void {
        this._store.dispatch(IssueActions.search({ text }));
    }
}
