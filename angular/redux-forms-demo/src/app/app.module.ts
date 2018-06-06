import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxFormModule, composeReducers, defaultFormReducer, provideReduxForms } from '@angular-redux/form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    NgReduxFormModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public store: NgRedux<any>, devTools: DevToolsExtension) {
    store.configureStore(
      composeReducers(defaultFormReducer()),
      {});

    provideReduxForms(store);
  }
}
