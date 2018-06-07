import { Reducer, AnyAction, combineReducers } from 'redux';
import { AppState, LoadingEntity } from './state';
import { AppAction } from './actions';
import { DataType1, DataType2, DataType3 } from './data-type.model';

const dataType1Reducer: Reducer = (state: LoadingEntity<DataType1> = {isLoading: false}, action: AnyAction): LoadingEntity<DataType1> => {
    switch (action.type) {
        case AppAction.LOAD_DATA_TYPE_1:
            return {
                isLoading: true
            };
        case AppAction.LOAD_DATA_TYPE_1_SUCCESS:
            return {
                isLoading: false,
                value: action.payload
            };
        case AppAction.LOAD_DATE_TYPE_1_ERROR:
            return {
                isLoading: false,
                error: action.payload
            };
    }
    return state;
};

const dataType2Reducer: Reducer = (state: LoadingEntity<DataType2> = {isLoading: false}, action: AnyAction): LoadingEntity<DataType2> => {
    switch (action.type) {
        case AppAction.LOAD_DATA_TYPE_2:
            return {
                isLoading: true
            };
        case AppAction.LOAD_DATA_TYPE_2_SUCCESS:
            return {
                isLoading: false,
                value: action.payload
            };
        case AppAction.LOAD_DATE_TYPE_2_ERROR:
            return {
                isLoading: false,
                error: action.payload
            };
    }
    return state;
};

const dataType3Reducer: Reducer = (state: LoadingEntity<DataType3> = {isLoading: false}, action: AnyAction): LoadingEntity<DataType3> => {
    switch (action.type) {
        case AppAction.LOAD_DATA_TYPE_3:
            return {
                isLoading: true
            };
        case AppAction.LOAD_DATA_TYPE_3_SUCCESS:
            return {
                isLoading: false,
                value: action.payload
            };
        case AppAction.LOAD_DATE_TYPE_3_ERROR:
            return {
                isLoading: false,
                error: action.payload
            };
    }
    return state;
};

export const rootReducer: Reducer = combineReducers({
    dataType1: dataType1Reducer,
    dataType2: dataType2Reducer,
    dataType3: dataType3Reducer
});
