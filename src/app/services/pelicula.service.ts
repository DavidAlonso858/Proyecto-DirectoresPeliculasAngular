import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../model/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private url = 'http://localhost:3001/almacenPeliculas';

  constructor(private http: HttpClient) { }


  getPeliculas() {
    return this.http.get<Pelicula[]>(this.url);
  }

  addPelicula(pelicula: Pelicula) {
    return this.http.post(this.url, pelicula);
  }
  
  deleteEvento(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
