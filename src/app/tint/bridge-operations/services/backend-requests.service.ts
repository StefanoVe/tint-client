import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendRequestsService {
  constructor(private http: HttpClient) {}

  scanBridge() {
    return this.http.get('https://discovery.meethue.com/');
  }
}
