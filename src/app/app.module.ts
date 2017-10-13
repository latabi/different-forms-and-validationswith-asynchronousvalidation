import { CoursesService } from './courses.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TemplateValidationComponent } from './template-validation/template-validation.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    TemplateValidationComponent,
    AsynchronousComponent,
    FormbuilderComponent

  ],
  imports: [
    BrowserModule,
        FormsModule,
        ReactiveFormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
