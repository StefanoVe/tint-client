import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanResultComponent } from './bridge-operations/scan-result/scan-result.component';

const routes: Routes = [
  {
    path: 'scan',
    component: ScanResultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TintRoutingModule {}
