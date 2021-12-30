import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanResultComponent } from './scan-result/scan-result.component';
import { scan } from 'rxjs';

@NgModule({
  declarations: [ScanResultComponent],
  imports: [CommonModule],
  exports: [ScanResultComponent],
})
export class BridgeOperationsModule {}
