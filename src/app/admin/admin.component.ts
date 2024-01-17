import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  emailData: any;
  editableData: any;
  isEditMode: boolean = false;

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.searchForm = this.fb.group({
      email: ['', Validators.required],

    })
  }
 
  editStudent(): void {
    // Implement the edit functionality
    console.log('Edit student:', this.emailData);
    this.isEditMode = true;
    this.editableData = { ...this.emailData };


  }

  deleteStudent(): void {
    console.log('Delete student with email:', this.emailData);
   
  }
 
  saveChanges() {    
  //   this.studentService.updateStudent(this.editableData.email, this.editableData).subscribe(
  //     (response) => {
  //       console.log('Update successful:', response);

  //       this.emailData = { ...this.editableData };

  //       this.isEditMode = false;
  //       confirm("Saved Successfully");
  //     },
  //     (error) => {
  //       console.error('Error updating data:', error);
  //     }
  //   );
  // }
}
}
