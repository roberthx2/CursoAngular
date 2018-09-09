import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { LowerCasePipe } from './shared/pipes/lower-case.pipe';
import { MarsModule } from './mars/mars.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutPageComponent,
    HomeComponent,
    LowerCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
