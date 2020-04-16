import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldValueComponent } from './formfield-value.component';

describe('FormfieldValueComponent', () => {
  let component: FormfieldValueComponent;
  let fixture: ComponentFixture<FormfieldValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfieldValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfieldValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
