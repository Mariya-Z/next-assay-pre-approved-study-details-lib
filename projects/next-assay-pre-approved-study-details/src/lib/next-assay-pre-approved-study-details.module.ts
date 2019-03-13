import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { NextAssayPreApprovedStudyDetailsComponent } from './next-assay-pre-approved-study-details/next-assay-pre-approved-study-details.component';
import {PipesModule} from './pipes/pipes.module';

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, PipesModule],
  exports: [NextAssayPreApprovedStudyDetailsComponent],
  declarations: [NextAssayPreApprovedStudyDetailsComponent],
  entryComponents: [NextAssayPreApprovedStudyDetailsComponent],
})
export class NextAssayPreApprovedStudyDetailsLibModule { }
