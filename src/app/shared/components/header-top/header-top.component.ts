import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Utilities } from '../../../shared/helpers/utilities';
import { UserService } from '../../../shared/services/api/user.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  toggleActive = false;
  userData = {};
  

  constructor(private layout:LayoutService, private userService : UserService, private router: Router) { }

  ngOnInit() {
    this.getUserData();
  }



  sidenavToggle(){
    this.toggleActive = !this.toggleActive;
    this.layout.toggleSidenav();
  }


    testFuncion() {
        this.userService.testApicall().subscribe(data => {
          if (!Utilities.isEmptyObj(data)) {
            console.log('getUserData.success');
            console.log(data);
          
          }
          else
          {
            console.log('getUserData.fail');
          }
            });
    }

  getUserData() {
        this.userService.userData().subscribe(data => {
          if (!Utilities.isEmptyObj(data)) {
            console.log('getUserData.success');
            console.log(data);
            this.userData = data;
          }
          else
          {
            console.log('getUserData.fail');
          }
            });
    }

    logOut(){
      this.userService.userLogout().subscribe(data => {
        if (!Utilities.isEmptyObj(data)) {
          console.log('logout.success');
          this.router.navigate(['login']);
        }
        else
        {
          console.log('logout.fail');
        }
      });
      this.router.navigate(['login']);
    }
}
