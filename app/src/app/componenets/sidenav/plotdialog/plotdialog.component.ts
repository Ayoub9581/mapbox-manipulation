import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Optional,
  Inject,
} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Plot } from '../../../Plot';

@Component({
  selector: 'app-plotdialog',
  templateUrl: './plotdialog.component.html',
  styleUrls: ['./plotdialog.component.scss'],
})
export class PlotdialogComponent implements OnInit {
  fromName: string = '';
  showDialog: boolean;
  form: FormGroup;
  local_data: any;

  @Output() onDrawPlot = new EventEmitter();

  constructor(
    private dialogRef: MatDialogRef<PlotdialogComponent>,
    private fb: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const fromName = this.fromName;
    this.form = fb.group({
      fromName: [fromName, Validators.required],
    });

    this.local_data = { ...data };

    console.log('mm this is data', data);
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close({ event: 'close', data: this.fromName });
  }

  save = () => {
    this.dialogRef.close({ data: { event: 'save', name: this.fromName } });
    // this.data.onDrawPlot.emit({ name });
  };
}
