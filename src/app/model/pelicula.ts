export interface Pelicula {
    id: string,
    titulo: string,
    year: number,
    coordenadas: {
        lat: number,
        long: number,
    },
    premio: boolean,
    imagen: string,
    idDirector: string

}