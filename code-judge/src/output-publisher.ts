// src/publishers/rabbitmq-output-publisher.ts
import * as amqp from 'amqplib';

const rabbitMQHost = 'localhost'; // Change to your RabbitMQ server address
const rabbitMQPort = 5672; // Default RabbitMQ port
const outputQueueName = 'output_queue';

async function publishCodeOutput(output: string) {
  try {
    const connection = await amqp.connect(
      `amqp://${rabbitMQHost}:${rabbitMQPort}`
    );
    const channel = await connection.createChannel();

    // Ensure the output queue exists
    await channel.assertQueue(outputQueueName, { durable: false });

    // Publish the output to the output queue
    const message = Buffer.from(output);
    channel.sendToQueue(outputQueueName, message);

    console.log('Sent code output to output queue:');
    console.log('Output:', output);

    // Close the channel and connection
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error publishing code output:', error);
  }
}

export { publishCodeOutput };
