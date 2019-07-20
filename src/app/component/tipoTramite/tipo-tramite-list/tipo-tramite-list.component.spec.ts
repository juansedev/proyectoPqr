import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTramiteListComponent } from './tipo-tramite-list.component';

describe('TipoTramiteListComponent', () => {
  let component: TipoTramiteListComponent;
  let fixture: ComponentFixture<TipoTramiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTramiteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTramiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
