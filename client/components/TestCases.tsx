import { testCasesState } from '@/store/selectors/problemSelector';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

export default function TestCases() {
  const testCases = useRecoilValue(testCasesState);
  const [index, setIndex] = useState(0);

  return (
    <div className="px-4">
      <div className="flex h-10 items-center space-x-6">
        <div className="relative flex h-full flex-col justify-center cursor-pointer">
          <div className="test-sm font-medium leading-5 text-white">
            Testcases
          </div>
          <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {testCases.map((testCase, index) => (
          <div
            className="test-case-btn"
            key={index}
            onClick={() => setIndex(index)}
          >
            case {index + 1}
          </div>
        ))}
      </div>

      {/* input */}
      <div className="flex flex-col mt-4">
        <div className="text-sm font-medium leading-5 text-white">Input</div>
        <div className="w-full h-14 mt-2 p-2 rounded bg-secondary text-white">
          {testCases[index].input.join(', ')}
        </div>

        {/* output */}
        <div className="flex flex-col mt-4">
          <div className="text-sm font-medium leading-5 text-white">Output</div>
          <div className="w-full h-14 mt-2 p-2 rounded bg-secondary text-white">
            {testCases[index].output.join(', ')}
          </div>
        </div>
      </div>
    </div>
  );
}
