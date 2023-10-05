import { ProblemInput } from '@/utils/inputValidation';
import { atom } from 'recoil';

export const problemState = atom<ProblemInput>({
  key: 'problemState',
  default: {
    title: '',
    description: '',
    difficulty: 'Easy',
    tags: [],
    testCases: [],
  },
});
