import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  studentCollection: Array<object> = [];
  studentRecord: object;

  studno: number;
  studfname: string;
  studlname: string;
  studprog: string;
  studyr: number;

  printing = false;

  addStudentEntry(): boolean {
    return true;
  }

  listStudents(): void{
    this.printing = true;
    
  }

  clearValues(): void{
    this.studno = null;
    this.studfname = null;
    this.studlname = null;
    this.studprog = null;
    this.studyr = null;
  }

  onSubmit(input){
    console.log(input);
    this.printing = false;
    
    this.studentRecord = {
      studNumber: input.value.studno,
      studFirstName: input.value.studfname,
      studLastName: input.value.studlname,
      studProgram: input.value.studprog,
      studYear: input.value.studyr
    };
    console.log(this.studentRecord);
    this.studentCollection.push(this.studentRecord);
    
    input.reset();
    this.listStudents();
    
  }

}