import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FindByIdComponent } from './find-by-id/find-by-id.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: '', component: HomePageComponent },
  { path: 'employee/add', component: EmployeeFormComponent },
  { path: 'employee/update', component: EmployeeUpdateComponent },
  { path: 'employee/delete', component: EmployeeDeleteComponent },
  { path: 'employee/find-by-id', component: FindByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router){

  }

}
