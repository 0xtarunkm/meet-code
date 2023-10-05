import { NextApiRequest, NextApiResponse } from 'next';
import { publishCode } from '../../../utils/publishToQueue';

export default async function SubmissionsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      // publish the code and input to the queue
      const { code, input } = req.body;

      const result = await publishCode(code, input);

      return res.status(200).json({ message: 'Success', data: result });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
