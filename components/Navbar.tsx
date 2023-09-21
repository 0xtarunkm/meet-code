import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from '@heroicons/react/24/outline';
import { QueueListIcon } from '@heroicons/react/24/solid';

export default function Navbar({ problemPage }: { problemPage?: boolean }) {
  const { data: session } = useSession();

  return (
    <div
      className={`flex items-center justify-between bg-secondary px-4 ${
        problemPage ? 'py-1' : 'py-2'
      }  shadow-md shadow-gray-900 sticky top-0 z-50`}
    >
      {/* Left section */}
      <div>
        <Link
          href={'/'}
          className="font-semibold text-xl sm:text-2xl text-white"
        >
          meetcode
        </Link>
      </div>

      {/* Middle section  */}
      {problemPage && (
        <div className=" items-center gap-6 w-fit justify-center border-2 border-black rounded-full px-4 py-1 bg-primary text-white hidden md:flex">
          <div className="flex items-center justify-center rounded h-8 w-8 cursor-pointer hover:bg-secondary duration-300">
            <ChevronDoubleLeftIcon className="h-6 w-6" />
          </div>
          <div className="hover:scale-110 duration-200 ease-in-out">
            <Link href="/problems" className="flex items-center">
              <QueueListIcon className="h-6 w-6" />
              <p className="text-sm ml-2">Problems List</p>
            </Link>
          </div>
          <div className="flex items-center justify-center rounded h-8 w-8 cursor-pointer hover:bg-secondary duration-300">
            <ChevronDoubleRightIcon className="h-6 w-6" />
          </div>
        </div>
      )}

      {/* Right section */}
      <div>
        {session?.user ? (
          <div className="flex items-center gap-5">
            <div>
              <Image
                src={`${session?.user?.image}`}
                height={35}
                width={35}
                alt="profile pic"
                className="rounded-full cursor-pointer"
              />
            </div>
            <button className="btn" onClick={() => signOut()}>
              Logout
            </button>
          </div>
        ) : (
          <button className="btn" onClick={() => signIn()}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}
