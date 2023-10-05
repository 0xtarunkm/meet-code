import * as amqp from 'amqplib';

// RabbitMQ connection settings
const rabbitMQHost = 'localhost'; // Change to your RabbitMQ server address
const rabbitMQPort = 5673; // Default RabbitMQ port
const queueName = 'code_submission_queue'; // Name of the RabbitMQ queue

export const publishCode = async (code: string, input: string[]) => {
  try {
    const connection = await amqp.connect(
      `amqp://${rabbitMQHost}:${rabbitMQPort}`
    );
    const channel = await connection.createChannel();

    // Ensure the queue exists
    await channel.assertQueue(queueName, { durable: false });

    // Publish the code and input data to the queue
    const message = JSON.stringify({ code, input });
    channel.sendToQueue(queueName, Buffer.from(message));

    console.log(`Sent code and input to ${queueName}:`);
    console.log(`Code: ${code}`);
    console.log(`Input: ${input}`);

    // Close the channel and connection
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error publishing code and input:', error);
  }
};
