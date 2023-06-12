import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private API_SERVER = "http://localhost:8082/api/v1/document";

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAllDocuments(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
}
