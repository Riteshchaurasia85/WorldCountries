import { Hearder } from "../UI/Hearder";
import { Footer } from "../UI/Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () =>{
    return (
        <>
        <Hearder/>
        <Outlet />
        <Footer />
        </>

    );
};