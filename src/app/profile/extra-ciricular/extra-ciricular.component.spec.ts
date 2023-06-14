import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCiricularComponent } from './extra-ciricular.component';

describe('ExtraCiricularComponent', () => {
  let component: ExtraCiricularComponent;
  let fixture: ComponentFixture<ExtraCiricularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraCiricularComponent]
    });
    fixture = TestBed.createComponent(ExtraCiricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
