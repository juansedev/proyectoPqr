import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDocumentosFormComponent } from './tipos-documentos-form.component';

describe('TiposDocumentosFormComponent', () => {
  let component: TiposDocumentosFormComponent;
  let fixture: ComponentFixture<TiposDocumentosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposDocumentosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDocumentosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
