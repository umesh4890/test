import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private sidenav: MatSidenav;

  constructor() { }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public openSidenav() {
    return this.sidenav.open();
  }


  public closeSidenav() {
    return this.sidenav.close();
  }

  public toggleSidenav():void {

    this.sidenav.toggle();
  }
}
