import Enquire from "./sections/Enquire";
import {useTranslation} from 'react-i18next'
import modonLogoWhite from '../assets/Modon-04.png'
import modonLogoBlack from '../assets/cropped-logo-coloured-1-pco5cfz1mxysmj28om452w38747priw3aun41caz28.webp'
import LangSwitcher from './sections/LangSwitcher';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import { NavigationMenuContent } from './ui/navigation-menu';
import { ChevronDown } from 'lucide-react';
import { useState } from "react";


 

const NavBar = () => {
  const { t } = useTranslation();
  const navbar = document.querySelector(".navbar");
  const menuTrig = document.querySelector(".menu-trig");
  const logo = document.querySelector('.logo');
  const [modonLogo, setLogo] = useState(modonLogoWhite);
  // const ham = document.querySelector('.ham');
  const line1 = document.querySelector('.line1')
  const line2 = document.querySelector('.line2')
  const line3 = document.querySelector('.line3')
  // const navList = document.querySelector('.nav-list');
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      line1?.classList.remove("bg-white");
      line2?.classList.remove("bg-white");
      line3?.classList.remove("bg-white");
      line1?.classList.add("bg-black");
      line2?.classList.add("bg-black");
      line3?.classList.add("bg-black");
      navbar?.classList.add("bg-white");
      navbar?.classList.remove("text-white");
      navbar?.classList.remove("h-20");
      navbar?.classList.add("h-16");
      navbar?.classList.add("text-black");
      navbar?.classList.add("box-shadow-nav");
      menuTrig?.classList.add("snd-color-imp");
      logo?.classList.remove('h-14');
      logo?.classList.add('h-12');
      setLogo(modonLogoBlack)
    } else {
      line1?.classList.remove("bg-black");
      line2?.classList.remove("bg-black");
      line3?.classList.remove("bg-black");
      line1?.classList.add("bg-white");
      line2?.classList.add("bg-white");
      line3?.classList.add("bg-white");
      logo?.classList.remove('h-12');
      logo?.classList.add('h-14');
      setLogo(modonLogoWhite)
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
    <div className="navbar justify-between items-center text-white h-20 pr-6 pl-6 fixed top-0 w-full flex light z-30">
      <div className="logo-cont flex justify-center items-center">
        <Link to="/">
          <img
            src={modonLogo}
            className="logo h-14 m-1 cursor-pointer"
            alt="modon-logo"
            ></img>
        </Link>
      </div>
      <div className="ham flex-col justify-center items-end gap-2 cursor-pointer hidden">
        <div className="line1 h-0.5 w-5 bg-white"></div>
        <div className="line2 h-0.5 w-7 bg-white"></div>
        <div className="line3 h-0.5 w-5 bg-white"></div>
      </div>
      <div className="nav-list flex w-3/5 items-center justify-around text-sm">
        <a className="item cursor-pointer" href="/">
          {t("home-nav")}
        </a>
        <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><div className='flex items-center'>{t("projects-nav")} <ChevronDown/></div></NavigationMenuTrigger>
          <NavigationMenuContent className="text-white mt-4">
          <ul className="flex flex-col item-start gap-1 text-center text-xs justify-start animate-fade-down">
            <a className='p-1 hover:bg-primary-hover hover:animate-fade' href='/modon-new/bayti'>
                <NavigationMenuLink  asChild>
                  <p>{t("bayti-c")}</p>
                </NavigationMenuLink>
              </a>
              <a className='p-1 hover:bg-primary-hover hover:animate-fade' href='/modon-new/buruj'>
                <NavigationMenuLink  asChild>
                  <p>{t("buruj-c")}</p>
                </NavigationMenuLink>
              </a>
              <a className='p-1 hover:bg-primary-hover hover:animate-fade' href='/modon-new/future-city'>
                <NavigationMenuLink  asChild>
                  <p>{t("future-c")}</p>
                </NavigationMenuLink>
              </a>
              <a className='p-1 hover:bg-primary-hover hover:animate-fade' href='/modon-new/lavida'>
                <NavigationMenuLink  asChild>
                  <p>{t("lavida-c")}</p>
                </NavigationMenuLink>
              </a>
              <a className='p-1 hover:bg-primary-hover hover:animate-fade' href='/modon-new/madinaty'>
                <NavigationMenuLink  asChild>
                  <p>{t("madinaty-c")}</p>
                </NavigationMenuLink>
              </a>
              </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <a className="item cursor-pointer" href="/modon-new/construction">
          {t("home_string")}
        </a>
        <a className="item cursor-pointer" href="/modon-new/news">
          {t("news_string")}
        </a>
        <a className="item cursor-pointer" href="/modon-new/about-us">
          {t("about-us-nav")}
        </a>
        <a className="item cursor-pointer" href="/modon-new/careers">
          {t("careers-nav")}
        </a>
        <a className="item cursor-pointer" href="/modon-new/contact">
          {t("contact-nav")}
        </a>
        <LangSwitcher />
        <Enquire />
      </div>
    </div>
  );
};

export default NavBar;
