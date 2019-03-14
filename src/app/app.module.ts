import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NextAssayPreApprovedStudyDetailsModule} from 'next-assay-pre-approved-study-details';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NextAssayPreApprovedStudyDetailsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
