
export interface Ticket {
  id: number;
  titulo: string;
  descripcion: string;
  estado: 'Abierto' | 'Cerrado';
  fechaCreacion: Date;
}
