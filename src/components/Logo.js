import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 px-2">
      <Image src="/logo-edited.png" alt="logo" width={72} height={72} />
      <span className="hidden sm:inline-block font-extrabold text-xl text-zinc-500">
        El Jefe
      </span>
    </Link>
  );
}
