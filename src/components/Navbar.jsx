'use client'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Logout from './Logout'

const Navbar = () => {
   const  pathe =  usePathname()
  return (
    <>
      <nav className="navbar flex justify-between">
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              className={`${pathe == '/' ? 'active' : null}`}
              // className='active'
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/about"
              className={`${pathe == '/about' ? 'active' : null}`}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/signin"
              className={`${pathe == '/signin' ? 'active' : null}`}
            >
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="#"
              className={`${pathe == '/signup' ? 'active' : null}`}
            >
              Services
            </Link>
          </li>
        </ul>
        <div className="">
          <Logout />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
