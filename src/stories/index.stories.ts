import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import * as marked from 'marked';
// import defaultText from './default.md';

// import { NextAssayPreApprovedStudyDetailsComponent } from 'projects/next-assay-pre-approved-study-details-lib/src/public_api';

const styles = `
  <style>
  </style>
`;

storiesOf('Next-assay', module)
.addDecorator(
  moduleMetadata({
    // declarations: [NextAssayPreApprovedStudyDetailsComponent],
  })
)
.add('Install',
  withNotes({text: marked()}) // defaultText
(() => ({
  template: `
  ${styles}
  <next-assay-pre-approved-study-details
    [data]="data"
  ></next-assay-pre-approved-study-details>
  `,
  props: {},
}))
);

