import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DepartmentRoutingModule } from './modules/department/department-routing.module';
import { DepartmentPageComponent } from './modules/department/department-page/department-page.component';
import { DepartmentModule } from './modules/department/department.module';
import { HttpClientModule } from '@angular/common/http';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { LibraryModule } from './modules/library/library.module';
import { StudentModule } from './modules/student/student.module';

import { HighchartsChartModule } from 'highcharts-angular';
import { AboutComponent } from './components/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    DepartmentModule,
    HttpClientModule,
    AttendanceModule,
    LibraryModule,
    StudentModule,
    HighchartsChartModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
