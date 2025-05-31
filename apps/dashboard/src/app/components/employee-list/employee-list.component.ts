import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from 'shared/src/lib/models/employee.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  @Input() employees: Employee[] = [];
}
