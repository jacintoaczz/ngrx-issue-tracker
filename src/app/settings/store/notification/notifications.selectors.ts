import { createFeatureSelector, createSelector } from '@ngrx/store';

import { settingsFeatureKey, NotificationState } from '@app/settings/store/notification/notifications.state';

/**
 * Main feature selector for the "Settings" feature.
 */
export const selectFeature = createFeatureSelector<NotificationState>(settingsFeatureKey);

/**
 * Selects the given notification priority
 */
export const selectNotificationPriority = createSelector(selectFeature, (settings) => settings.notificationPriority);
