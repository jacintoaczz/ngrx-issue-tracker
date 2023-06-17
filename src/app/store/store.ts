import { ActionReducerMap, createAction, createReducer, on, props } from '@ngrx/store';

/**
 * Represents the form of the global
 * state.
 */
export interface State {
    count: number;
}

// Store actions
export const increment = createAction('[Counter] Increment');
export const multiply = createAction('[Counter] Multiply', props<{ factor: number }>());

// Store reducers
export const countReducer = createReducer(
    0,
    on(increment, (count) => {
        return count + 1;
    }),
    on(multiply, (count, { factor }) => {
        return count * factor;
    })
);

// Reducers
export const reducers: ActionReducerMap<State> = {
    count: countReducer,
};
