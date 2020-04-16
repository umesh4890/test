import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldEditComponent } from './formfield-edit.component';

describe('FormfieldEditComponent', () => {
  let component: FormfieldEditComponent;
  let fixture: ComponentFixture<FormfieldEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfieldEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfieldEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
