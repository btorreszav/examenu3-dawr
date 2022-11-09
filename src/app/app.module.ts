import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Tab } from './tab/tab.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Tab],
  bootstrap: [AppComponent],
})
export class AppModule {}
