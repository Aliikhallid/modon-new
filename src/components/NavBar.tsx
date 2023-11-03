import modonLogo from '../assets/Modon-04.png'
import {Button} from './ui/button'
import {useTranslation} from 'react-i18next'
import LangSwitcher from './sections/LangSwitcher';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import { NavigationMenuContent } from './ui/navigation-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './Enquire'
 

const NavBar = () => {
 
  const {t} = useTranslation();
  const navbar = document.querySelector('.navbar')
  // const topnav = document.querySelector('.top-nav');
  window.addEventListener('scroll', ()=> {
    if(window.scrollY > 150) {
      navbar?.classList.add('bg-white')
      navbar?.classList.remove('text-white')
      navbar?.classList.remove('h-20')
      navbar?.classList.add('h-16')
      navbar?.classList.add('text-black')
      navbar?.classList.add('box-shadow-nav')
    } else {
      navbar?.classList.remove('box-shadow-nav')
      navbar?.classList.remove('bg-white')
      navbar?.classList.remove('h-16')
      navbar?.classList.add('h-20')
      navbar?.classList.remove('text-black')
      navbar?.classList.add('text-white')
    }
  })
  return (
    <div className='navbar justify-between items-center text-white h-20 pr-6 pl-6  fixed top-0 w-full flex light z-30'>
        <div className="logo-cont flex justify-center items-center">
          <Link to='/'><img src={modonLogo} className='logo h-14 m-1 cursor-pointer' alt='modon-logo'></img></Link>
        </div>
      <div className="list-items-left flex w-3/5 items-center justify-around text-sm">
        <a className="item cursor-pointer" href='/'>HOME</a>
        <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="menu-trig">PROJECTS</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="flex flex-col item-start gap-4 justify-center items-center">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="boroj"
                  >
                    {t("boroj")}
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="boroj"
                  >
                    {t("boroj")}
                  </a>
                </NavigationMenuLink>
              </li>              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="boroj"
                  >
                    {t("boroj")}
                  </a>
                </NavigationMenuLink>
              </li>
              </ul>
          </NavigationMenuContent>
          </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
        <a className="item cursor-pointer" href='/construction'>{t("home_string")}</a>
        <a className="item cursor-pointer" href='/news'>{t("news_string")}</a>
        <a className="item cursor-pointer" href='/about-us'>ABOUT US</a>
        <a className="item cursor-pointer" href='/careers'>CAREERS</a>
        <a className="item cursor-pointer" href='/contact'>CONTACT US</a>
        <LangSwitcher />
        <AlertDialog>
  <AlertDialogTrigger><Button className='z-10 bg-primary-color text-white hover:text-primary-color'>{t("enquire_string")}</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className='regular text-3xl text-center m-5'>Enquire Now</AlertDialogTitle>
      <AlertDialogDescription>
        <form action="" className='flex flex-col gap-5 justify-center items-center'>
          <div className="in-cont flex w-full justify-center items-center gap-5">
          <label htmlFor="name" className='regular text-xl'>Name</label>
          <input type="text" className='h-10 w-1/3 bg-white' />
          <label htmlFor="name"className='regular text-xl'>E-Mail</label>
          <input type="text" className='h-10 w-1/3 bg-white'  />
          </div>
          <label htmlFor="name"className='regular text-xl'>Message</label>
          <input type="text"  className='h-20 w-11/12 bg-white' />
        </form>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className='bg-white text-primary-color'>Send Message</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      </div>
      </div>
  )
}

export default NavBar