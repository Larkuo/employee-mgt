import { Component } from '@angular/core';
import  { Router } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { FindByIdComponent } from './find-by-id/find-by-id.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  employees: EmployeeListComponent;
  constructor(private router: Router){
    this.title = 'employee-mgt';
  }
  



}
