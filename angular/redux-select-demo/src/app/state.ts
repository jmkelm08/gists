import { DataType1, DataType2, DataType3 } from './data-type.model';

export interface LoadingEntity<T> {
    isLoading: boolean;
    value?: T;
    error?: string;
}

export class AppState {
    dataType1?: LoadingEntity<DataType1>;
    dataType2?: LoadingEntity<DataType2>;
    dataType3?: LoadingEntity<DataType3>;
}
