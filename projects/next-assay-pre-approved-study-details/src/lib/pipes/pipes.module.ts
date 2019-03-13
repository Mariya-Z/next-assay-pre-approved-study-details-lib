import {NgModule} from '@angular/core';
import {StudyNaDisplayPipe} from './study-na-display.pipe';
import {StudyCrossoverDisplayPipe} from './study-crossover-display.pipe';


@NgModule({
    exports: [StudyNaDisplayPipe, StudyCrossoverDisplayPipe],
})
export class PipesModule { }
