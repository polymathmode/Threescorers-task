import "../Card.css"
import { FiUsers } from "react-icons/fi";
import UserCard from '../UserTable/Usertable';


function Overview() {
    const totalUsers = "1,000,000"
    const totalAdmins = "970"
    const data = localStorage.getItem("userData")
    const parsedData= JSON.parse(data)
    
    

    return (
        <div>
            <h1>Overview</h1>
            {/* <Card totalUsers={1000}/> */}
            <div style={{ display: "flex" }}>
                <div className="card">
                    <div className="content">
                        <div className="left">
                            <p style={{ fontSize: "15px" }}>TOTAL NUMBER OF USERS</p>
                            <h2 style={{ paddingTop: "20px" }}>{totalUsers}</h2>
                        </div>
                        <div className="right">
                            <div style={{ border: "10px", borderRadius: "50px" }}>
                                <div className="box">
                                    <div className="group" style={{color:"#004F4F"}}>
                                        <FiUsers />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="left">
                            <p style={{ fontSize: "15px" }}>TOTAL NUMBER OF ADMINS</p>
                            <h2 style={{ paddingTop: "20px" }}>{totalAdmins}</h2>
                        </div>
                        <div className="right">
                            <div style={{ border: "10px", borderRadius: "50px" }}>
                                <div className="box">
                                    <div className="group" style={{color:"#007575"}}>
                                        <FiUsers />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UserCard />
        </div>
    )
}

export default Overview