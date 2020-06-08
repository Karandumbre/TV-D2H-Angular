import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { User } from './user.model';
import { Observable, Subject } from 'rxjs';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public refresh = new Subject<string>();
  public currentUser: User = {
    id: '',
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Balance: 0,
    CurrentSubscription: {
      Packs: [],
      Services: [],
      Channels: []
    }
  };
  constructor(private http: HttpClient, private httpService: HttpService) { }

  refreshData() {
    this.refresh.next('refresh');
  }

  createUser(user: User): Observable<any> {
    return this.httpService.call(environment.apiBaseUrl, 'POST', user);
  }

  UpdateUserDetails(data) {
    return this.httpService.call(`${environment.apiBaseUrl}/${data.id}`, 'PUT', data);
  }

  recharge(id, Balance) {
    return this.httpService.call(`${environment.apiBaseUrl}/${id}`, 'PUT', { ...this.currentUser, Balance });
  }

  getUserDetails(id): Observable<User> {
    return this.httpService.call(`${environment.apiBaseUrl}/${id}`, 'GET', '');
  }

  fetchDTHData(name): Observable<any> {
    return this.httpService.call(`${environment.serveUri}/${name}`, 'GET', '');
  }

  getDthService(id): Observable<any> {
    return this.httpService.call(`${environment.serveUri}/${id}`, 'GET', '');
  }

  deleteUser(id): Observable<User> {
    return this.httpService.call(`${environment.apiBaseUrl}/${id}`, 'DELETE', '');
  }
}
