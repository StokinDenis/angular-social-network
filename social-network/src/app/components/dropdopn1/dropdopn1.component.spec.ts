import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dropdopn1Component } from './dropdopn1.component';

describe('Dropdopn1Component', () => {
  let component: Dropdopn1Component;
  let fixture: ComponentFixture<Dropdopn1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Dropdopn1Component]
    });
    fixture = TestBed.createComponent(Dropdopn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
