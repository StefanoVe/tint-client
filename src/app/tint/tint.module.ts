import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ScanResultComponent } from './bridge-operations/scan-result/scan-result.component';
import { TintRoutingModule } from './tint-routing.module';
import { BridgeOperationsModule } from './bridge-operations/bridge-operations.module';
import { ButtonsModule } from './components/buttons/buttons.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TintRoutingModule,
    BridgeOperationsModule,
    ButtonsModule,
  ],
  exports: [HomeComponent],
})
export class TintModule {}
