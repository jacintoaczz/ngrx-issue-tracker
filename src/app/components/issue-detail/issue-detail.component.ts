import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { RootState } from '@app/store';
import { Issue } from '@models/issues/issue.interface';
import * as fromIssues from '@store/issue/issue.selector';

/**
 * Component to show the details of an issue
 */
@Component({
    selector: 'issue-detail',
    templateUrl: './issue-detail.component.html',
    styleUrls: ['./issue-detail.component.scss'],
})
export class IssueDetailComponent {
    issue$: Observable<Issue>;

    /**
     * DI Constructor
     * @param _route
     * @param _store
     */
    constructor(private _route: ActivatedRoute, private _store: Store<RootState>) {
        this.issue$ = this._route.params.pipe(
            switchMap((params) => this._store.select(fromIssues.selectOne(params['id'])))
        );
    }
}
