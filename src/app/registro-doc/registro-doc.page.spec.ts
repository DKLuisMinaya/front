import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroDocPage } from './registro-doc.page';

describe('RegistroDocPage', () => {
  let component: RegistroDocPage;
  let fixture: ComponentFixture<RegistroDocPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
