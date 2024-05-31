import React, { ReactNode } from "react";

const Layout = ({ children }) => {
    return <main className=" flex h-screen justify-center items-center align-middle w-full" >{children}</main>;
};

export default Layout;
