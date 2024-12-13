import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocPagePage } from './doc-page.page';

describe('DocPagePage', () => {
  let component: DocPagePage;
  let fixture: ComponentFixture<DocPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
