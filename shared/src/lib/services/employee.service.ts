import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private localEmployees: Employee[] = [];

  constructor(private http: HttpClient) {}

  getLocalEmployees(): Employee[] {
    const data = localStorage.getItem('employees');
    return data ? JSON.parse(data) : [];
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl).pipe(
      map((apiEmployees: any) => {
        const local = this.getLocalEmployees();
        return [...local, ...apiEmployees];
      })
    );
  }
  addEmployee(employee: Employee): void {
    const newEmployee = { ...employee, id: Date.now() };
    this.localEmployees.unshift(newEmployee);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  saveToLocal(employee: Employee): void {
    const current = this.getLocalEmployees();
    current.unshift(employee);
    localStorage.setItem('employees', JSON.stringify(current));
  }
}
