import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import ThemeToggle from "./ThemeToggle";
import Logout from "./Logout";

const dancing = Dancing_Script({ subsets: ["latin"] });

export default function Sidebar() {
  return (
    <div className="relative flex navbar bg-neutral rounded-md shadow-secondary shadow-md">
      <div className="drawer navbar-start">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button z-10"
          >
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side z-20">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-xl font-semibold">
            {/* Sidebar content here */}
            <li>
              <Link href="/" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12.857 4.06l5.866 4.817c.33.27.527.686.527 1.13v8.803c0 .814-.638 1.44-1.383 1.44H15.25V15.5a2.75 2.75 0 0 0-2.75-2.75h-1a2.75 2.75 0 0 0-2.75 2.75v4.75H6.133c-.745 0-1.383-.626-1.383-1.44v-8.802c0-.445.197-.86.527-1.13l5.866-4.819a1.34 1.34 0 0 1 1.714 0m5.01 17.69c1.61 0 2.883-1.335 2.883-2.94v-8.802a2.96 2.96 0 0 0-1.075-2.29L13.81 2.9a2.84 2.84 0 0 0-3.618 0L4.325 7.718a2.96 2.96 0 0 0-1.075 2.29v8.802c0 1.605 1.273 2.94 2.883 2.94z"
                  ></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link href="/journal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                >
                  <g fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083L6.757 8.43A.5.5 0 0 1 6 8z"
                    ></path>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"></path>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"></path>
                  </g>
                </svg>
                Journal
              </Link>
              <ul>
                <li>
                  <Link href="/journal/all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="currentColor"
                        d="M0 1408v-384h384v384zm128-256v128h128v-128zM0 896V512h384v384zm128-256v128h128V640zM0 384V0h384v384zm128-256v128h128V128zm512 640V640h1152v128zm896 384v128H640v-128zM640 128h1408v128H640zM0 1920v-384h384v384zm128-256v128h128v-128zm512 128v-128h1152v128z"
                      ></path>
                    </svg>
                    All Entries
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/resources">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2 11c2.332-2.442 5.643-2.557 8 0M8.495 4.5c0 1.38-1.12 2.5-2.503 2.5a2.5 2.5 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5M14 22c2.332-2.442 5.643-2.557 8 0m-1.505-6.5c0 1.38-1.12 2.5-2.504 2.5a2.5 2.5 0 0 1-2.503-2.5c0-1.38 1.12-2.5 2.503-2.5a2.5 2.5 0 0 1 2.504 2.5M3 14c0 3.87 3.13 7 7 7l-1-2m6-16h6m-6 3h6m-6 3h3.5"
                    color="currentColor"
                  ></path>
                </svg>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 14 14"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.901 4.317v1.364M9.9 2.662a.124.124 0 0 1-.124-.125c0-.07.056-.125.124-.125m.002.25a.125.125 0 0 0 .124-.125a.124.124 0 0 0-.124-.125M.857 12.864h12.007M1.989 6.829a1.939 1.939 0 1 0 3.878 0a1.939 1.939 0 1 0-3.878 0"></path>
                    <path d="M.855 12.865v-1.024a3.072 3.072 0 1 1 6.145 0v1.024m.394-6.149A3.554 3.554 0 1 0 6.33 4"></path>
                  </g>
                </svg>
                About
              </Link>
            </li>
            <li className="mt-[400px]">
              <Logout />
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
