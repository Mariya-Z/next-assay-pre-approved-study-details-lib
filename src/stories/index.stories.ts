import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import * as marked from 'marked';
import defaultText from './default.md';
import oneText from './one.md';
import twoText from './two.md';
import threeText from './three.md';

import { NextAssayPreApprovedStudyDetailsComponent } from '../../projects/next-assay-pre-approved-study-details-lib/src/public_api';

const styles = `
  <style>
  .m \{
    width: 1400px;
  \}
  .s \{
    width: 1050px;
  \}
  .xs \{
    width: 700px;
  \}
  </style>
`;

storiesOf('Next-assay', module)
.addDecorator(
  moduleMetadata({
    declarations: [NextAssayPreApprovedStudyDetailsComponent],
  })
)
.add('Install',
  withNotes({text: marked(defaultText)})
(() => ({
  template: `
  ${styles}
  <next-assay-pre-approved-study-details
    [data]="data"
  ></next-assay-pre-approved-study-details>
  `,
  props: {},
}))
)
.add('3 columns',
  withNotes({text: marked(threeText)})
(() => ({
  template: `
  ${styles}
  <div class="m">
    <next-assay-pre-approved-study-details
      [data]="data"
    ></next-assay-pre-approved-study-details>
  </div>
  `,
  props: {},
}))
)
.add('2 columns',
  withNotes({text: marked(twoText)})
(() => ({
  template: `
  ${styles}
  <div class="s">
    <next-assay-pre-approved-study-details
      [data]="data"
    ></next-assay-pre-approved-study-details>
  </div>
  `,
  props: {},
}))
)
.add('1 column',
  withNotes({text: marked(oneText)})
(() => ({
  template: `
  ${styles}
  <div class="xs">
    <next-assay-pre-approved-study-details
      [data]="data"
    ></next-assay-pre-approved-study-details>
  </div>
  `,
  props: {},
}))
);
