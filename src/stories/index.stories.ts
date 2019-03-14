import {storiesOf, moduleMetadata} from '@storybook/angular';

import defaultText from './default.md';
import oneText from './one.md';
import twoText from './two.md';
import threeText from './three.md';
import shortVersion from './shortVersion.md';

// tslint:disable-next-line:max-line-length
import {NextAssayPreApprovedStudyDetailsComponent} from '../../projects/next-assay-pre-approved-study-details/src/public_api';

// tslint:disable-next-line: max-line-length
import {StudyNaDisplayPipe} from '../../projects/next-assay-pre-approved-study-details/src/lib/pipes/study-na-display.pipe'; // pipes/study-crossover-display.pipe';
// tslint:disable-next-line:max-line-length
import {StudyCrossoverDisplayPipe} from '../../projects/next-assay-pre-approved-study-details/src/lib/pipes/study-crossover-display.pipe';

const data = {
  protocol: 1,
  species: 'mouse',
  discreteAllowed: true,
  cassette: true,
  route: 'i.v.',
  ivDose: 0.1,
  poDose: null,
  numberPerArms: 3,
  crossover: null,
  strain: 'C57BL/6',
  gender: 'Male',
  food: 'Fed',
  matrix: 'Blood',
  sampleVolume: '20',
  ivDoseVolume: '5',
  poDoseVolume: '',
  ivFormulation: 'Solution',
  poFormulation: '',
  ivVehicle: 'NMP:4%BSA in PBS (10:90)',
  poVehicle: '',
  ivTimePoints: '0.083,0.25,0.5,1,3,7,24',
  poTimePoints: '',
  animalModel: 'Puncture of the tail vein',
  studyModel: 'Serial sampling',
  anticoagulant: 'EDTA',
  avgBodyWeight: '0.05',
  overage: '0.2',
  sf: 'per compound from SMR',
};

const styles = `
  <style>
  .three-columns \{
    width: 1060px;
  \}
  .two-columns \{
    width: 704px;
  \}
  .one-column \{
    width: 300px;
  \}
  .container \{
    display: flex;
    justify-content: center;
  \}
  </style>
`;

storiesOf('Next-assay-pre-approved-study-details', module)
  .addDecorator(
    moduleMetadata({
      declarations: [NextAssayPreApprovedStudyDetailsComponent, StudyNaDisplayPipe, StudyCrossoverDisplayPipe],
    }),
  )
  .add(
    'Install',
    (() => ({
      template: `
      ${styles}
      <next-assay-pre-approved-study-details
        [data]="data"
      ></next-assay-pre-approved-study-details>
      `,
      props: {data},
    })),
    {notes: defaultText},
  )
  .add(
    'With 3 columns',
    (() => ({
      template: `
      ${styles}
      <div class="container">
        <div class="three-columns container">
          <next-assay-pre-approved-study-details
            [data]="data"
          ></next-assay-pre-approved-study-details>
        </div>
      </div>
      `,
      props: {data},
    })),
    {notes: threeText},
  )
  .add(
    'With 2 columns',
    (() => ({
      template: `
      ${styles}
      <div class="container">
        <div class="two-columns">
          <next-assay-pre-approved-study-details
            [data]="data"
          ></next-assay-pre-approved-study-details>
        </div>
      </div>
      `,
      props: {data},
    })),
    {notes: twoText},
  )
  .add(
    'With 1 column',
    (() => ({
      template: `
      ${styles}
      <div class="container">
        <div class="one-column">
          <next-assay-pre-approved-study-details
            [data]="data"
          ></next-assay-pre-approved-study-details>
        </div>
      </div>
      `,
      props: {data},
    })),
    {notes: oneText},
  )
  .add(
    'Short version',
    (() => ({
      template: `
      ${styles}
      <div class="container">
        <div class="two-columns">
          <next-assay-pre-approved-study-details
            [data]="data"
            [isFullVersion]=false
          ></next-assay-pre-approved-study-details>
        </div>
      </div>
  `,
      props: {data},
    })),
    {notes: shortVersion},
  );
