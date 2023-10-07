import { prisma } from '@/prisma';
import { SubmissionInputObject } from '@/utils/inputValidation';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function SubmissionsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const parsedSubmissionInput = SubmissionInputObject.safeParse(req.body);

      if (!parsedSubmissionInput.success) {
        return res.status(400).json({ message: parsedSubmissionInput.error });
      }

      const { code, language, verdict, userId, problemId } =
        parsedSubmissionInput.data;

      const submission = await prisma.submission.create({
        data: {
          code,
          language,
          verdict,
          user: {
            connect: {
              id: userId as string,
            },
          },
          problem: {
            connect: {
              id: problemId as string,
            },
          },
        },
      });

      res.status(200).json({ submission });
    } else if (req.method == 'GET') {
      const submissions = await prisma.submission.findMany({
        where: {
          userId: req.query.userId as string,
          problemId: req.query.problemId as string,
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      });

      res.status(200).json({ submissions });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
