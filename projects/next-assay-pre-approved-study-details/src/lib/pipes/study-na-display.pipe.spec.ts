import {async, TestBed} from '@angular/core/testing';
import {StudyNaDisplayPipe} from './study-na-display.pipe';
import {STUDY_WIZARD_NUMBER_NA_VALUE, STUDY_WIZARD_STRING_NA_VALUE} from '../study-customization/mock-data';

describe('Pipe: NA display', () => {
  let studyNaDisplay: StudyNaDisplayPipe;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      providers: [StudyNaDisplayPipe],
    })));

  beforeEach(() => {
    studyNaDisplay = TestBed.get(StudyNaDisplayPipe);
  });

  it('pipe should transform value', () => {
    expect(studyNaDisplay.transform(-1)).toEqual(STUDY_WIZARD_STRING_NA_VALUE);
    expect(studyNaDisplay.transform('-1')).toEqual(STUDY_WIZARD_STRING_NA_VALUE);
    expect(studyNaDisplay.transform(STUDY_WIZARD_NUMBER_NA_VALUE)).toEqual(STUDY_WIZARD_STRING_NA_VALUE);
  });

  it('pipe should not change these values', () => {
      expect(studyNaDisplay.transform(0.1)).toBe(0.1);
      expect(studyNaDisplay.transform(1)).toBe(1);
      expect(studyNaDisplay.transform(true)).toBe(true);
      expect(studyNaDisplay.transform(false)).toBe(false);
      expect(studyNaDisplay.transform('string')).toBe('string');
  });
});
