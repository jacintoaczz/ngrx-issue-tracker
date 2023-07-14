/**
 * Represents the state for the 'Profile' state feature slice.
 */
export interface ProfileState {
    description: string;
}

export const initialState: ProfileState = {
    description: '',
};
