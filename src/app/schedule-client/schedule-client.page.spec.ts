import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleClientPage } from './schedule-client.page';

describe('ScheduleClientPage', () => {
  let component: ScheduleClientPage;
  let fixture: ComponentFixture<ScheduleClientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
