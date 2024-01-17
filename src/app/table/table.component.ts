import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../student.service';
import { Student } from '../Student/student';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  students: any[] = [];
  dataSource = new MatTableDataSource<Student>();

  displayedColumns: string[] = ['id', 'name', 'email', 'mobile', 'address', 'degree', 'subject', 'technicalSkill', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studentService: StudentService, private dialog: MatDialog, private route:Router) { }

  ngOnInit(): void {
    this.getStudents();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getStudents(): void {
    this.studentService.getAllStudents().subscribe((data) => {
      this.students = data;
      console.log(this.students)
      this.dataSource.data = this.students;
    });
  }

  editStudent(element: any) {

      const id = element.student_id; 
      console.log("Edit");
      this.route.navigate(['/form', id]);
      // const dialogRef = this.dialog.open(EditDialogComponent, {
      //   width: '600px',
      //   data: { id, ...element }, 
      // });

      // dialogRef.afterClosed().subscribe((result) => {
      //   if (result) {
      //     console.log('Updated Data:', result);
      //   }
      // });
  }
  deleteStudent(element: any) {
    console.log("Delete");
    const studentId = element.student_id;
    this.studentService.deleteStudent(studentId).subscribe(
      (response) => {
        console.log('Delete successful:', response);
        // alert("Deleted successfully");
        Swal.fire({
          title: 'Success!',
          text: 'Deleted successfully.',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed || result.dismiss === Swal.DismissReason.backdrop) {
            // Reload the page
            window.location.reload();
          }
        });
        
      },
      (error) => {
        console.error('Error deleting data:', error);
      }
    );
  }
}

