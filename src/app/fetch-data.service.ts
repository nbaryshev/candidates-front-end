import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get("http://127.0.0.1:5000/fetch-candidates")
      .toPromise()
      .then((resp:any) => resp.data)
      .catch(err => console.error("Got an error", err))
  }
}
