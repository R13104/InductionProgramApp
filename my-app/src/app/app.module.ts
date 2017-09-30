import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  FrontendResourceComponent,
  PageNotFoundComponent,
  WelcomeComponent,
} from './components'

import { AppMaterialModule } from './shared';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FrontendResourceComponent,
    PageNotFoundComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
