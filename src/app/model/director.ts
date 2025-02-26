export interface Director {
    id: string,
    nombre: string,
    edad: number,
    imagen: string
    coordenadas: {
        lat: number,
        long: number
    }
}
