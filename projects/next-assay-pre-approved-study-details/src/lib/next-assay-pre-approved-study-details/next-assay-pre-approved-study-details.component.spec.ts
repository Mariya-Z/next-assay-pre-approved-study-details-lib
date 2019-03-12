import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextAssayPreApprovedStudyDetailsComponent } from './next-assay-pre-approved-study-details.component';
import { Pipe, PipeTransform, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

@Pipe({name: 'studyNaDisplay'})
class StudyNaDisplayMock implements PipeTransform {
  transform(i): any {
    return i;
  }
}

@Pipe({name: 'studyCrossoverDisplay'})
class StudyCrossoverDisplayMock implements PipeTransform {
  transform(i): any {
    return i;
  }
}

const pipes = [
  StudyNaDisplayMock,
  StudyCrossoverDisplayMock,
];

describe('Component: Assay PreApproved Study Details Component', () => {

  @Component({
    template: '<assay-pre-approved-study-details></assay-pre-approved-study-details>',
  })
  class NextAssayPreApprovedStudyDetailsEmptyHostComponent {
  }

  let componentInstance: NextAssayPreApprovedStudyDetailsComponent;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextAssayPreApprovedStudyDetailsEmptyHostComponent, NextAssayPreApprovedStudyDetailsComponent, ...pipes],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
     // create component and test fixture
    fixture = TestBed.createComponent(NextAssayPreApprovedStudyDetailsComponent);

    // get test component from the fixture
    componentInstance = fixture.componentInstance;
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  afterEach(() => fixture.destroy());

  it('component should be created', () => {
    expect(componentInstance).toBeDefined();
  });

  xit('component should has stringNAValue', () => {
    expect(componentInstance.stringNAValue).toBe(STUDY_WIZARD_STRING_NA_VALUE);
  });

  it('should be possible to create empty component', () => {
    fixture = TestBed.createComponent(NextAssayPreApprovedStudyDetailsEmptyHostComponent);
    const componentTemplate = fixture.debugElement.query(By.css('.float-body'));
    expect(componentTemplate).toBeNull();
  });
});

describe('', () => {
  @Component({
    template: `
      <assay-pre-approved-study-details
        [data]="data"
        [isFullVersion]="isFullVersion"
      ></assay-pre-approved-study-details>`,
  })
  class NextAssayPreApprovedStudyDetailsHostComponent {
    data: PasEntry;
    isFullVersion = false;
  }

  beforeEach(async(() => {
    // refine the test module by declaring the test component
    TestBed
      .configureTestingModule({
        declarations: [NextAssayPreApprovedStudyDetailsHostComponent, NextAssayPreApprovedStudyDetailsComponent, ...pipes],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
  }));

  let fixture;
  afterEach(() => fixture.destroy());

  it('should not fail with invalid data', () => {
    fixture = TestBed.createComponent(NextAssayPreApprovedStudyDetailsHostComponent);
    fixture.componentInstance.data = {} as PasEntry;
    fixture.componentInstance.isFullVersion = true;
    fixture.detectChanges();
    expect(fixture).toBeDefined();
  });

  it('should not show additional fields when isFullData = false', () => {
    fixture = TestBed.createComponent(NextAssayPreApprovedStudyDetailsHostComponent);
    fixture.componentInstance.data = {} as PasEntry;
    fixture.componentInstance.isFullVersion = false;
    fixture.detectChanges();
    const protocol = fixture.debugElement.query(By.css('.protocol'));
    const species = fixture.debugElement.query(By.css('.species'));
    const routeOfAdministration = fixture.debugElement.query(By.css('.route-of-administration'));
    const ivDose = fixture.debugElement.query(By.css('.iv-dose'));
    const poDose = fixture.debugElement.query(By.css('.po-dose'));
    const poVehicle = fixture.debugElement.query(By.css('.po-vehicle'));
    expect([protocol,
      species,
      routeOfAdministration,
      ivDose,
      poDose,
      poVehicle].filter(i => i)).toEqual([]);
  });

  xit('should show additional fields when isFullData = true', () => {
    fixture = TestBed.createComponent(NextAssayPreApprovedStudyDetailsHostComponent);
    fixture.componentInstance.data = {} as PasEntry;
    fixture.componentInstance.isFullVersion = true;
    fixture.detectChanges();
    const protocol = fixture.debugElement.query(By.css('.protocol'));
    const species = fixture.debugElement.query(By.css('.species'));
    const routeOfAdministration = fixture.debugElement.query(By.css('.route-of-administration'));
    const ivDose = fixture.debugElement.query(By.css('.iv-dose'));
    const poDose = fixture.debugElement.query(By.css('.po-dose'));
    const poVehicle = fixture.debugElement.query(By.css('.po-vehicle'));
    expect([protocol,
      species,
      routeOfAdministration,
      ivDose,
      poDose,
      poVehicle].filter(i => i).length).toBe(6);
  });

  xit('on extended component should be 24 fields ', () => {
    fixture = TestBed.createComponent(NextAssayPreApprovedStudyDetailsHostComponent);
    fixture.componentInstance.data = {} as PasEntry;
    fixture.componentInstance.isFullVersion = true;
    fixture.detectChanges();
    const fields = fixture.debugElement.queryAll(By.css('.field'));
    expect(fields.length).toBe(24);
  });

  xit('on collapsed component should be 18 fields ', () => {
    fixture = TestBed.createComponent(NextAssayPreApprovedStudyDetailsHostComponent);
    fixture.componentInstance.data = {} as PasEntry;
    fixture.componentInstance.isFullVersion = false;
    fixture.detectChanges();
    const fields = fixture.debugElement.queryAll(By.css('.field'));
    expect(fields.length).toBe(18);
  });


});
