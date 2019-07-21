import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposNotificacionListComponent } from './tipos-notificacion-list.component';

describe('TiposNotificacionListComponent', () => {
  let component: TiposNotificacionListComponent;
  let fixture: ComponentFixture<TiposNotificacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposNotificacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposNotificacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
