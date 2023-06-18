import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { issuesReducer } from '@store/issue/issue.reducer';
import { IssueState } from '@store/issue/issue.state';
import { resettingMetaReducer } from '@store/meta-reducers';

export interface RootState {
    issues: IssueState;
}

/**
 * Collection of the app's reducers.
 */
export const reducers: ActionReducerMap<RootState> = {
    issues: issuesReducer,
};

export const metaReducers: MetaReducer[] = [resettingMetaReducer];
