import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeServiceService) {
    this.employee = new Employee();
   }

   onSubmit(){
     this.employeeService.save(this.employee)//.subscribe(result => this.gotoEmployeeList());
   }

   gotoEmployeeList(){
     this.router.navigate(['/employees']);
   }

  ngOnInit() {
  }

}
