import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ligue1InfoComponent } from './ligue1-info.component';

describe('Ligue1InfoComponent', () => {
  let component: Ligue1InfoComponent;
  let fixture: ComponentFixture<Ligue1InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ligue1InfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ligue1InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
