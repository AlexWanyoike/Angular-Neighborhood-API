import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  getNeighborhoodList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/neighbors/');
  }

  addNeighborhood(val:any){
    return this.http.post(this.APIUrl + '/api/neighbors/',val);
  }

  updateneighborhood(val:any){
    return this.http.put(this.APIUrl + '/api/update/neighbors/',val);
  }

  deleteneighborhood(val:any){
    return this.http.delete(this.APIUrl + '/api/delete/'+val);
  }

  getAllNeighborhoodNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'neighbors/');
  }




}
