import { Component, OnInit,  ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { 
  Router, 
  NavigationEnd, 
  RouteConfigLoadStart, 
  RouteConfigLoadEnd, 
  ResolveStart, 
  ResolveEnd 
} from '@angular/router';

import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav',{static:false}) public sidenav: MatSidenav;

  constructor(private router: Router, private layoutService: LayoutService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.layoutService.setSidenav(this.sidenav);
  }


}
