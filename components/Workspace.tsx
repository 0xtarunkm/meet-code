import Split from 'react-split';
import ProblemDescription from './ProblemDescription';
import { GetServerSideProps } from 'next';
import { ProblemInput } from '@/utils/inputValidation';
import Playground from './Playground';

export default function Workspace({ problem }: { problem: ProblemInput }) {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} />
      <Playground />
    </Split>
  );
}
