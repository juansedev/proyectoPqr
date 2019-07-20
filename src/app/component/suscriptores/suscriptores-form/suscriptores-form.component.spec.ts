import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptoresFormComponent } from './suscriptores-form.component';

describe('SuscriptoresFormComponent', () => {
  let component: SuscriptoresFormComponent;
  let fixture: ComponentFixture<SuscriptoresFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscriptoresFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriptoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
