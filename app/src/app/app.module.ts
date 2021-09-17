import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { SidenavComponent } from './componenets/sidenav/sidenav.component';

import { DemoMaterialModule } from '../../src/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapboxComponent } from './componenets/mapbox/mapbox.component';
import { PlotdialogComponent } from './componenets/sidenav/plotdialog/plotdialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormdialogComponent } from './componenets/formdialog/formdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    MapboxComponent,
    PlotdialogComponent,
    FormdialogComponent,
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
