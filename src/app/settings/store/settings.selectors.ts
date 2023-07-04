import { createFeatureSelector, createSelector } from '@ngrx/store';

import { settingsFeatureKey, SettingsRootState, SettingsState } from '@app/settings/store/settings.state';

/**
 * Main feature selector for the "Settings" feature.
 */
export const selectFeature = createFeatureSelector<SettingsRootState, SettingsState>(settingsFeatureKey);

/**
 * Selects the given notification priority
 */
export const selectNotificationPriority = createSelector(selectFeature, (settings) => settings.notificationPriority);
