export class Student {
    id: number = 0;
    sNo:number=0;
    firstName: string = '';
    lastName: string = '';

    email: string = '';
    phone: string = '';

    dob:string='';
    gender: string = '';

    address:string='';
    city:string='';
    state:string='';
    pincode:string='';

    degree:string='';
    year:string='';
    subject:string='';
    board:string='';
    percentage:string='';

    courses: { id: number, course: string }[] = [];
    fileData :[]
    
}
export interface Course {
    course_id: number;
    name: string;
  }