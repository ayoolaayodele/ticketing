import Queue from 'bull';
import { ExpirationCompletePublisher } from '../events/publishers/expiration-complete-publisher';
import { natsWrapper } from '../nats-wrapper';

interface payload {
  orderId: string;
}

const expirationQueue = new Queue<payload>('order:expiration', {
  redis: {
    host: process.env.REDIS_HOST,
  },
});

//The job is similar to the Message in node-nats-streaming
expirationQueue.process(async (job) => {
  new ExpirationCompletePublisher(natsWrapper.client).publish({
    orderId: job.data.orderId,
  });
});

export { expirationQueue };
