import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

import * as marked from 'marked';
import defaultText from './default.md';
import oneText from './one.md';
import twoText from './two.md';
import threeText from './three.md';

import { NextAssayPreApprovedStudyDetailsComponent } from '../../projects/next-assay-pre-approved-study-details/src/public_api';

// tslint:disable-next-line: max-line-length
import {StudyNaDisplayPipe} from '../../projects/next-assay-pre-approved-study-details/src/lib/pipes/study-na-display.pipe'; // pipes/study-crossover-display.pipe';
import { StudyCrossoverDisplayPipe } from '../../projects/next-assay-pre-approved-study-details/src/lib/pipes/study-crossover-display.pipe';


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

const data = {
  'protocol' : 1,
  'species' : 'mouse',
  'discreteAllowed' : true,
  'cassette' : true,
  'route' : 'i.v.',
  'ivDose' : 0.1,
  'poDose' : 'null',
  'numberPerArms' : 3,
  'crossover' : 'null',
  'strain' : 'C57BL/6',
  'gender' : 'Male',
  'food' : 'Fed',
  'matrix' : 'Blood',
  'sampleVolume' : '20',
  'ivDoseVolume' : '5',
  'poDoseVolume' : '',
  'ivFormulation' : 'Solution',
  'poFormulation' : '',
  'ivVehicle' : 'NMP:4%BSA in PBS (10:90)',
  'poVehicle' : '',
  'ivTimePoints' : '0.083,0.25,0.5,1,3,7,24',
  'poTimePoints' : '',
  'animalModel' : 'Puncture of the tail vein',
  'studyModel' : 'Serial sampling',
  'anticoagulant' : 'EDTA',
  'avgBodyWeight' : '0.05',
  'overage' : '0.2',
  'sf' : 'per compound from SMR'
};

storiesOf('Next-assay', module)
.addDecorator(
  moduleMetadata({
    declarations: [NextAssayPreApprovedStudyDetailsComponent, StudyNaDisplayPipe, StudyCrossoverDisplayPipe],
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
  props: {data},
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
  props: {data},
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
  props: {data},
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
  props: {data},
}))
);
