import Navbar from '@/components/Navbar';
import { ProblemInput } from '@/utils/inputValidation';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProblemsPage() {
  const [problems, setProblems] = useState<ProblemInput[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/problems?name=${search}`)
      .then((res) => {
        setProblems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [search]);

  return (
    <div>
      <Navbar />
      <div className="bg-primary overflow-y-scroll h-screen">
        {/* Search */}
        <div className="flex items-center justify-center mt-4 space-x-4">
          <div className="flex items-center justify-center w-1/2">
            <input
              type="text"
              placeholder="Search Problems"
              className="w-full px-4 py-3 text-sm text-black  rounded-full focus:outline-none bg-secondary"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <div className="flex items-center justify-center">
            <h1 className="text-red-500 font-semibold text-xl">{error}</h1>
          </div>
        )}
        {loading ? (
          <>
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-green-900 my-4"></div>
            </div>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
}
