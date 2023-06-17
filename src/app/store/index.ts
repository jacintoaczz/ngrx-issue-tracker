import { ActionReducerMap } from '@ngrx/store';

import { issuesReducer } from '@store/issue/issue.reducer';
import { IssueState } from '@store/issue/issue.state';

export interface RootState {
    issues: IssueState;
}

/**
 * Collection of the app's reducers.
 */
export const reducers: ActionReducerMap<RootState> = {
    issues: issuesReducer,
};
