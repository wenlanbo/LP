import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from 'react'
import Logo from "../public/img/logo.svg";

const Navbar = () => {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
              <Disclosure>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link href="/">
              <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <span>
                  <Image
                    src={Logo}
                    alt="A"
                    width="32"
                    height="32"
                    className="w-8"
                  />
                </span>
                <span>Anicca Research</span>
              </span>
            </Link>
          </div>

          <ul className="flex grow justify-end flex-wrap items-center">
            <div className="hidden mr-3 space-x-4 lg:flex nav__item">
              <Link href="mailto:info@anicca.website" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                Get Started
              </Link>

              <ThemeChanger />
            </div>
          </ul>

        </div>
      </div>
      </Disclosure>
    </header>

  );
}

export default Navbar;
