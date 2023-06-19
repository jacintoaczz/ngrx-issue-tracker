import { createSelector } from '@ngrx/store';

import { RootState } from '@app/store';
import { Issue } from '@models/issues/issue.interface';
import { Filter } from '@store/issue/issue.state';
import { Issues } from '@models/issues/issues.interface';

export interface IssueStats {
    total: number;
    resolved: number;
}

/**
 * Selects the issues' state
 * @param state
 */
export const selectFeature = (state: RootState) => state.issues;

/**
 * Selects all the entities in the state.
 */
export const selectEntities = createSelector(selectFeature, ({ entities }) => entities);

/**
 * Selects the values of all the entities in the state.
 */
export const selectAll = createSelector(selectEntities, (entities) => Object.values(entities));

/**
 * Selects the current state of the filter.
 */
export const selectFilter = createSelector(selectFeature, ({ filter }) => filter);

/**
 * Selects a given Issue based on the input filter, if there's any.
 */
export const selectFiltered = createSelector(selectAll, selectFilter, (issues: Issue[], { text }: Filter) => {
    if (text) {
        const lowercased = text.toLowerCase();
        return issues.filter(
            ({ title, description }) =>
                title.toLowerCase().includes(lowercased) || description.toLowerCase().includes(lowercased)
        );
    }

    return issues;
});

/**
 * Returns stats related to our current issues.
 */
export const selectStats = createSelector(selectAll, (issues): IssueStats => {
    const resolved = issues.filter((issue) => issue.resolved);
    return {
        total: issues.length,
        resolved: resolved.length,
    };
});

/**
 * Selects on entity by 'id'
 */
export const selectOne = (id: string) => createSelector(selectEntities, (entities: Issues) => entities[id]);
