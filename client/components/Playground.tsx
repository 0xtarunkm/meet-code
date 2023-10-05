import React, { useState } from 'react';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import TestCases from './TestCases';
import SubmissionButtons from './SubmissionButtons';

export default function Playground() {
  const [code, setCode] = useState(`function solution() {
    // write your code here
}`);

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
          <TestCases />
          {/* Submit Button */}
          <SubmissionButtons code={code} />
        </div>
      </Split>
    </div>
  );
}
