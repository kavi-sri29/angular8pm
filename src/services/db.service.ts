import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private _http: HttpClient) { }

  saveUsers(myUsers: any[]): Observable<any>{
    return this._http.post("https://databaseconnection-ac9bf-default-rtdb.firebaseio.com/data.json", myUsers)
  }
}
