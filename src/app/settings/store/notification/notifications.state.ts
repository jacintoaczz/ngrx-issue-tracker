import { Priority } from '@models/issues/priority.interface';
import { RootState } from '@app/store';

export interface NotificationState {
    notificationPriority: Priority;
}

export const initialState: NotificationState = {
    notificationPriority: 'low',
};

export const settingsFeatureKey = 'settings';

export interface SettingsRootState extends RootState {
    [settingsFeatureKey]: NotificationState;
}
