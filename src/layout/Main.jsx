import React from "react";
import NavBar from "../components/shared/NavBar/NavBar";

const Main = ({children}) => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                
            </footer>
        </>
    );
};

export default Main;
