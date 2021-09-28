import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieaInfoComponent } from './seriea-info.component';

describe('SerieaInfoComponent', () => {
  let component: SerieaInfoComponent;
  let fixture: ComponentFixture<SerieaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
