import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoDaneListComponent } from './codigo-dane-list.component';

describe('CodigoDaneListComponent', () => {
  let component: CodigoDaneListComponent;
  let fixture: ComponentFixture<CodigoDaneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigoDaneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoDaneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
