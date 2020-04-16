import {Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormService } from "../../../shared/services/api/form.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  user = [];
  dataSource: string [] = [];
  constructor(
    private httpService: HttpClient,
    private sr: FormService,
    private dialog: MatDialog,
    ) { }

    openDialog(id): void {
      const dialogRef = this.dialog.open(FormDialogDelete, {
        width: '300px',
        height: '150px',
        data: {id},
      });
    
    dialogRef.afterClosed().subscribe(result => {
      this.sr.formNameList().subscribe(data => {
        this.dataSource = data as string [];
      });
      
    });
  
    }

   
  displayedColumns: string[] = ['select', 'ID', 'FormName', 'InsertDate', 'UpdateDate', 'Action'];

  ngOnInit() {

    this.sr.formNameList().subscribe(
      data => {
        this.dataSource = data as string [];
      }
    );

  }


}

export interface DialogData {
  
  
}

@Component({
  selector: 'form-dialog-delete',
  templateUrl: 'form-dialog-delete.html',
})

export class FormDialogDelete {

  constructor(
    private sr: FormService,
    
    public dialogRef: MatDialogRef<FormDialogDelete>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      //console.log("hii",data)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(id)
  {
    this.dialogRef.close(id);
    this.sr.formNameDelete(id).subscribe(data => {
    });
  }
  

}


