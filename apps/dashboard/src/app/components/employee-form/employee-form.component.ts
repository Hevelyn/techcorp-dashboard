import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from 'shared/src/lib/models/employee.model';
import { EmployeeService } from 'shared/src/lib/services/employee.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent implements OnInit {
  @Output() employeeAdded = new EventEmitter<Employee>();
  public form!: FormGroup;
  public isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<EmployeeFormComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.isLoading = true;

      const employee: Employee = this.form.value;
      this.employeeService.createEmployee(employee).subscribe({
        next: (res) => {
          const savedEmployee = { ...res, id: Date.now() };
          this.employeeService.saveToLocal(savedEmployee);
          this.employeeAdded.emit(savedEmployee);
          this.form.reset();
          this.isLoading = false;
          this.dialogRef.close();
        },
        error: () => {
          console.error('Failed to create employee');
          this.isLoading = false;
        },
      });
    }
  }
}
