import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanResultComponent } from './scan-result/scan-result.component';
import { HttpClientModule } from '@angular/common/http';

import { BackendRequestsService } from './services/backend-requests.service';
import { RoundedBtnComponent } from '../components/buttons/rounded-btn/rounded-btn.component';
import { ButtonsModule } from '../components/buttons/buttons.module';

@NgModule({
  declarations: [ScanResultComponent],
  imports: [CommonModule, HttpClientModule, ButtonsModule],
  exports: [ScanResultComponent],
  providers: [BackendRequestsService],
})
export class BridgeOperationsModule {}
