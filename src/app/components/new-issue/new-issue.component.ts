import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RootState } from '@app/store';
import { generateRandomId } from '@shared/utils/global.utils';
import * as IssueActions from '@store/issue/issue.actions';

/**
 * Component to create new issues
 */
@Component({
    selector: 'new-issue',
    templateUrl: './new-issue.component.html',
    styleUrls: ['./new-issue.component.scss'],
})
export class NewIssueComponent {
    form: FormGroup;

    /**
     * DI Constructor
     * @param _store
     * @param fb
     */
    constructor(private _store: Store<RootState>, private fb: FormBuilder) {
        this.form = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            priority: ['low', Validators.required],
        });
    }

    /**
     * Dispatches the data of the new issue
     * to the store.
     */
    submit(): void {
        const issue = { ...this.form.value };
        this._store.dispatch(IssueActions.submit(issue));
    }
}
