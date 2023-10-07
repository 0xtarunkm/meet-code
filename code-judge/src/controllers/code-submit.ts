import { Request, Response } from 'express';
import { deleteFile, generateFile } from '../utils/generate-file';
import { executeCode } from '../utils/execute-code';

export const runCode = async (req: Request, res: Response) => {
  try {
    const { code, language, input, output } = req.body;
    let accepted: boolean = false;

    const filePath: string = await generateFile(language, code);

    try {
      const result = await executeCode(filePath);

      // Remove leading/trailing whitespace and convert to arrays
      const cleanedOutput: string[] = (output as string)
        .replace(/[\[\]]/g, '')
        .split(',')
        .map((item: string) => item.trim());
      const cleanedResult: string[] = result
        .replace(/[\[\]]/g, '')
        .split(',')
        .map((item: string) => item.trim());

      // Check if the output matches the expected result
      const isMatching: boolean =
        JSON.stringify(cleanedOutput) === JSON.stringify(cleanedResult);

      if (isMatching) {
        accepted = true;
      }

      await deleteFile(filePath);

      res.status(200).json({
        message: 'Code executed successfully',
        accepted,
        code,
        input,
        cleanedOutput,
        cleanedResult,
      });
    } catch (error: any) {
      await deleteFile(filePath);
      res.status(500).json({
        error: error.message || 'An error occurred while executing the code.',
      });
    }
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
};
