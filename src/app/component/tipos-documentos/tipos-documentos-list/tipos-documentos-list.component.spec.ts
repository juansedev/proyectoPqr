import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDocumentosListComponent } from './tipos-documentos-list.component';

describe('TiposDocumentosListComponent', () => {
  let component: TiposDocumentosListComponent;
  let fixture: ComponentFixture<TiposDocumentosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposDocumentosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDocumentosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
