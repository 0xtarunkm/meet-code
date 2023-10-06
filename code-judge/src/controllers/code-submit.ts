import { Request, Response } from 'express';
import { generateFile } from '../utils/generate-file';
import { executeCode } from '../utils/execute-code';

export const codeSubmit = async (req: Request, res: Response) => {
  try {
    const { code, language, input } = req.body;

    const filePath = await generateFile(language, code);

    const output = await executeCode(filePath);
    res.status(200).json({
      filePath,
      output,
    });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
};
