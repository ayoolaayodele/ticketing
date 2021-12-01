import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@aytickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
