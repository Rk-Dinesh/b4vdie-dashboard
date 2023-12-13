import React, { Suspense, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/partials/header";
import Sidebar from "../components/partials/sidebar";
import useWidth from "../hooks/useWidth";
import useSidebar from "../hooks/useSidebar";
import useContentWidth from "../hooks/useContentWidth";
import useMenulayout from "../hooks/useMenulayout";
import useMenuHidden from "../hooks/useMenuHidden";

import { ToastContainer } from "react-toastify";

import { motion } from "framer-motion";

const Layout = ({token}) => {
  
  const { width, breakpoints } = useWidth();
  const [collapsed] = useSidebar();
  const navigate = useNavigate();


  const switchHeaderClass = () => {
    if (menuType === "horizontal" || menuHidden) {
      return "ltr:ml-0 rtl:mr-0";
    } else if (collapsed) {
      return "ltr:ml-[72px] rtl:mr-[72px]";
    } else {
      return "ltr:ml-[248px] rtl:mr-[248px]";
    }
  };
  // content width
  const [contentWidth] = useContentWidth();
  const [menuType] = useMenulayout();
  const [menuHidden] = useMenuHidden();

  return (
    <>
      <ToastContainer />
      <Header className={width > breakpoints.xl ? switchHeaderClass() : ""} token={token}/>
      {menuType === "vertical" && width > breakpoints.xl && !menuHidden && (
        <Sidebar />
      )}
      <div
        className={`content-wrapper transition-all duration-150 ${width > 1280 ? switchHeaderClass() : ""
          }`}
      >
        {/* md:min-h-screen will h-full*/}
        <div className="page-content   page-min-height  ">
          <div
            className={
              contentWidth === "boxed" ? "container mx-auto" : "container-fluid"
            }
          >
            <Suspense >
              <motion.div
                key={location.pathname}
                initial="pageInitial"
                animate="pageAnimate"
                exit="pageExit"
                variants={{
                  pageInitial: {
                    opacity: 0,
                    y: 50,
                  },
                  pageAnimate: {
                    opacity: 1,
                    y: 0,
                  },
                  pageExit: {
                    opacity: 0,
                    y: -50,
                  },
                }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.5,
                }}
              >

                {<Outlet />}
              </motion.div>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
