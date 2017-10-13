import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "@types/q";

export class UserNameValidators {
        static CannotContainSpace(control:AbstractControl):ValidationErrors|null
    {if ((control.value as  string).indexOf(' ')>=0)
    return {CannotContainSpace:true}

    return null;

}
static shouldBeUnique( control:AbstractControl):Promise<ValidationErrors|null>
{
    return new Promise((resolve,reject)=>{
        
    setTimeout(() =>{
        if(control.value==='puja')
        resolve ({shouldBeUnique:true}); 

       else resolve (null);
    },2000);
    });
    }
}



