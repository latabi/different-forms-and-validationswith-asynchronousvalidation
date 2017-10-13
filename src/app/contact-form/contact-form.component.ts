import { people } from './people';


import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  title="simple-services"
  students;
peoples=[ new people(1, 'lata'),
  new people(2, 'praneet'),
  new people(3, 'diksha'),
  new people(4, 'prajkta')];

  
 submit(f)
  {
    console.log(f);
  }
constructor(service:CoursesService)
{
this.students=service.getcourses();
}
}
