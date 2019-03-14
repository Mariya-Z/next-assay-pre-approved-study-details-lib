import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// tslint:disable-next-line:max-line-length
import {NextAssayPreApprovedStudyDetailsComponent} from './next-assay-pre-approved-study-details/next-assay-pre-approved-study-details.component';
import {StudyCrossoverDisplayPipe} from './pipes/study-crossover-display.pipe';
import {StudyNaDisplayPipe} from './pipes/study-na-display.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [NextAssayPreApprovedStudyDetailsComponent],
  declarations: [NextAssayPreApprovedStudyDetailsComponent, StudyCrossoverDisplayPipe, StudyNaDisplayPipe],
  entryComponents: [NextAssayPreApprovedStudyDetailsComponent],
})
export class NextAssayPreApprovedStudyDetailsLibModule {}
