import { Outlet } from "react-router-dom";
import Navs from "./Navs.jsx";
import AppTitle from "./AppTitle.jsx";

const MainLayout = () => {
    return (
        <div>
            <Navs />
            <AppTitle title="" subtitle=""/>
            <Outlet />
        </div>
    );
}

export default MainLayout;