import { createReducer } from '@ngrx/store';

import { initialState } from './profile.state';

/**
 * Reducer for the 'Profile' state feature slice.
 */
export const profileReducer = createReducer(initialState);
