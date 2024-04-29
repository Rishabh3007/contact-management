import React, { useState } from 'react';
import { useAppSelector } from "../lib/hook";
import { RootState } from "../lib/store";

function Sidebar() {
    // const numOfCakes = useAppSelector((state: RootState) => state.cake.numOfCakes);/
    const isSidebarOpen = useAppSelector((state: RootState) => state.ui.isSideBarOpen);
//   const [isOpen, setIsOpen] = useState(isSidebarOpen);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };


  return (
    <div className={`absolute sm:relative sm:top-0 sm:left-0 h-screen w-40 sm:w-[18%] z-50 bg-gray-800 transition duration-300 ease-in-out transform ${isSidebarOpen ? '-translate-x-full' : '-translate-x-0'} sm:translate-x-0`}>
      <div className="flex flex-col h-full pt-5 px-4">
        {/* Your sidebar content here */}
        <h1 className="text-xl font-bold text-white mb-4">Sidebar</h1>
        <ul className="space-y-2">
          <li><a href="#" className="text-white hover:text-gray-200">Item 1</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">Item 2</a></li>
          <li><a href="#" className="text-white hover:text-gray-200">Item 3</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
