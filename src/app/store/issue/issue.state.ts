import { Issues } from '@models/issues/issues.interface';

export interface Filter {
    text: string;
}

/**
 * State model for the Issue features
 */
export interface IssueState {
    entities: Issues;
    selected: string[];
    filter: Filter;
    isLoaded: boolean;
}

export const initialState: IssueState = {
    entities: {},
    selected: [],
    filter: { text: '' },
    isLoaded: false,
};
