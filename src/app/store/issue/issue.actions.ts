import { createAction, props } from '@ngrx/store';

import { Issue } from '@models/issues/issue.interface';
import { generateRandomId } from '@shared/utils/global.utils';

/**
 * Fires the action to submit a new issue.
 */
export const submit = createAction('[Issue] Submit', (issue: Issue) => {
    return {
        issue: {
            ...issue,
            id: generateRandomId(),
        },
    };
});

/**
 * Fires the lookup for an Issue record based on a search text.
 */
export const search = createAction('[Issue] Search', props<{ text: string }>());

/**
 * Fires the action to change the resolution state of an issue.
 */
export const resolve = createAction('[Issue] Resolve', props<{ issue: Issue }>());
