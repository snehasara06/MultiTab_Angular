import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from '../../app/student.service'; // Import your student service
import { Student } from '../Student/student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  // Properties for form fields
  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public address: string;
  public state: string;
  public pincode: string;

  // MatDialogRef - class provided by Angular Material 
  //                represents a reference to a dialog opened by the MatDialog service. 
  //  control & interact with the dialog from within  Angular component. 

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.studentService.getById(this.data.id).subscribe((student:Student) => {
      this.firstName = student.firstName;
      this.lastName = student.lastName;
      this.email = student.email;
      this.phone = student.phone;
      this.address = student.address;
      this.state = student.state;
      this.pincode = student.pincode;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const updatedData = {
      id: this.data.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      state: this.state,
      pincode: this.pincode
    };

    this.studentService.updateStudent(updatedData).subscribe(
      (response) => {
        console.log('Update successful:', response);
        // alert("Updated successfully");
        Swal.fire({
          title: 'Success!',
          text: 'Updated successfully.',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
            // Reload the page
            window.location.reload();
          }
        });
        // window.location.reload();
        this.dialogRef.close(updatedData);
      },
      (error) => {
        console.error('Error updating data:', error);
      }
    );
    this.dialogRef.close(updatedData);
  }
}
