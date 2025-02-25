import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Director } from '../model/director';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private url = 'http://localhost:3000/almacenDirectores';

  constructor(private http: HttpClient) { }

  getDirectores() {
    return this.http.get<Director[]>(this.url);
  }
}
