import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublishService {

  constructor(private http: HttpClient) { }

  // file from event.target.files[0]
  uploadFile(file: Blob): Observable<HttpEvent<any>> {

    let formData = new FormData();
    formData.append('upload', file);

    let params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
    };
    const url = 'http://localhost:8080/publish';
    const req = new HttpRequest('POST', url, formData, options);
    return this.http.request(req);
  }
}
