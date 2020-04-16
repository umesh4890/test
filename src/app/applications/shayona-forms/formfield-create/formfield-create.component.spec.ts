import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldCreateComponent } from './formfield-create.component';

describe('FormfieldCreateComponent', () => {
  let component: FormfieldCreateComponent;
  let fixture: ComponentFixture<FormfieldCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfieldCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfieldCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
