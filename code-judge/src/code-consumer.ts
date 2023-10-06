import * as amqp from 'amqplib';
import { createK8sJob } from './job-generator';

// RabbitMQ connection settings
const rabbitMQHost = 'localhost'; // Change to your RabbitMQ server address
const rabbitMQPort = 5673; // Default RabbitMQ port
const queueName = 'code_submission_queue'; // Name of the RabbitMQ queue

async function startRabbitMQConsumer() {
  try {
    const connection = await amqp.connect(
      `amqp://${rabbitMQHost}:${rabbitMQPort}`
    );
    const channel = await connection.createChannel();

    // Ensure the queue exists
    await channel.assertQueue(queueName, { durable: false });

    console.log('Waiting for code submissions. To exit, press CTRL+C');

    channel.consume(
      queueName,
      async (msg) => {
        // @ts-ignore
        const { code, input } = JSON.parse(msg.content.toString());

        // Create a Kubernetes Job to execute the code
        // Call the job generator function from here
        // For example: await createK8sJob(code);
        await createK8sJob(code, input);

        console.log('Received code:');
        console.log(code);
      },
      { noAck: true }
    );
  } catch (error) {
    console.error('Error starting RabbitMQ consumer:', error);
  }
}

export { startRabbitMQConsumer };
