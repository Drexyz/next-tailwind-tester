import React, { useState, ReactNode, FC } from "react";
import PropTypes from "prop-types";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
// import { ScrollToTop } from "./molecule/scroll-to-top"
// import { Footer } from "./organism/footer";

export interface LayoutProps {
  children: ReactNode;
  noPadding?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, noPadding = false }) => {
  const [hiddenClass, setHiddenClass] = useState("hidden");

  const handleHidden = () => setHiddenClass("visible");

  const handleRemove = () => {
    if (hiddenClass === "visible") {
      setHiddenClass("hidden");
    }
  };
  return (
    <>
      <Navbar handleHidden={handleHidden} />
      <SideBar hiddenClass={hiddenClass} handleRemove={handleRemove} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: !noPadding ? 1245 : 0,
        }}
        className={noPadding ? "p-0" : "p-10"}
      >
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
      {/* <ScrollToTop /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
