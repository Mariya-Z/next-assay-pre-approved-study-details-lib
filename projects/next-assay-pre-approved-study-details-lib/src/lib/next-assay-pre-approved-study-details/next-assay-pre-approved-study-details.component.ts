import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'next-assay-pre-approved-study-details',
  templateUrl: './next-assay-pre-approved-study-details.component.html',
  styleUrls: ['./next-assay-pre-approved-study-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextAssayPreApprovedStudyDetailsComponent {
  @Input() public data = null; // type PasEntry?
  @Input() public isFullVersion = true;

  public stringNAValue;

}
