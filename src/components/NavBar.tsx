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
  // const [mob, setMob] = useState(false)
  // const ham = document.querySelector('.hamburger');
  // ham?.addEventListener('click', () => {
  //   setMob(!mob);
  //   navList?.classList.remove('hidden');
  //   navList?.classList.add('nav-list-mobile');
  //   navList?.classList.add('gap-mobile');
  //   navList?.classList.add('top-mobile');
  // })
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
      logo?.classList.remove('h-14');
      logo?.classList.add('h-12');
      setLogo(modonLogoBlack)
    } else {
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
            <a className='p-1 hover:bg-primary-hover hover:animate-fade' href='/bayti'>
                <NavigationMenuLink  asChild>
                  <p>{t("bayti-c")}</p>
                </NavigationMenuLink>
              </a>
              <a className='p-1 hover:bg-primary-hover hover:animate-fade' href='/buruj'>
                <NavigationMenuLink  asChild>
                  <p>{t("buruj-c")}</p>
                </NavigationMenuLink>
              </a>
              <a className='p-1 hover:bg-primary-hover hover:animate-fade' href='/future-city'>
                <NavigationMenuLink  asChild>
                  <p>{t("future-c")}</p>
                </NavigationMenuLink>
              </a>
              <a className='p-1 hover:bg-primary-hover hover:animate-fade' href='/lavida'>
                <NavigationMenuLink  asChild>
                  <p>{t("lavida-c")}</p>
                </NavigationMenuLink>
              </a>
              <a className='p-1 hover:bg-primary-hover hover:animate-fade' href='/madinaty'>
                <NavigationMenuLink  asChild>
                  <p>{t("madinaty-c")}</p>
                </NavigationMenuLink>
              </a>
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
          {t("about-us-nav")}
        </a>
        <a className="item cursor-pointer" href="/careers">
          {t("careers-nav")}
        </a>
        <a className="item cursor-pointer" href="/contact">
          {t("contact-nav")}
        </a>
        <LangSwitcher />
        <Enquire />
      </div>
    </div>
  );
};

export default NavBar;
