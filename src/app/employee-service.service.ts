import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmployeeServiceService {

  private employeesUrl: string;
  private employeeUrl: string;

  constructor(private http: HttpClient) {
    this.employeesUrl = 'http://localhost:8080/api/v1/employees';
    this.employeeUrl = 'http://localhost:8080/api/v1/employee/';
   }

  //FIND ALL
  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }
  //FIND BY ID 
  public findById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.employeeUrl + id);
  }
  //SAVE
  public save(employee: Employee){
    this.http.post<Employee>(this.employeesUrl, employee);
  }
  //EDIT
  public edit(employee: Employee, id: number){
    this.http.put<Employee>(this.employeeUrl+id, employee);
  }
  //DELETE
  public delete(id: number){
    this.http.delete<Employee>(this.employeeUrl+id);
  }
}
