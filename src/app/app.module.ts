import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TintModule } from './tint/tint.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TintModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
