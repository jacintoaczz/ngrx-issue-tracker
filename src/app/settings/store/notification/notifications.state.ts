import { Priority } from '@models/issues/priority.interface';
import { RootState } from '@app/store';

export interface SettingsState {
    notificationPriority: Priority;
}

export const initialState: SettingsState = {
    notificationPriority: 'low',
};

export const settingsFeatureKey = 'settings';

export interface SettingsRootState extends RootState {
    [settingsFeatureKey]: SettingsState;
}
