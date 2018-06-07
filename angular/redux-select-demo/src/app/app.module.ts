import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { rootReducer } from './reducers';
import { ActionService } from './action.service';
import { DataTypeService } from './data-type.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    ReactiveFormsModule
  ],
  providers: [
    ActionService,
    DataTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public store: NgRedux<any>, devTools: DevToolsExtension) {
    store.configureStore(
      rootReducer,
      {});
  }
}
