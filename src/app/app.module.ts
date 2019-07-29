import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/share/dashboard/dashboard.component';
import { AppRoutes } from './app.routing';
import { NavbarComponent } from './component/share/navbar/navbar.component';
import { FooterComponent } from './component/share/footer/footer.component';
import { SharedModule } from './component/share/share.module';
import { HomeComponent } from './component/home/home.component';
import { ConstantService } from 'src/app/services/constant.service';
import { GlobalService } from 'src/app/services/global.service';

/*PRIMENG*/
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
declarations: [
AppComponent,
DashboardComponent,
NavbarComponent,
HomeComponent,
FooterComponent
],
imports: [
BrowserModule,
HttpClientModule,
BrowserAnimationsModule,
FormsModule,
ReactiveFormsModule,
AppRoutes,
MenubarModule,
ButtonModule,
InputTextModule,
PanelModule,
SharedModule
],
providers: [
  ConstantService,
  GlobalService],
bootstrap: [AppComponent]
})
export class AppModule { }
