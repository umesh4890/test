import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from "../../../shared/services/api/form.service";
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formfield-create',
  templateUrl: './formfield-create.component.html',
  styleUrls: ['./formfield-create.component.css']
})
export class FormfieldCreateComponent implements OnInit {

  
  formError : any = false ;
  formFields : FormGroup;
  showDefaultValue: boolean = true;
  showLength: boolean = true;
  showValue: boolean = false;
 
  user = [];
  dataSource: string [] = [];

  sub: any;
  id: number;
  formId : number;
  data :any;
  msg :any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sr: FormService,
    private httpService: HttpClient,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
    
  ) { }

  openDialog(id): void {
    const dialogRef = this.dialog.open(FormFieldDialogDelete, {
      width: '300px',
      height: '150px',
      data: {id},
    });
  
  dialogRef.afterClosed().subscribe(result => {
    this.sr.formFieldList(this.formId).subscribe(data => {
      this.dataSource = data as string [];
    });
  });

  }

  private CreateForm()
  {
      const numberPattern  = (/^-?(0|[1-9]\d*)?$/);
      const noSpacePattern = (/^\S*$/);
      const stringPattern  = ('[A-Za-z\\s]*');
      
      this.formFields = new FormGroup ({ 
        form_id: new FormControl('',[Validators.required]),
        field_label_txt: new FormControl('',[Validators.required]),
        field_name_txt: new FormControl('',[Validators.required, Validators.pattern(noSpacePattern)]),
        field_type_sel: new FormControl('text',[Validators.required]),
        is_required_radio: new FormControl('0',[Validators.required]),
        default_value_txt: new FormControl('',[Validators.required]),
        length_txt: new FormControl('',[Validators.required, Validators.pattern(numberPattern), Validators.max(255)]),
        value_textarea: new FormControl('',[Validators.required]),
      });
  }
  
  displayedColumns: string[] = ['select', 'ID', 'FormId', 'FieldLabel', 'FormName', 'FieldType', 'Required', 'DefaultValue', 'Length', 'Value', 'Action'];
 
  ngOnInit() {
    this.CreateForm();
    this.sub = this.route.params.subscribe(params => {
      this.formId = params['id']; 
    });

    this.sr.formFieldList(this.formId).subscribe(data => {
    this.dataSource = data as string [];
       
    });
   
  }

  formFieldsSubmit()
  {
    this.formFields.value.form_id = this.formId;
    const formFieldData = this.formFields.value;
    this.sr.formFieldCreate(formFieldData).subscribe(data => {
      
      if(data.status == true)
      { 
        this.openSnackBar("Create",data.message);
        this.sr.formFieldList(this.formId).subscribe(data => {
          this.dataSource = data as string [];
          this.formFields.reset();
          this.formFields.clearValidators();
        });
      }
      else
      {
          this.msg = "field name is alreday exists";
      }
     
    });
  }

  onChange(event)
  {
    if(event.value == "text")
    {
      this.showDefaultValue = true;
      this.showLength = true;
      this.showValue = false;
    }
    else
    {
      this.showDefaultValue = false;
      this.showLength = false;
      this.showValue = true;
    }
  }

  openSnackBar(page: string, message: string) {
    this._snackBar.open(page, message,{
      duration: 2500,
      verticalPosition: "top",
      horizontalPosition: "center",
    });
  }

}


export interface DialogData {
  
}

@Component({
  selector: 'formfield-dialog-delete',
  templateUrl: 'formfield-dialog-delete.html',
})

export class FormFieldDialogDelete {

  constructor(
    private sr: FormService,
    
    public dialogRef: MatDialogRef<FormFieldDialogDelete>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      //console.log("hii",data)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(id)
  {
    this.dialogRef.close(id);
    this.sr.formFieldDelete(id).subscribe(data => {
    });
  }

}
