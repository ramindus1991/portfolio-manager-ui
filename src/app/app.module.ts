import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { ButtonModule  } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

import {TableModule} from 'primeng/table';

import { TabViewModule } from 'primeng/tabview';



@NgModule({
  declarations: [
    AppComponent,
    PortfolioSummaryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PanelModule,InputTextModule,
    HttpClientModule,
    TableModule,
    TabViewModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }