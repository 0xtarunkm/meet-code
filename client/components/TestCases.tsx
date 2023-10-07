import { testCasesState } from '@/store/selectors/problemSelector';
import { useRecoilValue } from 'recoil';

export default function TestCases({
  index,
  setIndex,
}: {
  index: number;
  setIndex: Function;
}) {
  const testCases = useRecoilValue(testCasesState);

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
        {testCases.map((testCase, i) => (
          <div className={`test-case-btn`} key={i} onClick={() => setIndex(i)}>
            case {i + 1}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex flex-col mt-4">
        <div className="text-sm font-medium leading-5 text-white">Input</div>
        <div className="w-full mt-2 p-2 rounded bg-secondary text-white">
          <pre>{JSON.stringify(testCases[index].input, null, 2)}</pre>
        </div>
      </div>

      {/* Output */}
      <div className="flex flex-col mt-4">
        <div className="text-sm font-medium leading-5 text-white">Output</div>
        <div className="w-full mt-2 p-2 rounded bg-secondary text-white">
          <pre>{JSON.stringify(testCases[index].output, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
