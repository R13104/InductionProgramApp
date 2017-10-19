import { NgModule } from '@angular/core';

import {
  // MatProgressSpinnerModule, // Not working with current version of angular 4.2.4
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSnackBarModule,
  MatSelectModule,
  MatTabsModule,
  MatListModule,
} from '@angular/material'; // Check why MatCoreModule is not getting imported

@NgModule({
  imports: [
    // MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule
  ],
  exports: [
    // MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule
  ],
})
export class AppMaterialModule { }