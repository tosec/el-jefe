import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center font-semibold">
      <div className="flex items-center space-x-4 mb-2 mt-2">
        <a
          href="https://www.facebook.com/your-facebook-page-url"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImFacebook2 size={24} />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-profile-url"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsInstagram size={24} />
        </a>
      </div>
      <p className="text-sm mb-2">{`Michleada Mix El Jefe © ${new Date().getFullYear()}`}</p>
      <Link
        href="https://github.com/tosec"
        rel="noopener noreferrer"
        target="_blank"
        className="flex items-center space-x-1 mb-2 text-sm"
      >
        <span>
          made by <span className="underline">tosec</span> with ♥️
        </span>
      </Link>
    </footer>
  );
}
