import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 2048 2048"
        >
          <path
            fill="currentColor"
            d="M1024 384v128H0V384zM0 896h2048v128H0zm1024 640v-128h1024v128z"
          ></path>
        </svg>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content menu bg-neutral-50 rounded-box z-[1] w-52 p-2 shadow h-screen text-xl font-semibold flex flex-col gap-2"
      >
        <div className="flex items-center gap-2 border-b-2 border-b-accent p-2 hover:text-success hover:bg-base-200 hover:rounded-xl">
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
        </div>
        <div className="flex items-center gap-2 border-b-2 border-b-accent p-2 hover:text-success hover:bg-base-200 hover:rounded-xl">
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
          <Link href="/journal">Journal</Link>
        </div>
        <div className="flex items-center gap-2 border-b-2 border-b-accent p-2 hover:text-success hover:bg-base-200 hover:rounded-xl">
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
          <Link href="/resources">Resources</Link>
        </div>
        <div className="flex items-center gap-2 border-b-2 border-b-accent p-2 hover:text-success hover:bg-base-200 hover:rounded-xl">
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
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
