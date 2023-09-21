import React from 'react';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

export default function Playground() {
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
            value={`function solution() {
    // write your code here
}`}
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
              <div className="test-case-btn">case 1</div>
              <div className="test-case-btn">case 2</div>
              <div className="test-case-btn">case 3</div>
            </div>

            {/* input */}
            <div className="flex flex-col mt-4">
              <div className="text-sm font-medium leading-5 text-white">
                Input
              </div>
              <div className="w-full h-14 mt-2 p-2 rounded bg-secondary text-white"></div>

              {/* output */}
              <div className="flex flex-col mt-4">
                <div className="text-sm font-medium leading-5 text-white">
                  Output
                </div>
                <div className="w-full h-14 mt-2 p-2 rounded bg-secondary text-white"></div>
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
