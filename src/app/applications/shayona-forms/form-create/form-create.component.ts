import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup,AbstractControl } from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { FormService } from "../../../shared/services/api/form.service";
import { MatSnackBar } from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  formInfomation : boolean = true;
  formFields : boolean = false;
  formNotification : boolean = false;
  formError : any = false ;
  formName : FormGroup;
  msg : any;
  
  constructor(
    private router: Router,
    private sr: FormService,
    private _snackBar: MatSnackBar
  ) { }

  private CreateForm()
{
    this.formName = new FormGroup ({
      form_name_txt: new FormControl('',[Validators.required]),

    });
}
matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.CreateForm();
  }

  formSelect(formNames)
{
  if(formNames == "information")
  {
    this.formInfomation = true;
    this.formFields = false;
    this.formNotification = false;
  }
  if(formNames == "formFields")
  {
    this.formInfomation = false;
    this.formFields = true;
    this.formNotification = false;
  }
  if(formNames == "formNotification")
  {
    this.formInfomation = false;
    this.formFields = false;
    this.formNotification = true;
  }

}

FormNameSubmit()
{
  const formNameData = this.formName.value;
  
  this.sr.formNameCreate(formNameData).subscribe(data => {
    if(data.status == true)
    {
      this.openSnackBar("Create",data.message);
      this.router.navigate(['/forms/formlist']);
    }
    else
    {
      this.msg = "Filed name is alreday exists";
    }
    
   });

}

openSnackBar(page: string, message: string) {
  this._snackBar.open(page, message,{
    duration: 2500,
    verticalPosition: "top",
    horizontalPosition: "center",
  });
}

}
