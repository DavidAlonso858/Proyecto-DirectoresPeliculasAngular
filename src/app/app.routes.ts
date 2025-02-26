import { Routes } from '@angular/router';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { DirectoresComponent } from './components/directores/directores.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { CrearPeliculaComponent } from './components/peliculas/crear-pelicula/crear-pelicula.component';
import { EditarPeliculaComponent } from './components/peliculas/editar-pelicula/editar-pelicula.component';

export const routes: Routes = [
    {
        path: '', component: PresentacionComponent,
    },
    { path: 'directores', component: DirectoresComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'crearPeli', component: CrearPeliculaComponent },
    { path: 'peliculas/editar/:id', component: EditarPeliculaComponent }
];
