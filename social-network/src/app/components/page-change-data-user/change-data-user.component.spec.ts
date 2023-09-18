import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDataUserComponent } from './change-data-user.component';

describe('ChangeDataUserComponent', () => {
  let component: ChangeDataUserComponent;
  let fixture: ComponentFixture<ChangeDataUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChangeDataUserComponent]
    });
    fixture = TestBed.createComponent(ChangeDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
