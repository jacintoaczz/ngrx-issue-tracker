import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { RootState } from '@app/store';
import { notificationsReducer } from '@app/settings/store/notification/notifications.reducer';
import { NotificationState } from '@app/settings/store/notification/notifications.state';
import { profileReducer } from './profile/profile.reducer';
import { ProfileState } from './profile/profile.state';

export interface SettingsState {
    notification: NotificationState;
    profile: ProfileState;
}
export const settingsReducers: ActionReducerMap<SettingsState> = {
    notification: notificationsReducer,
    profile: profileReducer,
};

export const settingsFeatureKey = 'settings';

export interface SettingsRootState extends RootState {
    [settingsFeatureKey]: SettingsState;
}

/**
 * Main selector for the 'Settings' state slice
 */
export const selectFeature = createFeatureSelector<SettingsState>(settingsFeatureKey);
