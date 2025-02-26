import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PeliculaService } from '../../../services/pelicula.service';
import { Pelicula } from '../../../model/pelicula';
import { Director } from '../../../model/director';
import { DirectorService } from '../../../services/director.service';

@Component({
  selector: 'app-editar-pelicula',
  imports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent implements OnInit {

  peliculaForm: FormGroup;
  directores: Director[] = [];
  peliculaId!: string; // ! evitar el null o undefined

  constructor(private titulo: Title, private fb: FormBuilder, private peliculaService: PeliculaService, private directorService: DirectorService,
    private route: ActivatedRoute, private router: Router
  ) {
    this.titulo.setTitle('NightmareBox-Editar');

    this.peliculaForm = this.fb.group({
      titulo: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      premio: [false],
      imagen: ['', Validators.required],
      idDirector: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.peliculaId = this.route.snapshot.paramMap.get('id')!; // ! evitar el null o undefined

    this.directorService.getDirectores().subscribe(dire => {
      this.directores = dire;
    });

    // para que se rellene al entrar
    this.peliculaService.getPeliculaById(this.peliculaId).subscribe((peli) => {
      this.peliculaForm.patchValue({
        titulo: peli.titulo,
        year: peli.year,
        premio: peli.premio,
        imagen: peli.imagen,
        idDirector: peli.idDirector
      });
    });
  }

  onSubmit() {
    if (this.peliculaForm.valid) {
      const updatedPelicula: Pelicula = {
        id: this.peliculaId,
        ...this.peliculaForm.value
      }

      this.peliculaService.editarPelicula(updatedPelicula).subscribe(() => {
        alert('Película actualizada con éxito');
        this.router.navigate(['/peliculas']);
      });
    }
  }
}
