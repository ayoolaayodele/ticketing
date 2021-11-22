import { Publisher, Subjects, TicketUpdatedEvent } from '@aytickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
