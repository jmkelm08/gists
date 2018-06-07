import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

import { DataType1, DataType2, DataType3 } from './data-type.model';
import { AppAction } from './actions';

@Injectable()
export class ActionService {
    @dispatch() public onLoadDataType1 = () => ({
        type: AppAction.LOAD_DATA_TYPE_1
    })

    @dispatch() public onLoadDataType1Success = (payload: DataType1) => ({
        type: AppAction.LOAD_DATA_TYPE_1_SUCCESS,
        payload: payload
    })

    @dispatch() public onLoadDataType1Error = (error: string) => ({
        type: AppAction.LOAD_DATE_TYPE_1_ERROR,
        payload: error
    })

    @dispatch() public onLoadDataType2 = () => ({
        type: AppAction.LOAD_DATA_TYPE_2
    })

    @dispatch() public onLoadDataType2Success = (payload: DataType2) => ({
        type: AppAction.LOAD_DATA_TYPE_2_SUCCESS,
        payload: payload
    })

    @dispatch() public onLoadDataType2Error = (error: string) => ({
        type: AppAction.LOAD_DATE_TYPE_2_ERROR,
        payload: error
    })

    @dispatch() public onLoadDataType3 = () => ({
        type: AppAction.LOAD_DATA_TYPE_3
    })

    @dispatch() public onLoadDataType3Success = (payload: DataType3) => ({
        type: AppAction.LOAD_DATA_TYPE_3_SUCCESS,
        payload: payload
    })

    @dispatch() public onLoadDataType3Error = (error: string) => ({
        type: AppAction.LOAD_DATE_TYPE_3_ERROR,
        payload: error
    })
}
