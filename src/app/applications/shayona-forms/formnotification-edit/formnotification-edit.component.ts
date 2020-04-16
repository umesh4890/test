import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from "../../../shared/services/api/form.service";
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-formnotification-edit',
  templateUrl: './formnotification-edit.component.html',
  styleUrls: ['./formnotification-edit.component.css']
})
export class FormnotificationEditComponent implements OnInit {

  formError : any = false ;
  formNotificationEmail : FormGroup;
  formNotificationSms : FormGroup;

  emailForm : boolean = true;
  smsForm : boolean = false;

  sub: any;
  id: number;
  formId : number;
  formNotificationId : number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sr: FormService,
    private _snackBar: MatSnackBar

  ) { }

  private editFormNotificationEmail()
  {
      this.formNotificationEmail = new FormGroup ({ 
        id : new FormControl('',[Validators.required]),
        form_id : new FormControl('',[Validators.required]),
        event_sel: new FormControl('',[Validators.required]),
        subject_txt: new FormControl('',[Validators.required]),
        email_from_name_txt: new FormControl('',[Validators.required]),
        email_from_txt: new FormControl('',[Validators.required, Validators.email]),
        to_email_txt: new FormControl('',[Validators.required, Validators.email]),
        cc_email_txt: new FormControl('',[Validators.required, Validators.email]),
        bcc_email_txt: new FormControl('',[Validators.required, Validators.email]),
        email_msg_textarea: new FormControl('',[Validators.required,Validators.maxLength(255)]),
      });
  }

  private editFormNotificationSms()
  {
      this.formNotificationSms = new FormGroup ({ 
        id : new FormControl('',[Validators.required]),
        form_id : new FormControl('',[Validators.required]),
        event_sel: new FormControl('',[Validators.required]),
        sms_msg_textarea: new FormControl('',[Validators.required,Validators.maxLength(255)]),
      });
  }

  ngOnInit() {
    this.editFormNotificationEmail();
    this.editFormNotificationSms();
    this.sub = this.route.params.subscribe(params => {
      this.formId = params['formId']; 
    });

    this.sub = this.route.params.subscribe(params => {
      this.formNotificationId = params['formNotificationId']; 
    });

    this.sr.formNotificationEdit(this.formNotificationId).subscribe(data => {
      if(data.email_message != null)
      {
        const newData = {
          id : data.id,
          form_id : data.form_id,
          event_sel : data.event,
          subject_txt :data.subject,
          email_from_name_txt : data.email_from_name,
          email_from_txt : data.email_from,
          to_email_txt : data.to_email, 
          cc_email_txt : data.cc_email,
          bcc_email_txt : data.bcc_email,
          email_msg_textarea : data.email_message,
      }
        this.emailForm = true;
        this.smsForm = false;
        this.formNotificationEmail.setValue(newData);
      }
      else
      {
          const newData = {
            id : data.id,
            form_id : data.form_id,
            event_sel : data.event,
            sms_msg_textarea : data.sms_message,
      }
        this.emailForm = false;
        this.smsForm = true;
       this.formNotificationSms.setValue(newData);
    }
     
    });
  }

  formNotificationEmailSubmit()
  {
    const formNotificationEmailData = this.formNotificationEmail.value;
      this.sr.formNotificationUpdate(formNotificationEmailData).subscribe(data => {
        if(data.status == true)
        {
          this.openSnackBar("Update",data.message);
          this.router.navigate(['/forms/formnotificationcreate',this.formId]);
        }
      });
  }

  formNotificationSmsSubmit()
  {
    const formNotificationSmsData = this.formNotificationSms.value;
      this.sr.formNotificationUpdate(formNotificationSmsData).subscribe(data => {
        if(data.status == true)
        {
          this.openSnackBar("Update",data.message);
          this.router.navigate(['/forms/formnotificationcreate',this.formId]);
        }
      });
  }

  openForm(buttonId)
  {
    if(buttonId == "email_btn_id")
    {
      this.emailForm = true;
      this.smsForm = false;
    }
    else
    {
      this.emailForm = false;
      this.smsForm = true;
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
