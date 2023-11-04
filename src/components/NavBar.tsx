import Enquire from "./sections/Enquire";

import modonLogo from '../assets/Modon-04.png'
import {useTranslation} from 'react-i18next'
import LangSwitcher from './sections/LangSwitcher';
import { Link, NavLink } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import { NavigationMenuContent } from './ui/navigation-menu';
import { ChevronDown } from 'lucide-react';


 

const NavBar = () => {
  const { t } = useTranslation();
  const navbar = document.querySelector(".navbar");
  const menuTrig = document.querySelector(".menu-trig");
  // const topnav = document.querySelector('.top-nav');
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      navbar?.classList.add("bg-white");
      navbar?.classList.remove("text-white");
      navbar?.classList.remove("h-20");
      navbar?.classList.add("h-16");
      navbar?.classList.add("text-black");
      navbar?.classList.add("box-shadow-nav");
      menuTrig?.classList.add("snd-color-imp");
    } else {
      menuTrig?.classList.remove("snd-color-imp");
      navbar?.classList.remove("box-shadow-nav");
      navbar?.classList.remove("bg-white");
      navbar?.classList.remove("h-16");
      navbar?.classList.add("h-20");
      navbar?.classList.remove("text-black");
      navbar?.classList.add("text-white");
    }
  });
  return (
    <div className="navbar justify-between items-center text-white h-20 pr-6 pl-6  fixed top-0 w-full flex light z-30">
      <div className="logo-cont flex justify-center items-center">
        <Link to="/">
          <img
            src={modonLogo}
            className="logo h-14 m-1 cursor-pointer"
            alt="modon-logo"
          ></img>
        </Link>
      </div>
      <div className="list-items-left flex w-3/5 items-center justify-around text-sm">
        <a className="item cursor-pointer" href="/">
          HOME
        </a>
        <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><div className='flex items-center'>PROJECTS <ChevronDown/></div></NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="flex flex-col item-start gap-1 text-center text-xs justify-start animate-fade-down">
            <NavLink className='p-1 hover:bg-primary-hover hover:animate-fade' to='/bayti'>
                <NavigationMenuLink  asChild>
                  <p>{t("bayti-c")}</p>
                </NavigationMenuLink>
              </NavLink>
              <NavLink className='p-1 hover:bg-primary-hover hover:animate-fade' to='/buruj'>
                <NavigationMenuLink  asChild>
                  <p>{t("buruj-c")}</p>
                </NavigationMenuLink>
              </NavLink>
              <NavLink className='p-1 hover:bg-primary-hover hover:animate-fade' to='/future-city'>
                <NavigationMenuLink  asChild>
                  <p>{t("future-c")}</p>
                </NavigationMenuLink>
              </NavLink>
              <NavLink className='p-1 hover:bg-primary-hover hover:animate-fade' to='/lavida'>
                <NavigationMenuLink  asChild>
                  <p>{t("lavida-c")}</p>
                </NavigationMenuLink>
              </NavLink>
              <NavLink className='p-1 hover:bg-primary-hover hover:animate-fade' to='/madinaty'>
                <NavigationMenuLink  asChild>
                  <p>{t("madinaty-c")}</p>
                </NavigationMenuLink>
              </NavLink>
              </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <a className="item cursor-pointer" href="/construction">
          {t("home_string")}
        </a>
        <a className="item cursor-pointer" href="/news">
          {t("news_string")}
        </a>
        <a className="item cursor-pointer" href="/about-us">
          ABOUT US
        </a>
        <a className="item cursor-pointer" href="/careers">
          CAREERS
        </a>
        <a className="item cursor-pointer" href="/contact">
          CONTACT US
        </a>
        <LangSwitcher />
        <Enquire />
      </div>
    </div>
  );
};

export default NavBar;
