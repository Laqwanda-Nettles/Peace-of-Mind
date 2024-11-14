import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import ThemeToggle from "./ThemeToggle";

const dancing = Dancing_Script({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className="navbar bg-neutral rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/journal">Journal</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center text-xl">
        <Link href="/" className="btn btn-ghost text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M208.77 32a24 24 0 0 0-44 5.79L148 100.54L131.19 37.8a24 24 0 0 0-46.37 12.42l11 41.17l-15-2.9a24 24 0 0 0-17.49 43.87l-.55.35a23.85 23.85 0 0 0-10.28 15.22a24.7 24.7 0 0 0-.49 4.89V160a76 76 0 0 0 76 76h.59c41.58-.31 75.42-34.81 75.42-76.9v-3.34a51.9 51.9 0 0 0-12.17-33.35l19.34-72.19A23.82 23.82 0 0 0 208.77 32M94.15 36a16 16 0 0 1 29.31 3.86l16.19 60.42a24 24 0 0 0-20.58 6.72a24.4 24.4 0 0 0-2.24-4.25a23.75 23.75 0 0 0-12.17-9.41L92.55 48.15A15.9 15.9 0 0 1 94.15 36m-33.82 72.8a16 16 0 0 1 18.92-12.46l20.76 4a16 16 0 1 1-6.44 31.34l-20.79-4a16 16 0 0 1-12.45-18.87Zm0 40.72A16 16 0 0 1 79.09 137l10.11 2a16 16 0 1 1-6.42 31.35l-10-2a16 16 0 0 1-12.47-18.88ZM196 159.1c0 37.71-30.28 68.62-67.48 68.9A68 68 0 0 1 61 171.43a23.75 23.75 0 0 0 10.24 4.81l10 2a24 24 0 0 0 4.85.49A23.9 23.9 0 0 0 104 138.88a24.1 24.1 0 0 0 9.75-5.89a25 25 0 0 0 2.24 4.25a23.83 23.83 0 0 0 15.24 10.28l10.5 2.11A32.3 32.3 0 0 0 140 160a31.85 31.85 0 0 0 9.14 22.4a4 4 0 0 0 5.71-5.6a24 24 0 0 1-4-28.22a4 4 0 0 0-2.73-5.83l-15.35-3.07a16 16 0 1 1 6.42-31.35l21.4 4.28A44.12 44.12 0 0 1 196 155.76Zm7.45-110.95l-18.15 67.73a51.6 51.6 0 0 0-23.11-11.11l-6.68-1.34l17-63.56a16 16 0 0 1 30.91 8.28Z"
            ></path>
          </svg>
          <h1 className={dancing.className}>Peace of Mind</h1>
        </Link>
      </div>
      <div className="navbar-end mr-2">
        <ThemeToggle />
      </div>
    </div>
  );
}
