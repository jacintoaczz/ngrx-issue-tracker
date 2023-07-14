import { createAction, props } from '@ngrx/store';
import { Priority } from '@models/issues/priority.interface';

/**
 * Fires an action to change the notification priority in the system.
 */
export const changeNotificationPriority = createAction(
    '[Settings] Change Notification Priority',
    props<{ notificationPriority: Priority }>()
);
