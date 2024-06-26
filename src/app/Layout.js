import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {

    return (
        <div className="container">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout