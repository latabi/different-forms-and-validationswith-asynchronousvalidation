import { UserNameValidators } from './../username.validators';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-template-validation',
  templateUrl: './template-validation.component.html',
  styleUrls: ['./template-validation.component.css']
})
export class TemplateValidationComponent {
   submit(f)
  {
    console.log(f);
  }
form= new FormGroup({
  username:new FormControl('',[Validators.required,Validators.minLength(3),UserNameValidators.CannotContainSpace,UserNameValidators.shouldBeUnique]),
 password:new FormControl('',Validators.required) 
});
get username()
  {
    return this.form.get('username');
  }

get password()
 { return this.form.get('password');


}
}
