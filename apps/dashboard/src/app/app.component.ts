import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { Employee } from 'shared/src/lib/models/employee.model';
import { EmployeeService } from 'shared/src/lib/services/employee.service';

@Component({
  imports: [
    EmployeeListComponent,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  openEmployeeForm(): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '400px',
      disableClose: true,
    });

    dialogRef.componentInstance.employeeAdded.subscribe(
      (employee: Employee) => {
        this.employees = [employee, ...this.employees];
        dialogRef.close();
      }
    );
  }
}
