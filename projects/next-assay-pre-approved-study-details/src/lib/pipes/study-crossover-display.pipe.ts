import {Pipe, PipeTransform} from '@angular/core';
import {STUDY_WIZARD_STRING_NA_VALUE} from '../study-customization/mock-data';

@Pipe({
  name: 'studyCrossoverDisplay',
})
export class StudyCrossoverDisplayPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value === false) {
      return STUDY_WIZARD_STRING_NA_VALUE;
    }
    if (value === true) {
      return 'yes';
    }
    return value;
  }
}
