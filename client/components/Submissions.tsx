import { SubmissionInput } from '@/utils/inputValidation';

export default function Submissions({
  submissions,
}: {
  submissions: SubmissionInput[];
}) {
  return (
    <div>
      {submissions.map((submission, index) => (
        <div key={index} className=" bg-secondary p-4 rounded text-sm mt-4">
          <p className="font-semibold text-lg mb-2">Submission {index + 1}:</p>

          {/* Display structured input and output as JSON */}
          <div className="space-y-6 text-base">
            <div className="">
              <p>Code:</p>
              <pre>{JSON.stringify(submission.code, null, 2)}</pre>
            </div>
            <div>
              <p>Verdict:</p>
              <pre>{JSON.stringify(submission.verdict, null, 2)}</pre>
            </div>
            <div>
              <p>language:</p>
              <pre>{JSON.stringify(submission.language, null, 2)}</pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
