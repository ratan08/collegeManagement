import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendancePageComponent } from './attendance-page/attendance-page.component';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AttendanceDailogComponent } from './attendance-dailog/attendance-dailog.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';


@NgModule({
  declarations: [AttendancePageComponent, AttendanceDailogComponent, AttendanceFormComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AttendanceModule { }
