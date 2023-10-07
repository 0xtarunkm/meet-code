import { ProblemInput, SubmissionInput } from '@/utils/inputValidation';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import ProblemExamples from './ProblemExamples';
import Constraints from './Constraints';
import Submissions from './Submissions';

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

  const { data: session } = useSession();

  const [submissions, setSubmissions] = useState<SubmissionInput[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmission = async () => {
    const res = await axios.get(
      `http://localhost:3000/api/submissions?userId=${session?.user?.id}&problemId=${problem.id}`
    );

    console.log(res.data.submissions);

    setSubmissions(res.data.submissions);
  };

  useEffect(() => {
    handleSubmission();
  }, []);

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
              <button
                className="btn"
                onClick={() => setIsSubmitted(!isSubmitted)}
              >
                {!isSubmitted ? 'Examples' : 'Submissions'}
              </button>
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

            {!isSubmitted ? (
              <Submissions submissions={submissions} />
            ) : (
              <>
                {/* Examples */}
                <ProblemExamples problem={problem} />

                {/* Constraints */}
                <Constraints />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
