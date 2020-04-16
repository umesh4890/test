import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from "../../../shared/services/api/form.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formfield-value',
  templateUrl: './formfield-value.component.html',
  styleUrls: ['./formfield-value.component.css']
})
export class FormfieldValueComponent implements OnInit {

  formError : any = false ;
  fieldValueData : FormGroup;

  user = [];
  dataSource: string [] = [];
  sub: any;
  id: number;
  formId :number;
  formFieldId : number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sr: FormService,
    private dialog: MatDialog,
  ) { }

  openDialog(element,i): void {
    const dialogRef = this.dialog.open(FormFieldValueDialog, {
      width: '400px',
      height: '240px',
      data: { element , i},
    });
  
  dialogRef.afterClosed().subscribe(result => {

      this.sr.fieldsValueUpdate(this.dataSource).subscribe(data => {
      
      });
    });

  }
  private formFieldsValue()
  {
      this.fieldValueData = new FormGroup ({
        value_textarea: new FormControl('',[Validators.required]),
        sortorder_txt : new FormControl('',[Validators.required]),

      });
  }
matcher = new MyErrorStateMatcher();

displayedColumns: string[] = ['select', 'FieldID', 'Value', 'SortOrder', 'Action'];
 
  ngOnInit() {
    this.formFieldsValue();
    this.sub = this.route.params.subscribe(params => {
      this.formId = params['formId'];
      this.formFieldId = params['formFieldId'];
    });

    this.sr.fieldValueList(this.formFieldId).subscribe(data => {
      this.dataSource = data as string [];
    
    });

  }

fieldsValueSubmit()
{
  this.fieldValueData.value.form_field_id = this.formFieldId;
  const fieldValueNew = this.fieldValueData.value;

    this.sr.fieldsValueCreate(fieldValueNew).subscribe(data => {
      if(data.status == true)
      {
        this.sr.fieldValueList(this.formFieldId).subscribe(data => {
          this.dataSource = data as string [];
          this.fieldValueData.reset();
          this.fieldValueData.clearValidators();
        });
      }

    });
}

}


export interface DialogData {
  
}

@Component({
  selector: 'form-field-value-dialog',
  templateUrl: 'form-field-value-dialog.html',
})

export class FormFieldValueDialog {

  constructor(
    public dialogRef: MatDialogRef<FormFieldValueDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      //console.log("hii",data)
    }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(valueData)
  {
    this.dialogRef.close(valueData);
  }

}