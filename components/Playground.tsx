import React, { useState } from 'react';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { testCasesState } from '@/store/selectors/problemSelector';
import { useRecoilValue } from 'recoil';

export default function Playground() {
  const testCases = useRecoilValue(testCasesState);
  const [code, setCode] = useState(`function solution() {
    // write your code here
}`);
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col">
      <Split
        className="h-[calc(100vh-55px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            value={code}
            onChange={(value) => setCode(value)}
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: '16px' }}
          />
        </div>
        <div className="w-full overflow-auto">
          {/* heading */}
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
              <div className="text-sm font-medium leading-5 text-white">
                Input
              </div>
              <div className="w-full h-14 mt-2 p-2 rounded bg-secondary text-white">
                {testCases[index].input.join(', ')}
              </div>

              {/* output */}
              <div className="flex flex-col mt-4">
                <div className="text-sm font-medium leading-5 text-white">
                  Output
                </div>
                <div className="w-full h-14 mt-2 p-2 rounded bg-secondary text-white">
                  {testCases[index].output.join(', ')}
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-between py-2 mx-4 text-white z-20 sticky bottom-[-2px] bg-primary">
            <div className="bg-secondary px-2 py-1 rounded-md">
              <p>console</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 sm:px-3 sm:py-1 bg-secondary text-white hover:bg-green-600 sm:font-semibold rounded-md transition duration-300 ease-in-out text-sm sm:text-base">
                Run
              </button>
              <button className="p-1 sm:px-3 sm:py-1 bg-secondary text-white hover:bg-green-600 sm:font-semibold rounded-md transition duration-300 ease-in-out text-sm sm:text-base">
                Submit
              </button>
            </div>
          </div>
        </div>
      </Split>
    </div>
  );
}
