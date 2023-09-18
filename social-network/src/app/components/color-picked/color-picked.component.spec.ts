import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickedComponent } from './color-picked.component';

describe('ColorPickedComponent', () => {
  let component: ColorPickedComponent;
  let fixture: ComponentFixture<ColorPickedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ColorPickedComponent]
    });
    fixture = TestBed.createComponent(ColorPickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
