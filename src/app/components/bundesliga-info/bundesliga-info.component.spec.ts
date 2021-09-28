import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaInfoComponent } from './bundesliga-info.component';

describe('BundesligaInfoComponent', () => {
  let component: BundesligaInfoComponent;
  let fixture: ComponentFixture<BundesligaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundesligaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BundesligaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
