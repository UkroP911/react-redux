import { combineReducers } from 'redux';
import data from './towns';

const InitialState = data;


export default function townsstate(state = InitialState) {
    return state
}

