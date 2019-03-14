## Project setup

```
npm i next-assay-pre-approved-study-details
```

Component is design visualisation  for study.

It has 2 inputs:
- data 
- isFullVersion (true by default)

Data has to look like this:
```
data {
  protocol: number;
  species: string;
  discreteAllowed: boolean;
  cassette: boolean;
  route: string;
  ivDose: number;
  poDose: number;
  numberPerArms: number;
  crossover: boolean;
  strain: string;
  gender: string;
  food: string;
  matrix: string;
  sampleVolume: string;
  ivDoseVolume: string;
  poDoseVolume: string;
  ivFormulation: string;
  poFormulation: string;
  ivVehicle: string;
  poVehicle: string;
  ivTimePoints: string;
  poTimePoints: string;
  animalModel: string;
  studyModel: string;
  anticoagulant: string;
  avgBodyWeight: string;
  overage: string;
  sf: string;
}
```

## Basic usage example

### Add module into your app
```
import {NextAssayPreApprovedStudyDetailsModule} from 'next-assay-pre-approved-study-details';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NextAssayPreApprovedStudyDetailsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

### Add murkup to the template file

```
<next-assay-pre-approved-study-details
    [data]=data
></next-assay-pre-approved-study-details>
```

### Template for this page looks similar to the template above, it will be explained in next stories.