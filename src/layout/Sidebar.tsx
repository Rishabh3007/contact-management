import React from 'react';
import { useAppSelector } from "../lib/hook";
import { RootState } from "../lib/store";
import { Link } from 'react-router-dom';

function Sidebar() {
    const isSidebarOpen = useAppSelector((state: RootState) => state.ui.isSideBarOpen);


  return (
    <div className={`absolute sm:relative sm:top-0 sm:left-0 h-screen w-40 sm:w-[18%] z-50 bg-gray-800 transition duration-300 ease-in-out transform ${isSidebarOpen ? '-translate-x-full' : '-translate-x-0'} sm:translate-x-0`}>
      <div className="flex flex-col h-full pt-5 px-4">
        <h1 className="text-xl font-bold text-white mb-4">Sidebar</h1>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
