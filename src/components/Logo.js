import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src={logo} alt="logo" className="w-40 md:w-60 lg:w-60" />
    </Link>
  );
}
