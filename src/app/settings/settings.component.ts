import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Priority } from '@models/issues/priority.interface';
import * as fromSettings from './store/settings.selectors';
import * as SettingsActions from './store/settings.actions';
import { SettingsRootState } from '@app/settings/store/settings.state';

/**
 * Settings feature main component
 */
@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
    notificationPriority$: Observable<Priority>;

    /**
     * DI Constructor
     * @param _store
     */
    constructor(private _store: Store<SettingsRootState>) {
        this.notificationPriority$ = this._store.select(fromSettings.selectNotificationPriority);
    }

    /**
     * Fires the action that changes the notification priority.
     * @param notificationPriority
     */
    changeNotificationPriority(notificationPriority: string): void {
        const priority = notificationPriority as Priority;

        this._store.dispatch(SettingsActions.changeNotificationPriority({ notificationPriority: priority }));
    }
}
