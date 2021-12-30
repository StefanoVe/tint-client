import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendRequestsService } from '../services/backend-requests.service';

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.scss'],
})
export class ScanResultComponent implements OnInit {
  scanResult$: Observable<any> = this._backend.scanBridge();

  constructor(private _backend: BackendRequestsService) {}

  ngOnInit(): void {}

  connect(bridgeIp: string): void {
    localStorage.setItem('tint.bridge', bridgeIp);
  }
}
