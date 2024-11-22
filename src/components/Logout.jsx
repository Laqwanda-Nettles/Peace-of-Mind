import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();

  const handleClick = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <button
      onClick={handleClick}
      className="btn btn-outline btn-error text-lg font-semibold hover:scale-105 duration-300"
    >
      Logout
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
        ></path>
        <path
          fill="currentColor"
          d="m20.65 11.65l-2.79-2.79a.501.501 0 0 0-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
        ></path>
      </svg>
    </button>
  );
}
