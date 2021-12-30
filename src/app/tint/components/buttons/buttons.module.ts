import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundedBtnComponent } from './rounded-btn/rounded-btn.component';

@NgModule({
  declarations: [RoundedBtnComponent],
  imports: [CommonModule],
  exports: [RoundedBtnComponent],
})
export class ButtonsModule {}
