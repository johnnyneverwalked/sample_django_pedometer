import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "./components/button/button.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {StepsModule} from "./pages/steps/steps.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    NgbTooltipModule,
    HttpClientModule,
    StepsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
