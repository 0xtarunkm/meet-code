import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      {/* main section */}
      <section>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold text-white">Welcome to meetcode</h1>
          <p className="text-white text-lg mt-4">
            A platform to practice your coding skills
          </p>
          <div className="mt-8">
            <button className="btn" onClick={() => router.push('/problems')}>
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
