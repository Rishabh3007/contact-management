import React from "react";
import { toggleSideBar } from "../lib/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../lib/hook";
import { RootState } from "../lib/store";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const dispatch = useAppDispatch();
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex flex-row gap-4 items-center relative top-0 w-full z-10">
        <div className="block sm:hidden">

    <MenuIcon
        onClick={() => dispatch(toggleSideBar())}
        className="cursor-pointer" 
        />
        </div>
        <h1>Contact management</h1>
      </header>
    </>
  );
}

export default Header;
