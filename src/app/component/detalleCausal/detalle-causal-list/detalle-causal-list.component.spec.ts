import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCausalListComponent } from './detalle-causal-list.component';

describe('DetalleCausalListComponent', () => {
  let component: DetalleCausalListComponent;
  let fixture: ComponentFixture<DetalleCausalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCausalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCausalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
