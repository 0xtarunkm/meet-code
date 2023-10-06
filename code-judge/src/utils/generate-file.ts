import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';

const codeDir = path.join(__dirname, 'codes');

if (!fs.existsSync(codeDir)) {
  fs.mkdirSync(codeDir, { recursive: true });
}

export const generateFile = async (format: string, code: string) => {
  const jobId = uuid();
  const fileName = `${jobId}.${format}`;
  const filePath = path.join(codeDir, fileName);

  await fs.writeFileSync(filePath, code);

  return filePath;
};
