import { z } from 'zod';

export const SignupInputObject = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export type SignupInput = z.infer<typeof SignupInputObject>;

export const SigninInputObject = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
});

export type SignInInput = z.infer<typeof SigninInputObject>;

export const ProblemInputObject = z.object({
  id: z.string().optional(),
  title: z.string().min(3).max(100),
  description: z.string().min(3).max(1000),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']),
  tags: z.array(z.string()),
  testCases: z.array(
    z.object({
      input: z.string(),
      output: z.string(),
    })
  ),
});

export const SubmissionInputObject = z.object({
  code: z.string().min(1).max(10000),
  language: z.enum(['js']),
  verdict: z.enum(['Accepted', 'Wrong Answer', 'Time Limit Exceeded']),
  userId: z.string(),
  problemId: z.string(),
});

export type ProblemInput = z.infer<typeof ProblemInputObject>;
export type SubmissionInput = z.infer<typeof SubmissionInputObject>;
