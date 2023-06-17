import { createReducer, on } from '@ngrx/store';

import { initialState, IssueState } from './issue.state';
import * as IssueActions from './issue.actions';

export const issuesReducer = createReducer(
    initialState,
    on(IssueActions.submit, (state: IssueState, { issue }) => ({
        ...state,
        entities: {
            ...state.entities,
            [issue.id]: {
                ...issue,
                resolved: false,
            },
        },
    }))
);
