import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app component/app.component';
import { FirstComponent } from './first component/first.component';
import { InputBindingComponent } from './second component/input-binding/input-binding.component';
import { SliderComponent } from './slider component/slider/slider.component';
import { RegistrationComponent } from './registration component/registration/registration.component';
import { StudentsComponent } from './students component/students/students.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    InputBindingComponent,
    SliderComponent,
    RegistrationComponent,
    StudentsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
