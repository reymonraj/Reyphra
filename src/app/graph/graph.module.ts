import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, } from '@angular/material';

import { GraphRoutingModule } from './graph-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GraphRoutingModule,
    // MatTableModule
  ]
})
export class GraphModule { }
