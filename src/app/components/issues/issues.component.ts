import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { RootState } from '@app/store';

/**
 * Main component for the Issues feature.
 */
@Component({
    selector: 'issues',
    templateUrl: './issues.component.html',
    styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent {
    /**
     * DI Constructor
     * @param _store
     */
    constructor(private _store: Store<RootState>) {}
}
