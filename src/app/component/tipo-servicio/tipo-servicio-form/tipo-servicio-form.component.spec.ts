import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicioFormComponent } from './tipo-servicio-form.component';

describe('TipoServicioFormComponent', () => {
  let component: TipoServicioFormComponent;
  let fixture: ComponentFixture<TipoServicioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
