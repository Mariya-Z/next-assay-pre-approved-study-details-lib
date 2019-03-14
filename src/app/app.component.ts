import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public data = {
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
}
