import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-employee-form-modal',
  templateUrl: './employee-form-modal.component.html',
  styleUrl: './employee-form-modal.component.scss',
  imports: [CommonModule, EmployeeFormComponent],
})
export class EmployeeFormModalComponent {
  constructor(private dialogRef: MatDialogRef<EmployeeFormModalComponent>) {}

  onEmployeeAdded(employee: any): void {
    this.dialogRef.close(employee);
  }
}
