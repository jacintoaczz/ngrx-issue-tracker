import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';

import { initialState, IssueState } from './issue.state';
import * as IssueActions from './issue.actions';

/**
 * Reducer in charge of processing the IssueState.
 */
export const issuesReducer = createReducer(
    initialState,
    on(IssueActions.submit, (state: IssueState, { issue }) =>
        produce(state, (draft) => {
            draft.entities[issue.id] = {
                ...issue,
                resolved: false,
            };
        })
    )
);
