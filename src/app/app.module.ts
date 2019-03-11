import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NextAssayPreApprovedStudyDetailsLibModule } from 'next-assay-pre-approved-study-details-lib';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NextAssayPreApprovedStudyDetailsLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
