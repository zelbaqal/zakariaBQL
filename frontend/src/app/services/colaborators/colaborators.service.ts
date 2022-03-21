import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantVariables } from '../ConstantVariables';

@Injectable({
  providedIn: 'root'
})
export class ColaboratorsService {


  constructor(private http : HttpClient) { }

  getColaboratorImage(name: string): Observable<any> {
    return this.http.get<any>(`${ConstantVariables.DOMAIN}/api/colaborators/${name}`);
  }

  getColaboratorsImages():Observable<any>{
    return this.http.get(`${ConstantVariables.DOMAIN}/api/colaborators`);
  }

}
