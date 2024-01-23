import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MagazineDetails, MagazineInfo } from '../models/magazine-request';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MagazineService {
  usersUrl: string = 'https://reqres.in/api/users';
  constructor(private httpClient: HttpClient) {}
  
  postMagazineInfo$(details: MagazineInfo): Observable<MagazineDetails> {
    return this.httpClient.post<MagazineDetails>(this.usersUrl, details);
  }
}
