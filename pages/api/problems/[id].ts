import { prisma } from '@/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function ProblemHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != 'GET') {
    return res.status(400).json({ message: 'Invalid method' });
  }

  try {
    const problemId = req.query.id;

    const problem = await prisma.problem.findUnique({
      where: {
        id: problemId as string,
      },
      include: {
        tags: true,
        testCases: true,
      },
    });

    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }

    return res.status(200).json(problem);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
