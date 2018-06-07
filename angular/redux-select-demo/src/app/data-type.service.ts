import { ActionService } from './action.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, delay, tap } from 'rxjs/operators';
import { DataType1, DataType2, DataType3 } from './data-type.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DataTypeService {
    constructor(private actionService: ActionService) {}

    public loadDataType1() {
        this.actionService.onLoadDataType1();
        return of(new DataType1()).pipe(
            delay(10000),
            catchError((err: any) => {
                this.actionService.onLoadDataType1Error('Failed to load dataType1');
                throw Error('Failed to load dataType1');
            })
        ).subscribe((payload: DataType1) => {
            this.actionService.onLoadDataType1Success(payload);
        });
    }

    public loadDataType2() {
        this.actionService.onLoadDataType2();
        const d: DataType2 = new DataType2();
        return of(d).pipe(
            delay(15000),
            catchError((err: any) => {
                this.actionService.onLoadDataType2Error('Failed to load dataType2');
                throw Error('Failed to load dataType2');
            })
        ).subscribe((payload: DataType2) => {
            this.actionService.onLoadDataType2Success(payload);
        });
    }

    public loadDataType3() {
        this.actionService.onLoadDataType3();
        const d: DataType3 = new DataType3();
        return of(d).pipe(
            delay(20000),
            catchError((err: any) => {
                this.actionService.onLoadDataType3Error('Failed to load dataType3');
                throw Error('Failed to load dataType3');
            })
        ).subscribe((payload: DataType3) => {
            this.actionService.onLoadDataType3Success(payload);
        });
    }
}
