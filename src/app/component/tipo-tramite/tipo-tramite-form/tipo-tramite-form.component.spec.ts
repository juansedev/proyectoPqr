import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTramiteFormComponent } from './tipo-tramite-form.component';

describe('TipoTramiteFormComponent', () => {
  let component: TipoTramiteFormComponent;
  let fixture: ComponentFixture<TipoTramiteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTramiteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTramiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
