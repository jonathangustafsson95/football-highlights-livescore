import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClInfoComponent } from './cl-info.component';

describe('ClInfoComponent', () => {
  let component: ClInfoComponent;
  let fixture: ComponentFixture<ClInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
