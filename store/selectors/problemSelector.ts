import { selector } from 'recoil';
import { problemState } from '../atoms/problemAtom';

export const testCasesState = selector({
  key: 'testCasesState',
  get: ({ get }) => {
    const testCases = get(problemState).testCases;
    return testCases;
  },
});
