import { Publisher, Subjects, TicketCreatedEvent } from '@aytickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
