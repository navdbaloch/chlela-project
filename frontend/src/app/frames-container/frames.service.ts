import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface FrameDetail {
  url: string;
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class FramesService {

  constructor(private http: HttpClient) { }

  getFrames(): Observable<FrameDetail[]> {
    return this.http.get(`${environment.apiUrl}/get-frames`).pipe(map((response) => {
      return (response as FrameDetail[]).map(frame => {
        return {
          ...frame,
          url: `${environment.apiUrl}/frames/${frame.url}.png`
        }
      });
    }));
  }
}
