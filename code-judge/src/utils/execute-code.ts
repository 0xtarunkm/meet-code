import { exec } from 'child_process';

export const executeCode = (filePath: string) => {
  return new Promise<string>((resolve, reject) => {
    exec(`node ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
};
