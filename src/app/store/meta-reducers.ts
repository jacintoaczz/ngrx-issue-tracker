import { ActionReducer, createAction } from '@ngrx/store';

export const reset = createAction('Reset');

/**
 * Meta-reducer that resets the store's state.
 * Useful after the user logs out, as an example.
 * @param reducer
 */
export const resettingMetaReducer = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
        if (action.type === reset.type) {
            return reducer(undefined, action);
        }
        return reducer(state, action);
    };
};
