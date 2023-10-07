import { ProblemInput } from '@/utils/inputValidation';
import React from 'react';

export default function ProblemExamples({
  problem,
}: {
  problem: ProblemInput;
}) {
  return (
    <div>
      {problem.testCases?.map((testCase, index) => (
        <div key={index} className=" bg-secondary p-4 rounded text-sm mt-4">
          <p className="font-semibold text-lg mb-2">Example {index + 1}:</p>

          {/* Display structured input and output as JSON */}
          <div className="mb-2">
            <p>Input:</p>
            <pre>{JSON.stringify(testCase.input, null, 2)}</pre>
          </div>
          <div>
            <p>Output:</p>
            <pre>{JSON.stringify(testCase.output, null, 2)}</pre>
          </div>
        </div>
      ))}
    </div>
  );
}
