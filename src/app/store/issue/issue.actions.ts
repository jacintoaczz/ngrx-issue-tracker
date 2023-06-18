import { createAction, props } from '@ngrx/store';

import { Issue } from '@models/issues/issue.interface';
import { generateRandomId } from '@shared/utils/global.utils';

export const submit = createAction('[Issue] Submit', (issue: Issue) => {
    return {
        issue: {
            ...issue,
            id: generateRandomId(),
        },
    };
});
