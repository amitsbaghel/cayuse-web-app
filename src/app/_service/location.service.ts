import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private dataUrl: string = 'http://localhost:35665/api/location'

  constructor(private http: HttpClient) { }

  // Get location details
   getDetailsByZipCode(zipcode: string): Observable<string> {
    let params = new HttpParams();
    params = params.append('zipcode', zipcode);
    return this.http.get<string>(this.dataUrl,{params: params})
  }
}
