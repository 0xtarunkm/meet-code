import { prisma } from '@/prisma';
import { ProblemInputObject } from '@/utils/inputValidation';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function ProblemHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const problems = await prisma.problem.findMany({
        include: {
          tags: true,
          testCases: true,
        },
      });

      return res.status(200).json(problems);
    }

    const parsedProblemInput = ProblemInputObject.safeParse(req.body);

    if (!parsedProblemInput.success) {
      return res.status(400).json({ message: parsedProblemInput.error });
    }

    const { title, description, difficulty, tags, testCases } =
      parsedProblemInput.data;

    if (req.method === 'POST') {
      // create the problem
      const problem = await prisma.problem.create({
        data: {
          title,
          description,
          difficulty,
          tags: {
            create: tags.map((tag) => ({ name: tag })),
          },
          testCases: {
            createMany: {
              data: testCases.map((testCase) => ({
                input: testCase.input,
                output: testCase.output,
              })),
            },
          },
        },
        include: {
          testCases: true, // Include test cases in the response
        },
      });

      return res.status(200).json({ message: 'Success', data: problem });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
