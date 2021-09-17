import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  MatDialogRef,
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { PlotdialogComponent } from './plotdialog.component';

@Injectable()
export class CommonModelService {
  animal: string;
  name: string;
  date1: any;
  date2: any;
  constructor(public dialog: MatDialog) {}
  openDialog(): Observable<any> {
    const dialogRef = this.dialog.open(PlotdialogComponent, {
      width: '250px',
      data: {},
    });

    return dialogRef.afterClosed();
  }
}
