import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElInfoComponent } from './el-info.component';

describe('ElInfoComponent', () => {
  let component: ElInfoComponent;
  let fixture: ComponentFixture<ElInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
