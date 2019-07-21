import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCausalFormComponent } from './detalle-causal-form.component';

describe('DetalleCausalFormComponent', () => {
  let component: DetalleCausalFormComponent;
  let fixture: ComponentFixture<DetalleCausalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCausalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCausalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
