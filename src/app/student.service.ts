import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Student } from './Student/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/students/';

  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get<string[]>(`${this.apiUrl}`);
  }  
  getById(id: number): Observable<any> {
    return this.http.get<Student>(`${this.apiUrl}getById/${id}`);

  }
  updateStudent(updatedData: any): Observable<any> {
    const id = updatedData.id;
    const updateUrl = `${this.apiUrl}update/${id}`;
    return this.http.put(updateUrl, updatedData, { responseType: 'text' }) 
    .pipe(
      catchError((error) => {
        console.error('Error in updateStudent:', error);
        return throwError('An error occurred during the update operation.');
      })
    );
  }  
  deleteStudent(student_id:number):Observable<any>{
    const deleteUrl = `${this.apiUrl}delete/${student_id}`;
    return this.http.delete(deleteUrl, { responseType: 'text' });
  }  
}
