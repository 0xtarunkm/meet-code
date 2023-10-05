import { problemState } from '@/store/atoms/problemAtom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

export default function SubmissionButtons({ code }: { code: string }) {
  const problem = useRecoilValue(problemState);

  const handleSubmit = async () => {
    const res = await axios.post('/api/submissions', {
      code,
      input: problem.testCases[0].input,
    });

    console.log(res.data);
  };

  return (
    <div className="flex items-center justify-between py-2 mx-4 text-white z-20 sticky bottom-[-2px] bg-primary">
      <div className="bg-secondary px-2 py-1 rounded-md">
        <p>console</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-1 sm:px-3 sm:py-1 bg-secondary text-white hover:bg-green-600 sm:font-semibold rounded-md transition duration-300 ease-in-out text-sm sm:text-base">
          Run
        </button>
        <button
          className="p-1 sm:px-3 sm:py-1 bg-secondary text-white hover:bg-green-600 sm:font-semibold rounded-md transition duration-300 ease-in-out text-sm sm:text-base"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
