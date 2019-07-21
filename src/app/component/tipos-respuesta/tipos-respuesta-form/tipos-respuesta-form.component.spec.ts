import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposRespuestaFormComponent } from './tipos-respuesta-form.component';

describe('TiposRespuestaFormComponent', () => {
  let component: TiposRespuestaFormComponent;
  let fixture: ComponentFixture<TiposRespuestaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposRespuestaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposRespuestaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
