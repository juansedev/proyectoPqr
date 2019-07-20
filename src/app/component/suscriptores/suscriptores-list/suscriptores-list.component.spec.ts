import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptoresListComponent } from './suscriptores-list.component';

describe('SuscriptoresListComponent', () => {
  let component: SuscriptoresListComponent;
  let fixture: ComponentFixture<SuscriptoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscriptoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriptoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
