import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

const outPath = path.join(__dirname, 'outputs');

if (!fs.existsSync(outPath)) {
  fs.mkdirSync(outPath, { recursive: true });
}

export const executeCode = (filePath: string) => {
  return new Promise((resolve, reject) => {
    const jobId = path.basename(filePath).split('.')[0];

    const outFilePath = path.join(outPath, `${jobId}.out`);

    const command = `g++ ${filePath} -o ${outFilePath} && ./${outFilePath}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};
