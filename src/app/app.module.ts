import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { AuthorizedRequestHttpInterceptor } from './common/interceptor/authorized-request.interceptor';
import { DialogModule } from 'primeng/dialog';
import { AddTradePopupComponent } from './add-trade-popup/add-trade-popup.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';




@NgModule({
  declarations: [
    AppComponent,
    PortfolioSummaryComponent,
    LoginComponent,
    AddTradePopupComponent
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
    TabViewModule,DialogModule,
    DynamicDialogModule,
    DropdownModule,
    RadioButtonModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizedRequestHttpInterceptor, multi: true },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }