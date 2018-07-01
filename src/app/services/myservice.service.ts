import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  getImageById(imageId):Observable<any>{
    return this.http.get('http://localhost:3353/api/image/'+imageId)
    
  }

}
