import { ProblemInput } from '@/utils/inputValidation';

export default function ProblemDescription({
  problem,
}: {
  problem: ProblemInput;
}) {
  const difficultyColor =
    problem.difficulty === 'Easy'
      ? 'text-green-500'
      : problem.difficulty === 'Medium'
      ? 'text-yellow-500'
      : 'text-red-500';
  return (
    <div className="text-white">
      <div className="flex px-0 py-2 h-[calc(100vh-55px)] overflow-y-auto">
        <div className="mx-2">
          {/* Problem heading */}
          <div className="p-4">
            <div className="flex space-x-4 items-center">
              <div className="flex-1 mr-2 text-2xl font-medium">
                {problem.title}
              </div>
            </div>
            <div className="flex items-center mt-3 w-[500px]">
              <div
                className={`bg-gray-600 inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium ${difficultyColor}`}
              >
                {problem.difficulty}
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="">
              <p className="mt-3">{problem.description}</p>
            </div>

            {/* Examples */}

            {problem.testCases?.map((testCase, index) => (
              <div
                key={index}
                className=" bg-secondary p-4 rounded text-sm mt-4"
              >
                <p className="font-semibold text-lg mb-2">
                  Example {index + 1}:
                </p>

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

            {/* Constraints */}
            <div className="my-5 text-sm">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-white ml-5 list-disc">
                <li className="mt-2">
                  <code>2 ≤ nums.length ≤ 10</code>
                </li>

                <li className="mt-2">
                  <code>-10 ≤ nums[i] ≤ 10</code>
                </li>
                <li className="mt-2">
                  <code>-10 ≤ target ≤ 10</code>
                </li>
                <li className="mt-2 text-sm">
                  <strong>Only one valid answer exists.</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
