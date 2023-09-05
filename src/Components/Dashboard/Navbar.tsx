// import { BsBellFill } from 'react-icons/bs';
// import { FaUserCircle } from 'react-icons/fa';


// const Navbar = () => {
//   return (
//     <nav  className=" p-4 flex justify-between shadow-lg w-[100%]  md:pr-[8%] ml-[15%] md:ml-[7%] lg:ml-[5%] pr-[5%]">
//       {/* Dashboard Name */}
//       <div style={{display:"flex", justifyContent:""}} className="flex justify-between">
//         <p className="text-grey-500 text-lg font-semibold">Overview</p>

//         {/* User Circle Icon */}
//         <div className="flex   justify-end">
//           <BsBellFill className="h-4 w-4 my-auto text-black mr-2" />
//           <FaUserCircle className="h-6 w-6 my-auto text-black" />
//           <span className="text-black my-auto ml-4 w-[auto]">
//             Daniel Jegede
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { useLocation, } from "react-router-dom";
import './Navbar.css'; // Import your CSS file

const Navbar: React.FC = () => {
  const [page, setpage] = useState("overview")
  const location = useLocation()

  useEffect(() => {
    const pathString = location.pathname.split("/")[2]
    setpage(pathString || "Overview")
  },[location.pathname])

  const data = localStorage.getItem("userData")
    const parsedData= JSON.parse(data)
    console.log("PARSE",parsedData);

  return (
    <nav className="navbar">
      <div className="dashboard-name">{page}</div>

      {/* User Circle Icon */}
      <div className="user-info">
        <div className="user-details">
          <span className="user-name">{parsedData.data.firstName} {parsedData.data.lastName}</span>
          <span className="user-role">{parsedData.data.role}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

