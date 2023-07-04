import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-18 md:px-28 py-4 justify-between fixed top-0 w-full bg-white z-50 shadow"
>
      <Link href="/">
        <Image
          src="https://i.postimg.cc/wjWCxMk9/Logo.png"
          width={90}
          height={90}
          alt="Logo"
        />
      </Link>

      <div className="flex items-center space-x-3 text-sm">
        <button className="button bg-sky-600 text-white italic border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Log in
        </button>
        <button className="button bg-transparent border-blue-600 italic hover:bg-sky-600 hover:text-white hover:border-transparent">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;