import Navbar from '@/components/Navbar';
import Workspace from '@/components/Workspace';
import { ProblemInput } from '@/utils/inputValidation';
import { GetServerSideProps, GetStaticProps } from 'next';
import { useSession, signIn } from 'next-auth/react';

export default function ProblemPage({ problem }: { problem: ProblemInput }) {
  const { data: session } = useSession();

  return (
    <div className="bg-primary min-h-screen">
      {session ? (
        <>
          <Navbar problemPage />
          <div>
            <Workspace problem={problem} />
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-3xl text-center font-semibold mb-4 mr-3 text-white">
              Please login to continue
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/problems/${id}`);
  const problem = await res.json();

  return {
    props: {
      problem,
    },
  };
};
