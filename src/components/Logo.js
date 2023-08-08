import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 px-2">
      <span className="hidden sm:inline-block font-extrabold text-xl text-zinc-500">
        Store
      </span>
    </Link>
  );
}
