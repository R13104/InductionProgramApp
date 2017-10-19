import { NgModule } from '@angular/core';

import {
  MatProgressSpinnerModule,
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
    MatProgressSpinnerModule,
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
    MatProgressSpinnerModule,
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