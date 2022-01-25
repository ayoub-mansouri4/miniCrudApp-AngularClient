import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlServerAPi:string=environment.urlServerAPi;
  constructor(private http:HttpClient) { }

  public getAllusers():Observable<User[]>{
    return this.http.get<User[]>(`${this.urlServerAPi}/user/all`);
  }
  public addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.urlServerAPi}/user/add`,user);
  }
  public updateUser(user:User):Observable<User>{
    return this.http.put<User>(`${this.urlServerAPi}/user/update`,user);
  }
  public deleteUser(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlServerAPi}/user/del/${id}`);
  }
}
