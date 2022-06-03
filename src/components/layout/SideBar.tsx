import React, { useMemo, FC } from "react";
import Link from "next/link";

export interface MenuProps {
  hiddenClass: string;
  handleRemove: () => void;
}

export const SideBar: FC<MenuProps> = (props) => {
  const { hiddenClass, handleRemove } = props;

  const showSidebar = useMemo(() => {
    if (hiddenClass === "visible") return "-translate-x-0";
    else return "-translate-x-full";
  }, [hiddenClass]);

  return (
    <>
      <div className={`relative z-[9999]`}>
        <div
          className={`${hiddenClass} navbar-backdrop fixed inset-0 bg-black opacity-25`}
        />
        <nav
          className={`${showSidebar} transition ease-in-out duration-700 fixed top-0 left-0 bottom-0 flex flex-col w-5/6 h-full max-w-sm py-6 px-6 bg-white border-r overflow-y-auto`}
        >
          <div className="flex justify-between items-center mb-8">
            <Link href="/">logo</Link>
            <button className="navbar-close" onClick={handleRemove}>
              <svg
                className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="bg-white">
            <ul className="mobile-menu">
              <li className="mb-1 rounded-xl">
                <Link href="/">
                  <p className="p-4 text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 font-bergen">
                    Beranda
                  </p>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/test">
                  <p className="p-4 text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 font-bergen">
                    Tentang HBBL
                  </p>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/test1">
                  <p className="p-4 text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 font-bergen">
                    Sponsors & Partners
                  </p>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/test2">
                  <p className="p-4 text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 font-bergen">
                    Brand Lokal Partisipan
                  </p>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/test3">
                  <p className="p-4 text-sm font-semibold text-blueGray-600 hover:text-blueGray-500 font-bergen">
                    Artikel
                  </p>
                </Link>
              </li>
              <li className="mb-1">
                <Link className="p-4" href="/test4">
                  <p className="btn-primary bg-primary hover-up-2 font-bergen">
                    Kontak
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
