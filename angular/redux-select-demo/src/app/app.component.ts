import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingEntity } from './state';
import { DataType1, DataType2, DataType3 } from './data-type.model';
import { DataTypeService } from './data-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @select(['dataType1']) data1$: Observable<LoadingEntity<DataType1>>;
  @select(['dataType2']) data2$: Observable<LoadingEntity<DataType2>>;
  @select(['dataType3']) data3$: Observable<LoadingEntity<DataType3>>;

  dataAll$: Observable<boolean> = combineLatest(
    this.data1$,
    this.data2$,
    this.data3$,
    (...args: LoadingEntity<any>[]) => args.find(value => value.isLoading) !== void 0
  );

  constructor (private dataTypeService: DataTypeService) {}

  ngOnInit(): void {
    this.dataTypeService.loadDataType1();
    this.dataTypeService.loadDataType2();
    this.dataTypeService.loadDataType3();
  }
}
