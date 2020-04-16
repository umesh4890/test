import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormnotificationEditComponent } from './formnotification-edit.component';

describe('FormnotificationEditComponent', () => {
  let component: FormnotificationEditComponent;
  let fixture: ComponentFixture<FormnotificationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormnotificationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormnotificationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
