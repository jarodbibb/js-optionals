import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCakesComponent } from './all-cakes.component';

describe('AllCakesComponent', () => {
  let component: AllCakesComponent;
  let fixture: ComponentFixture<AllCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
