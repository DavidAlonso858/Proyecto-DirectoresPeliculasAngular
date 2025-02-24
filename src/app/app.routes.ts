import { Routes } from '@angular/router';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { DirectoresComponent } from './components/directores/directores.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

export const routes: Routes = [
    {
        path: '', component: PresentacionComponent,
    },
    { path: 'directores', component: DirectoresComponent },
    { path: 'peliculas', component: PeliculasComponent }
];
