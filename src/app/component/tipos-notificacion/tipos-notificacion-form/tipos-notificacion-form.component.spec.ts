import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposNotificacionFormComponent } from './tipos-notificacion-form.component';

describe('TiposNotificacionFormComponent', () => {
  let component: TiposNotificacionFormComponent;
  let fixture: ComponentFixture<TiposNotificacionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposNotificacionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposNotificacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
