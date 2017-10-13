import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent  {
form;

  constructor(fb:FormBuilder) { 
    this.form=fb.group({
    name:['',Validators.required],
    // TemplateValidation:fb.group({
    //   username:[],
    //   password:[]
    // })
  });
  }
  get name()
  {
    return this.form.get('name');
  }



}
