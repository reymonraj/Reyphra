import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { ChartModule } from 'angular-highcharts';
import { GraphData } from './graph/data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    CommonModule,
    FormsModule,
    MatTableModule
    ],
  providers: [GraphData],
  bootstrap: [AppComponent]
})
export class AppModule { }
