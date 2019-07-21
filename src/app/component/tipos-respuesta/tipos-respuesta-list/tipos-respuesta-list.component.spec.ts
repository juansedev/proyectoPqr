import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposRespuestaListComponent } from './tipos-respuesta-list.component';

describe('TiposRespuestaListComponent', () => {
  let component: TiposRespuestaListComponent;
  let fixture: ComponentFixture<TiposRespuestaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposRespuestaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposRespuestaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
