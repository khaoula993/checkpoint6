import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeclassComponent } from './themeclass.component';

describe('ThemeclassComponent', () => {
  let component: ThemeclassComponent;
  let fixture: ComponentFixture<ThemeclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
