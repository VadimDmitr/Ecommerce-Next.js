import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-10 md:px-16 py-4 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image
          src="https://freepngimg.com/download/ecommerce/7-2-ecommerce-png-file.png"
          width={180}
          height={180}
          alt="Logo"
        />
      </Link>

      <div className="flex items-center space-x-3 text-sm">
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Log in
        </button>
        <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;