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
    const submissionId = req.query.id;

    const submission = await prisma.submission.findUnique({
      where: {
        id: submissionId as string,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!submission) {
      return res.status(404).json({ message: 'Submission not found' });
    }

    return res.status(200).json(submission);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
