import { SubmissionInput } from '@/utils/inputValidation';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

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
              {/* <p className="">{JSON.stringify(submission.code, null, 2)}</p> */}
              <CodeMirror
                value={submission.code}
                theme={vscodeDark}
                extensions={[javascript()]}
                style={{ fontSize: '16px' }}
                editable={false}
              />
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
