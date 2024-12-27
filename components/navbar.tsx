import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full flex items-center justify-between px-20">
      <div className="flex items-center space-x-10">
        <div className="mt-2">
          <Link href="/">
            <Image
              src="/LogoFull.png"
              alt="Logo Full"
              height={60}
              width={150}
            />
          </Link>
        </div>

        <div className="hidden sm:flex items-center space-x-10 text-blue-950 font-bold text-md font-serif">
          <Link href="/bonds" className="hover:text-gray-500">
            All Bonds
          </Link>
          <Link href="/investments" className="hover:text-gray-500">
            My Investments
          </Link>
          <Link href="/loans" className="hover:text-gray-500">
            Apply For Loans
          </Link>
        </div>
      </div>

      <div className="hidden sm:flex items-center text-blue-950 font-bold text-md font-serif">
        <Link href="/admin" className="hover:text-gray-500">
          Admin Login
        </Link>
        <Link
          href="/admin"
          className="hover:text-gray-500 border-2 border-black rounded-lg m-4 px-4 py-2"
        >
          Connect Wallet
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
