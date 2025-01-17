import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductsModule } from "./products/products.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import localEsHN from '@angular/common/locales/es-HN'
import localFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common';


registerLocaleData( localEsHN )
registerLocaleData( localFrCA )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
