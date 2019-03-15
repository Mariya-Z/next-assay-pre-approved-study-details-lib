import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {PasEntry} from '../types/backend-types';
import {STUDY_WIZARD_STRING_NA_VALUE} from '../study-customization/mock-data';

@Component({
  selector: 'next-assay-pre-approved-study-details',
  templateUrl: './next-assay-pre-approved-study-details.component.html',
  styleUrls: ['./next-assay-pre-approved-study-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextAssayPreApprovedStudyDetailsComponent {
  @Input() public data: PasEntry = null;
  @Input() public isFullVersion = true;

  public stringNAValue = STUDY_WIZARD_STRING_NA_VALUE;
}
