import React, { memo, useState, FC } from "react";
import Link from "next/link";

// component props
export interface NavbarProps {
  handleHidden: () => void;
}

export const Navbar: FC<NavbarProps> = memo((props) => {
  const { handleHidden } = props;
  const [scroll, setScroll] = useState(0);

  return (
    <>
      <header
        className={`border-b border-gray-200 sticky-bar ${
          scroll > 0 ? "stick" : ""
        }`}
      >
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Link href="/">
              <p className="text-3xl font-semibold leading-none">Test</p>
            </Link>

            <div>
              <button
                className="transition ease-in-out duration-700 navbar-burger flex items-center py-2 px-3 text-black-500 hover:scale-150"
                onClick={handleHidden}
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
});
