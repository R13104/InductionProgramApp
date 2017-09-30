import { NgModule } from '@angular/core';

import {
  MdProgressSpinnerModule,
  MdCardModule,
  MdButtonModule,
  MdIconModule,
  MdMenuModule,
  MdSnackBarModule,
  MdSelectModule,
  MdTabsModule,
  MdListModule
} from '@angular/material'; // Check why MdCoreModule is not getting imported

@NgModule({
  imports: [
    MdProgressSpinnerModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdSnackBarModule,
    MdSelectModule,
    MdTabsModule,
    MdListModule
  ],
  exports: [
    MdProgressSpinnerModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdSnackBarModule,
    MdSelectModule,
    MdTabsModule,
    MdListModule
  ],
})
export class AppMaterialModule { }