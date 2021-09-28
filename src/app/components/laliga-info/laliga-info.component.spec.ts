import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaligaInfoComponent } from './laliga-info.component';

describe('LaligaInfoComponent', () => {
  let component: LaligaInfoComponent;
  let fixture: ComponentFixture<LaligaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaligaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaligaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
