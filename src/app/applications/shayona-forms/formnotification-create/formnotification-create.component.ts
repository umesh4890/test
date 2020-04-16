import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from "../../../shared/services/api/form.service";
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formnotification-create',
  templateUrl: './formnotification-create.component.html',
  styleUrls: ['./formnotification-create.component.css']
})
export class FormnotificationCreateComponent implements OnInit {
  formError : any = false ;
  formNotificationEmail : FormGroup;
  formNotificationSms : FormGroup;
  showToEmail: boolean = true;
  showSmsNumber: boolean = true;

  emailForm : boolean = true;
  smsForm : boolean = false;
 
  sub: any;
  id: number;
  formId : number;

  user = [];
  dataSource: string [] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sr: FormService,
    private httpService: HttpClient,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar

  ) { }

  openDialog(id): void {
    const dialogRef = this.dialog.open(FormNotificationDialogDelete, {
      width: '300px',
      height: '150px',
      data: {id},
    });
  
  dialogRef.afterClosed().subscribe(result => {
    this.sr.formNotificationList(this.formId).subscribe(data => {
      this.dataSource = data as string [];
    });
    
  });

  }


  private createFormNotificationEmail()
  {
    this.formNotificationEmail = new FormGroup ({ 
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

  private createFormNotificationSms()
  {
    this.formNotificationSms = new FormGroup ({ 
      event_sel: new FormControl('',[Validators.required]),
      phone_num_txt: new FormControl('',[Validators.required]),
      sms_msg_textarea: new FormControl('',[Validators.required,Validators.maxLength(255)]),
    });
  }

  displayedColumns: string[] = ['select', 'ID', 'Event', 'Subject', 'EmailFromName', 'EmailFrom', 'ToEmail', 'CcEmail', 'BccEmail', 'EmailMsg', 'SmsMsg', 'Contact', 'Action'];
 

  ngOnInit() {
    this.createFormNotificationEmail();
    this.createFormNotificationSms();
    this.sub = this.route.params.subscribe(params => {
      this.formId = params['formId']; 
    });

    this.sr.formNotificationList(this.formId).subscribe(data => {
      this.dataSource = data as string [];
       
    });
  }

  formNotificationEmailSubmit()
  {
    this.formNotificationEmail.value.form_id = this.formId;
    const formNotificationData = this.formNotificationEmail.value; 
    // if(this.formNotificationEmail.valid != false)
    // {
      this.sr.formNotificationCreate(formNotificationData).subscribe(data => {
        if(data.status == true)
        { 
          this.openSnackBar("Create",data.message);
          this.sr.formNotificationList(this.formId).subscribe(data => {
            this.dataSource = data as string [];
            this.formNotificationEmail.reset();
            this.formNotificationEmail.clearValidators();
              
          });
        }
      });
    // }
  }

  onChangeEmail(event)
  {
    if(event.value == "user_notification")
    {
      this.showToEmail = false;
    }
    else
    {
      this.showToEmail = true;
    }
  }


  formNotificationSmsSubmit()
  {
    this.formNotificationSms.value.form_id = this.formId;
    const formNotificationSmsData = this.formNotificationSms.value; 
    // if(this.formNotificationSms.valid != false)
    // {
      this.sr.formNotificationCreate(formNotificationSmsData).subscribe(data => {
        if(data.status == true)
        { 
          this.openSnackBar("Create",data.message);
          this.sr.formNotificationList(this.formId).subscribe(data => {
            this.dataSource = data as string [];
            this.formNotificationSms.reset();
            this.formNotificationSms.clearValidators();
            });
        }
      });
    // }
  }

  onChangeSms(event)
  {
    if(event.value == "admin_notification")
    {
      this.showSmsNumber = true;
    }
    else
    {
      this.showSmsNumber = false;
    }
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

  // remove(id)
  // {
  //   this.sr.formNotificationDelete(id).subscribe(data => {
  //     this.sr.formNotificationList(this.formId).subscribe(data => {
  //       this.dataSource = data as string [];
  //     });
  //   });
    
  // }

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
  selector: 'formnotification-dialog-delete',
  templateUrl: 'formnotification-dialog-delete.html',
})

export class FormNotificationDialogDelete {

  constructor(
    private sr: FormService,
    
    public dialogRef: MatDialogRef<FormNotificationDialogDelete>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      //console.log("hii",data)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(id)
  {
    this.dialogRef.close(id);
    this.sr.formNotificationDelete(id).subscribe(data => {
    });
  }

}
