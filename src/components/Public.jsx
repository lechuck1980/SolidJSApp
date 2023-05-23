import { Outlet } from "@solidjs/router";
import Footer from "./Footer";
import Header from "./Header";

 function Public() {

    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
}
    export default Public;