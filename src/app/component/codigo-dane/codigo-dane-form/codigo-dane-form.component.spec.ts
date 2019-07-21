import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoDaneFormComponent } from './codigo-dane-form.component';

describe('CodigoDaneFormComponent', () => {
  let component: CodigoDaneFormComponent;
  let fixture: ComponentFixture<CodigoDaneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoDaneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoDaneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
