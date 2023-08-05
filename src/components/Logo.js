import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="hidden sm:inline-block font-extrabold text-xl text-zinc-300">
        Micheladas
      </div>
    </Link>
  );
}
