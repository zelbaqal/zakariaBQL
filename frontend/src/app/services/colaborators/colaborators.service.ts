import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboratorsService {

  URL:string = "http://localhost:8080/api/colaborators";

  constructor(private http : HttpClient) { }

  getColaboratorImage(name: string): Observable<any> {
    return this.http.get<any>(`${this.URL}/${name}`);
  }

}
