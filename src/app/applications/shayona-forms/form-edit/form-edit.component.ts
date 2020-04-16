import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormService } from "../../../shared/services/api/form.service";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  formError :any = false ;
  editFormName : FormGroup;
  formId : number;
  msg: any;
  
  sub: any;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sr: FormService,
    private _snackBar: MatSnackBar

    ) { }

  private EditForm()
  {
      this.editFormName = new FormGroup ({
        id : new FormControl('',[Validators.required]),
        form_name_txt : new FormControl('',[Validators.required]),

      });
  }
  
  ngOnInit() {
    this.EditForm();

    this.sub = this.route.params.subscribe(params => {
    this.formId = params['id'];

      this.sr.formNameEdit(this.formId).subscribe(data => {
      const newData = {
            id : data.id,
            form_name_txt : data.form_name,
      }
      this.editFormName.setValue(newData);

      });
    });

  }

  editFormNameSubmit()
  {
    const formNameData = this.editFormName.value;
    this.sr.formNameUpdate(formNameData).subscribe(data => {
      if(data.status == true)
      {
        this.openSnackBar("Update",data.message);
        this.router.navigate(['/forms/formlist']);
      }
      else
      {
        this.msg = "form name is alreday exists";
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
