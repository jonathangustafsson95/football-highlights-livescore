import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlInfoComponent } from './pl-info.component';

describe('PlInfoComponent', () => {
  let component: PlInfoComponent;
  let fixture: ComponentFixture<PlInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
