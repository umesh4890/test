import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router,ActivatedRoute} from '@angular/router';
import { FormService } from "../../../shared/services/api/form.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formfield-edit',
  templateUrl: './formfield-edit.component.html',
  styleUrls: ['./formfield-edit.component.css']
})
export class FormfieldEditComponent implements OnInit {

  formError :any = false ;
  editFormFields : FormGroup;
  fieldTypeSel : any;
  radio : any;
  msg:any;
  
  sub: any;
  id: number;
  editId : number;
  formId :number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sr: FormService,
    private _snackBar: MatSnackBar

  ) { }

  private EditForm()
  {
    const numberPattern  = (/^-?(0|[1-9]\d*)?$/);
    const noSpacePattern = (/^\S*$/);
    const stringPattern  = ('[A-Za-z\\s]*');

      this.editFormFields = new FormGroup ({
        id : new FormControl('',[Validators.required]),
        form_id : new FormControl('',[Validators.required]),
        field_label_txt: new FormControl('',[Validators.required, Validators.pattern(stringPattern)]),
        field_name_txt: new FormControl('',[Validators.required, Validators.pattern(noSpacePattern)]),
        field_type_sel: new FormControl('',[Validators.required]),
        is_required_radio: new FormControl('',[Validators.required]),
        default_value_txt: new FormControl('',[Validators.required]),
        length_txt: new FormControl('',[Validators.required, Validators.pattern(numberPattern), Validators.max(255)]),
      });
  }

  ngOnInit() {
    this.EditForm();
    this.sub = this.route.params.subscribe(params => {
    this.editId = params['id']; 
      // let editId = JSON.parse(localStorage.getItem("form_field_edit_id"));
      this.sr.formFieldEdit(this.editId).subscribe(data => {
      this.formId = data.form_id;
      this.fieldTypeSel = data.field_type;
      this.radio = data.is_required;
      const newData = {
            id : data.id,
            form_id : data.form_id,
            field_name_txt : data.field_name,
            field_label_txt :data.field_label,
            field_type_sel : data.field_type,
            is_required_radio : data.is_required,
            default_value_txt : data.default_value, 
            length_txt : data.length,
      }
      this.editFormFields.setValue(newData);

      });
    });

  }

  editFormFieldsSubmit()
  {
    const formFieldData = this.editFormFields.value;
    this.sr.formFieldsUpdate(formFieldData).subscribe(data => {
      if(data.status == true)
      {
        this.openSnackBar("Update",data.message);
        this.router.navigate(['/forms/formfieldcreate',this.formId]);
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
