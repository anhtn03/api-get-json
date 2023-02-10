import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  private readonly api: string
  constructor(private httpClient: HttpClient) {
    this.api = new URL(`/api`, environment.apiUrl).href
  }
  
  getJson(req: string) {
    return this.httpClient.post<string>(this.api + `/get-json`, { req })
  }
}
