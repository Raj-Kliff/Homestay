import React, { FC, useState } from "react";
import Logo from "@/shared/Logo";
import Navigation from "@/shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "@/shared/ButtonPrimary";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import LangDropdown from "./LangDropdown";
import HeroSearchForm from "../(HeroSearchForm)/HeroSearchForm";
import Link from "next/link";

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`nc-MainNav1 relative z-10 bg-primary-600 ${className}`}>
      <div className="px-4 lg:container h-10 relative flex justify-between py-[2rem]">
        <div className="-mt-[1.1rem] mr-[1rem] sm:mt-0 sm:mr-0 md:flex justify-start  space-x-4 sm:space-x-10">
          <Logo className="w-24 self-center" />
          {/* <Navigation /> */}
        </div>

        <div className="flex flex-[3] !mx-auto md:px-3">
          <div className="self-center max-w-3xl mx-auto flex-1 -mt-[2rem]">
            <div className="lg:hidden mt-[2rem] text-white">
              <HeroSearchForm2MobileFactory />
            </div>
            <HeroSearchForm className="hidden lg:block" />
          </div>
        </div>

        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex space-x-0.5">
            
            {/* <SearchDropdown className="flex items-center" /> */}
            <div className="px-1" />
            <Link className="self-center text-sm bg-gray-600 text-white rounded-full px-4 py-2 hover:bg-gray-700 duration-300" href="/add-listing">
              List My Homestay
            </Link>
            <div className="px-1" />
            <div className="relative inline-block text-left -mt-[1rem]">
              {/* Button triggering the dropdown */}
              <ButtonPrimary 
                className="self-center border-2" 
                onClick={toggleDropdown}
              >
                Login
              </ButtonPrimary>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border-2 rounded shadow-lg z-10">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link href="/login" onClick={()=>setIsOpen(!isOpen)}>User Login</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200">
                      <Link href="/login" onClick={()=>setIsOpen(!isOpen)}>Host Login</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="px-1" />
            <SwitchDarkMode />
          </div>

          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white">
        <Navigation />
      </div>
    </div>
  );
};

export default MainNav1;
