import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [StudentService]


})
export class ViewComponent implements OnInit {
  
  students: any[] = [];
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
    this.getStudents();

  }

  getStudents(): void {
    this.studentService.getAllStudents().subscribe((data) => {
      this.students = data;
      console.log(this.students)
    });
  }
  editStudent() {
    console.log("EDIT");
  }
  deleteStudent() {
    console.log("DELETE");
  }
}