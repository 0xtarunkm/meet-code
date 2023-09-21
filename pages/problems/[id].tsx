import Navbar from '@/components/Navbar';
import Workspace from '@/components/Workspace';
import { ProblemInput } from '@/utils/inputValidation';
import { GetStaticProps } from 'next';

export default function ProblemPage({ problem }: { problem: ProblemInput }) {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar problemPage />
      <div>
        <Workspace problem={problem} />
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/problems');
  const data = await res.json();

  const paths = data.map((problem: ProblemInput) => {
    return {
      params: { id: problem.id as string },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/problems/${params?.id}`);
  const data = await res.json();

  return {
    props: {
      problem: data,
    },
    revalidate: 10,
  };
};
