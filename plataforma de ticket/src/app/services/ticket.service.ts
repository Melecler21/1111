
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [];
  private nextId = 1;

  obtenerTickets(): Ticket[] {
    return this.tickets;
  }

  crearTicket(titulo: string, descripcion: string): void {
    const nuevoTicket: Ticket = {
      id: this.nextId++,
      titulo,
      descripcion,
      estado: 'Abierto',
      fechaCreacion: new Date()
    };
    this.tickets.push(nuevoTicket);
  }

  cerrarTicket(id: number): void {
    const ticket = this.tickets.find(t => t.id === id);
    if(ticket) {
      ticket.estado = 'Cerrado';
    }
  }
}
