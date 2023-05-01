import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first component/first.component';
import { InputBindingComponent } from './second component/input-binding/input-binding.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, InputBindingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
