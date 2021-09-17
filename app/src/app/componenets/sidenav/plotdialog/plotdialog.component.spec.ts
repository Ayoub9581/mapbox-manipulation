import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotdialogComponent } from './plotdialog.component';

describe('PlotdialogComponent', () => {
  let component: PlotdialogComponent;
  let fixture: ComponentFixture<PlotdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
