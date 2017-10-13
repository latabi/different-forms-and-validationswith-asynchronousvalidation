import { UserNameValidators } from './../username.validators';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.css']
})
export class AsynchronousComponent  {
form= new FormGroup({
  username:new FormControl('',[Validators.required,UserNameValidators.CannotContainSpace,UserNameValidators.shouldBeUnique]),
 password:new FormControl('',Validators.required) 
});
get username()
  {
    return this.form.get('username');
  }

get password()
 { return this.form.get('password');


}
login()
{
  this.form.setErrors({
    invalidlogin:true
  });
}
}

  


