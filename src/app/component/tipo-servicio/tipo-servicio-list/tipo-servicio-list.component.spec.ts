import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoServicioListComponent } from './tipo-servicio-list.component';

describe('TipoServicioListComponent', () => {
  let component: TipoServicioListComponent;
  let fixture: ComponentFixture<TipoServicioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoServicioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoServicioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
