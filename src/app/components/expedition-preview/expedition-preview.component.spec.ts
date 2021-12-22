import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionPreviewComponent } from './expedition-preview.component';

describe('ExpeditionPreviewComponent', () => {
  let component: ExpeditionPreviewComponent;
  let fixture: ComponentFixture<ExpeditionPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditionPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
