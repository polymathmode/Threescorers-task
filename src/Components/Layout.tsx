import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";
import Navbar from "./Dashboard/Navbar";
import Sidebar from "./Dashboard/Sidebar";

const Layout = () => {
    return (
        <div className="dashboard_layout">
             <Sidebar />
            <main
                style={{
                    flexGrow: 1,
                    minHeight: "100vh",
                    width: "100%",
                    maxWidth: "100vw",
                    display:"flex",
                    flexDirection:"column",
                    marginLeft:"210px",
                    border:"1px solid red"
                }}
            >
                    <Navbar />
                {/* <Navigation /> */}
                <div style={{minHeight: "100vh", marginTop:"64px",
                    width: "100%",
                    maxWidth: "100vw",
                    flexGrow: 1,
                }}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;