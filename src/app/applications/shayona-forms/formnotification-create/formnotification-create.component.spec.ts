import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormnotificationCreateComponent } from './formnotification-create.component';

describe('FormnotificationCreateComponent', () => {
  let component: FormnotificationCreateComponent;
  let fixture: ComponentFixture<FormnotificationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormnotificationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormnotificationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
