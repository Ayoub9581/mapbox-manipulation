import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formdialog',
  templateUrl: './formdialog.component.html',
  styleUrls: ['./formdialog.component.scss'],
})
export class FormdialogComponent implements OnInit {
  form: FormGroup;
  name: string;
  sentData: { name: string };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    private matDialogRef: MatDialogRef<FormdialogComponent>,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      name: [name, Validators.required],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.matDialogRef.close({ ...this.data, name: this.name, isDraw: true });
  }

  save() {
    this.matDialogRef.close({ ...this.data, name: this.name, isDraw: true });
  }
  close() {
    this.matDialogRef.close();
  }
}
