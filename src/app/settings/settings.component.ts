import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';

import { Priority } from '@models/issues/priority.interface';
import * as fromNotifications from '@app/settings/store/notification/notifications.selectors';
import * as NotificationsActions from '@app/settings/store/notification/notifications.actions';
import { SettingsRootState } from '@app/settings/store/notification/notifications.state';

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
    notificationsForm = this._fb.group({
        priority: [],
    });

    /**
     * DI Constructor
     * @param _fb
     * @param _store
     */
    constructor(private _fb: FormBuilder, private _store: Store<SettingsRootState>) {
        this.notificationPriority$ = this._store.select(fromNotifications.selectNotificationPriority);
    }

    /**
     * Fires the action that changes the notification priority.
     * @param notificationPriority
     */
    changeNotificationPriority(notificationPriority: string): void {
        const priority = notificationPriority as Priority;

        this._store.dispatch(NotificationsActions.changeNotificationPriority({ notificationPriority: priority }));
    }
}
