import React from "react";
import Menu from "./Menu";
import "../assets/css/dasboard.css";

const Layout = ({children}) => {
    return (
        <>
            <Menu />
            <main role="main" className="container">
                {children}
            </main>
        </>
    );
};

export default Layout;