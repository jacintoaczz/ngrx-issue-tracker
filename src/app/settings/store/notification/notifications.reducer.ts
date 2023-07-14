import { createReducer, on } from '@ngrx/store';

import { initialState } from '@app/settings/store/notification/notifications.state';
import * as SettingsActions from './notifications.actions';

export const notificationsReducer = createReducer(
    initialState,
    on(SettingsActions.changeNotificationPriority, (state, { notificationPriority }) => ({
        ...state,
        notificationPriority,
    }))
);
