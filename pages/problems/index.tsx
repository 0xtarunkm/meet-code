import Navbar from '@/components/Navbar';
import { ProblemInput } from '@/utils/inputValidation';
import Link from 'next/link';

export default function ProblemsPage({
  problems,
}: {
  problems: ProblemInput[];
}) {
  return (
    <div>
      <Navbar />
      <div className="bg-primary overflow-y-scroll">
        <div>
          {problems.map((problem) => {
            const difficultyColor =
              problem.difficulty === 'Easy'
                ? 'text-green-500'
                : problem.difficulty === 'Medium'
                ? 'text-yellow-500'
                : 'text-red-500';
            return (
              <div
                className="flex flex-col max-w-xl md:max-w-5xl mx-auto border-2 border-black rounded-full px-8 py-4 my-5 bg-secondary text-white "
                key={problem.id}
              >
                <Link
                  href={`/problems/${problem.id}`}
                  className="flex items-center justify-between"
                >
                  <h1 className="font-semibold text-sm md:text-base">
                    {problem.title}
                  </h1>
                  <p className="text-sm hidden md:flex">
                    {problem.description}
                  </p>

                  <p
                    className={`${difficultyColor} font-semibold text-sm md:text-base`}
                  >
                    {problem.difficulty}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/problems');
  const data = await res.json();

  return {
    props: {
      problems: data,
    },
  };
}
