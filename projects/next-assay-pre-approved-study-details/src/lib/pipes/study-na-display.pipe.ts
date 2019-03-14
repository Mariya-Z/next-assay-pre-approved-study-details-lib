import {Pipe, PipeTransform} from '@angular/core';
import {STUDY_WIZARD_NUMBER_NA_VALUE, STUDY_WIZARD_STRING_NA_VALUE} from '../study-customization/mock-data';

@Pipe({
  name: 'studyNaDisplay',
})
export class StudyNaDisplayPipe implements PipeTransform {
  public transform(value: any, ...args: any[]): any {
    if (value.toString() === STUDY_WIZARD_NUMBER_NA_VALUE.toString()) {
      return STUDY_WIZARD_STRING_NA_VALUE;
    }
    return value;
  }
}
