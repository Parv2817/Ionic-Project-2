import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeService 
{
  constructor(private http: HttpClient) { }

  getShoes(): Observable<any[]> 
  {
    return this.http.get<any[]>("http://localhost:8887/shoes");
  }

  addShoe(shoe: any): Observable<any> 
  {
    return this.http.post<any>("http://localhost:8887/shoes", shoe);
  }

  updateShoe(shoe: any): Observable<any> 
  {
    return this.http.put<any>(`http://localhost:8887/shoes/${shoe.id}`, shoe);
  }

  deleteShoe(id: number): Observable<any> 
  {
    return this.http.delete<any>(`http://localhost:8887/shoes/${id}`);
  }

  login(user: any): Observable<any> 
  {
    return this.http.post<any>("http://localhost:8887/login", user);
  }

  signup(user: any): Observable<any> 
  {
    return this.http.post<any>("http://localhost:8887/signup", user);
  }
}
