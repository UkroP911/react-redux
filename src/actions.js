export const ADD_TOWNS = 'ADD_TOWNS';
export const REMOVE_TOWNS = 'REMOVE_TOWNS';

export function AddTown(text) {
    return {type: ADD_TOWNS, text}
}
export function RemoveTown(text) {
    return {type: REMOVE_TOWNS, text}
}

