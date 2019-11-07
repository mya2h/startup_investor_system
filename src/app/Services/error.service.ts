import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from '../Components/error-dialog/error-dialog.component'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public dialogConfig;
  public errorMessage: string = '';
  public errorOther: string = '';

  constructor(private router: Router, private dialog: MatDialog, private _snackBar:MatSnackBar) { }

  public handleError = (error: HttpErrorResponse) => {
    if (error.status === 500) {
      this.handle500Error(error);
    }
    else if (error.status === 404) {
      this.handle404Error(error)
    }
    else {
      this.handleOtherError(error);
    }
  }

  private handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.dialogConfig.data = { 'errorMessage': this.errorMessage };
    this.dialog.open(ErrorDialogComponent, this.dialogConfig);
  }

  private handle404Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.dialogConfig.data = { 'errorMessage': this.errorMessage };
    this.dialog.open(ErrorDialogComponent, this.dialogConfig);
  }

  private handleOtherError = (error: HttpErrorResponse) => {
    this.createOtherErrorMessage(error);
    this.dialogConfig.data = { 'errorMessage': this.errorOther };
    this.dialog.open(ErrorDialogComponent, this.dialogConfig);
    //    this._snackBar.open(this.dialogConfig, action, {
    //   duration: 2000,
    // });
  }

  private createErrorMessage(error: HttpErrorResponse) {
    this.errorMessage = error.statusText;
    console.log("this is the error" + this.errorMessage);
  }
  private createOtherErrorMessage(error: HttpErrorResponse) {
    this.errorOther = error.error.message.error[0].message;
    console.log("this is the error" + this.errorMessage);
  }
}
