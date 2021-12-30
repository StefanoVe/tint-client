import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ScanResultComponent } from './bridge-operations/scan-result/scan-result.component';
import { TintRoutingModule } from './tint-routing.module';

@NgModule({
  declarations: [HomeComponent, ScanResultComponent],
  imports: [CommonModule, TintRoutingModule],
  exports: [HomeComponent],
})
export class TintModule {}
