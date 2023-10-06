// src/job-generator.ts
import { BatchV1Api, KubeConfig } from '@kubernetes/client-node';

// Load the Kubernetes configuration from the default location or a kubeconfig file
const kc = new KubeConfig();
kc.loadFromDefault();

// Create an instance of the Kubernetes BatchV1Api
const batchApi = kc.makeApiClient(BatchV1Api);

async function createK8sJob(code: string, input: string) {
  const jobName = `code-execution-job-${Date.now()}`;
  const containerName = 'code-execution-container';

  // Define the Kubernetes Job specification
  const jobSpec = {
    apiVersion: 'batch/v1',
    kind: 'Job',
    metadata: { name: jobName },
    spec: {
      template: {
        spec: {
          containers: [
            {
              name: containerName,
              image: 'node:14', // Use a Node.js image
              command: ['node', '-e', ''], // Empty initial command
              // Add environment variables for code and input
              env: [
                { name: 'CODE', value: code },
                { name: 'INPUT', value: input },
              ],
            },
          ],
          restartPolicy: 'Never',
        },
      },
      backoffLimit: 0,
    },
  };

  try {
    const response = await batchApi.createNamespacedJob('default', jobSpec);
    console.log(
      // @ts-ignore
      `Kubernetes Job created successfully: ${response.body.metadata.name}`
    );
  } catch (error) {
    console.error('Error creating Kubernetes Job:', error);
  }
}

// Export the createK8sJob function for use in the RabbitMQ consumer
export { createK8sJob };
