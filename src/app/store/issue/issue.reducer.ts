import { createReducer } from '@ngrx/store';

import { initialState } from './issue.state';

export const issuesReducer = createReducer(initialState);
