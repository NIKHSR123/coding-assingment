import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecruiterPortalService {

  url = 'http://10.236.97.106:3000';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get(this.url + '/posts').
      pipe(map(res => {
        return res;
      }));
  }
}
