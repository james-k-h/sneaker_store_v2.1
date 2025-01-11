'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { CartContext } from '../../AppContext';
import ShoppingCart from '../../icons/ShoppingCart';
import Bars2 from '../../icons/Bars2';
import Logo from './Logo';

function AuthLinks({ status, userName }) {
  if (status === 'authenticated') {
    return (
      <>
        <Link
          href={'/profile'}
          className="whitespace-nowrap text-sm hover:italic"
        >
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className=" rounded-full lg:text-color_1 text-white px-8 py-2 text-sm hover:italic"
        >
          Logout
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link className="hover:opacity-60 text-sm" href={'/login'}>
          Login
        </Link>
        <Link
          href={'/register'}
          className=" rounded-full text-color_2 px-8 py-2 text-sm hover:opacity-60"
        >
          Register
        </Link>
      </>
    );
  }
}

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const { cartProducts } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  return (
    <>
      <header
        className="p-2 
      px-5 w-full bg-white  z-50 fixed
    opacity-75
      "
      >
        <div className="lg:flex gap-8  items-center justify-center text-color_2 hidden ">
          <Link href="/shipping">
            <h1 className="hover:font-semibold italic">
              Free curbside pickup or economy ground shipping on orders over $50
            </h1>
          </Link>
        </div>
        <div className="flex items-center lg:hidden justify-between ">
          {/* <Link className="text-primary font-semibold text-2xl" href={'/'}>
          Bayview Eatery
        </Link> */}
          <div className="flex gap-8 items-center text-color_2">
            <Link href={'/cart'} className="relative">
              <ShoppingCart />
              {cartProducts?.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-black text-color_2 text-xs py-1 px-1 rounded-full leading-3">
                  {cartProducts.length}
                </span>
              )}
            </Link>
            <button
              className="p-1 border bg-color_1"
              onClick={() => setMobileNavOpen((prev) => !prev)}
            >
              <Bars2 />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div
            onClick={() => setMobileNavOpen(false)}
            className="lg:hidden p-4 bg-gray rounded-lg mt-2 flex flex-col gap-2 text-center text-white text-sm
            "
          >
            <Link className="hover:opacity-60" href={'/'}>
              Home
            </Link>
            <Link className="hover:opacity-60" href={'/sneakers'}>
              Sneakers
            </Link>
            <Link className="hover:opacity-60" href={'/about'}>
              About
            </Link>
            <Link className="hover:opacity-60" href={'/contact_us'}>
              Contact
            </Link>
            <AuthLinks status={status} userName={userName} />
          </div>
        )}
        <div className="hidden lg:flex items-center justify-between">
          <nav className="flex items-center gap-4 font-bold text-color_2 text-sm">
            {/* <Link className="text-primary font-semibold text-2xl" href={'/'}>
            Bayview Eatery
          </Link> */}
            {/* <Image
            src={sneaker_store}
            alt="JKH logo"
            className="w-full h-auto rounded-ful bg-color_2"
            sizes="20vw"
            priority
          /> */}
            <Logo className="dark:bg-black" />
            {/* <Link
            className="mt-6 bg-color_3 text-[#efefef] px-4 py-2 rounded-xl text-[14px]
          transition-all hover:bg-color_2
         
          "
            href={'/'}
          >
            Home */}
            {/* </Link> */}
            <Link
              className=" mt-6   px-4 py-2 rounded-xl text-[14px]
          transition-all text-color_2 font-bold
     hover:opacity-60
          "
              href={'/sneakers'}
            >
              Sneakers
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-between">
            <nav
              className="flex items-center gap-8 font-bold text-color_2 text-sm
           "
            >
              <Link className=" hover:opacity-60" href={'/about'}>
                About
              </Link>
              <Link className=" hover:opacity-60" href={'/contact_us'}>
                Contact
              </Link>
            </nav>
          </div>

          <nav
            className="flex items-center gap-4 text-color_2 font-semibold px-2
         "
          >
            <AuthLinks status={status} userName={userName} />
            <Link href={'/cart'} className="relative  hover:opacity-60">
              <ShoppingCart />
              {cartProducts?.length > 0 && (
                <span
                  className="absolute -top-2 -right-4 bg-black text-color_1 
               
                text-xs py-1 px-1 rounded-full leading-3"
                >
                  {cartProducts.length}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
