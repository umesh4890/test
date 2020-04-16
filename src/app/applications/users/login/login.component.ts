import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Utilities } from '../../../shared/helpers/utilities';
import { UserService } from '../../../shared/services/api/user.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(MatProgressBar, {static:false}) progressBar: MatProgressBar;
  @ViewChild(MatButton, {static:false}) submitButton: MatButton;

  userLoginForm: FormGroup;
  userLoginError : any;
  loginmessage : any;
  isVerified: boolean;
  userVerificationForm: FormGroup;
  userRegistrationForm: FormGroup;
  signinForm: FormGroup;

  constructor(private userService : UserService, private router: Router ) { }

  ngOnInit() {
    this.loginCheck();
    this.createForm();    
    this.userLoginError = false;
    this.isVerified = true;
    
  }

  private createForm()
  {
   
      this.signinForm = new FormGroup({     
      email: new FormControl('', [ Validators.required]),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)

    });
  } 

  loginCheck(){
    console.log('not logged in');

    this.userService.userAuthCheck().subscribe(data => {
      if (!Utilities.isEmptyObj(data)) {
        console.log('user logged in');
        
      }
      else
      {
        console.log('user not logged in');
      }
    });
   
  }



  loginFormSubmit() {
    
    const userData = this.signinForm.value;
    userData.grant_type = 'password';
    userData.client_id = 5;
    userData.client_secret = 'DRmeMrWoSytxPJIQjijvhYadkvDe9bUayysLkoaM';
    userData.scope = '*'
   
   
    if (!Utilities.isEmptyObj(userData['email']) && !Utilities.isEmptyObj(userData['password'])) {

      this.userService.userLogin(userData).subscribe(data => {
        
        if (!Utilities.isEmptyObj(data)) {
        
          console.log('loginFormSubmit.success');
          //console.log(data.success);
          //console.log(data);
       //  this.commonService.setLocalStorageObject(LocalStorage.UserData, data.success);
        this.router.navigate(['dashboard']);

         //this.commonService.setLocalStorageObject(LocalStorage.UserData, this.commonService.convertObjectInCamelizeKeys(data));
        
          //this.openSnackBar('Login',data.message);
        }
        else
        {
          console.log('loginFormSubmit.fail');
          
          //console.log(data.success);
         // this.commonService.setLocalStorageObject(LocalStorage.UserInfo, this.commonService.convertObjectInCamelizeKeys(data));
          this.userLoginError = data;
         
          this.loginmessage = null; 
          this.isVerified = data['isVerified'];
          //this.openSnackBar('Login',data.message);
        }
      });
    } else if (!Utilities.isEmptyObj(userData['email'])) {


      const email = { email: userData['email'] };

    }
  }
}
