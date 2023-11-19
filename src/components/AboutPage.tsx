import { Button } from "./ui/button";
import NavBar from "./NavBar";
import CountUp from 'react-countup';
// import modonWhite from '../assets/Modon-White.png'
import { useLayoutEffect,useState } from "react";
import charimanImg from '../assets/Hardan-Noori-Al-Handalinner-new-1-1.jpg'
import charimanImg2 from '../assets/BM-Noor-2-scaled.jpg'
import charimanImg3 from '../assets/BM-Wadood-2-scaled.jpg'
import charimanImg4 from '../assets/Chairman-1-scaled.jpg'
import charimanImg5 from '../assets/Mohammed-Noori-Al-Handalinner.jpg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/aboutPage/Accordion"
import missionImg from '../assets/R3.jpg'
import vissionImg from '../assets/Bedroom-3.jpg'
import valueImg from '../assets/iStock-916185828-1.jpg'
import distImg from '../assets/extraction-23.png'
import commitImg from '../assets/shutterstock_630815573.jpg'
import focusImg from '../assets/future-city-min-1.jpg'
import Footer from "./sections/Footer";
import AboutCard from "./aboutPage/AboutCard";
import { Building, Castle, Layers3Icon, LeafyGreen } from "lucide-react";
import InfoStructure from "./aboutPage/InfoStructure";
import TermsAndConditions from "./aboutPage/TermsAndConditions";
import FAQ from "./aboutPage/FAQ";
import { useTranslation } from "react-i18next";
const AboutPage = () => {
  const [overviewP, setOverview] = useState('about-overview') 
  const [title, setTitle] = useState('overview-cap')
  const [des, setDes] = useState('overview-desc')
  const [des2, setDes2] = useState('overview-desc2')
  const [overviewP2, setOverview2] = useState('overview2')
  const [overviewP3, setOverview3] = useState('vision')
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    const [show, setShow] = useState(1);
    const [showw, setShoww] = useState(true);
    // const [accord, setAccord] = useState(false);
    const setOver = () => {
      setShow(1)
      setShoww(true)
      setOverview('about-overview')
      setTitle('overview-cap')
      setOverview2('overview2')
      setDes('overview-desc2')
    }
  const setOver2 = () => {
    setTitle("hardan")
    setOverview("hardan-position");
    setShow(2);
    setShoww(false);
    setOverview2('ceo-message')
    setDes('ceo-message-content')
    setOverview3('')
    setDes2('')
  }
  const setOver3 = () => {
    setTitle("mission-vision")
    setOverview("mission-desc");
    setShow(3);
    setShoww(false);
    setOverview2('mission')
    setOverview3('vision')
    setDes('missionvision-desc')
    setDes2('missionvision-desc2')
  }
  const setOver4 = () => {
    setTitle('values-distinction')
    setOverview('values-overview')
    setShow(4);
    setShoww(false);
    setOverview2('values');
    setDes('values-desc')
    setOverview3('distinction');
    setDes2('distinction-desc')
  }
  const setOver5 = () => {
    setTitle('commitment-focus');
    setOverview('commitment-overview')
    setShow(5);
    setShoww(false);
    setOverview2('commitment');
    setOverview3('focus');
    setDes(`${t("focus-desc1")} ${<br />} ${t("focus-desc2")}`)
  }
  const setOver6 = () => {
    setTitle('boardofdirectors');
    setOverview('board-overview')
    setShow(6);
    setShoww(false);
  }


const setOver7 = () => {
  setTitle('privacy-policy');
  setOverview('privacy-policy-overview')
  setShow(7);
  setShoww(false);
}

const setOver8 = () => {
  setTitle('terms-conditions');
  setOverview('terms-conditions-overview')
  setShow(8);
  setShoww(false);
}

const setOver9 = () => {
  setTitle('faq');
  setOverview('faq-overview')
  setShow(9);
  setShoww(false);
}
  const [image, setImage] = useState(charimanImg);
  const setOverHardan = () => {
    setTitle("handan")
    setOverview("hardan-postion2");
    setShow(2);
    setShoww(false);
    setOverview2('role')
    setDes('hardan-desc')
    setOverview3('')
    setDes2('')
    setImage(charimanImg)
  }
  const setOverMohamed = () => {
    setImage(charimanImg5)
    setTitle("mohammednoori")
    setOverview("mohammednoori-position");
    setShow(2);
    setShoww(false);
    setOverview2('role')
    setDes('mohammednoori-desc')
    setOverview3('')
    setDes2('')
  }
  const setOverWadeea = () => {
    setImage(charimanImg4)
    setTitle("wadeea")
    setOverview("wadeea-position");
    setShow(2);
    setShoww(false);
    setOverview2('role')
    setDes('wadeea-desc')
    setOverview3('')
    setDes2('')
  }
  const setOverWadood = () => {
    setImage(charimanImg3)
    setTitle("wadood")
    setOverview("wadood-position");
    setShow(2);
    setShoww(false);
    setOverview2('role')
    setDes('wadood-desc')
    setOverview3('')
    setDes2('')
  }
  const setOverNoor = () => {
    setImage(charimanImg2)
    setTitle("noor")
    setOverview("noor-position");
    setShow(2);
    setShoww(false);
    setOverview2('role')
    setDes('noor-desc')
    setOverview3('')
    setDes2('')
  }

  const {t} = useTranslation();

  const PrivacyPolicyText = [
    {title:"whatAreCookies",description:"cookiesDesc"},
    {title:"cookiesUseQ",description:"cookiesUseA"},
    {title:"cookiesTypesQ",description:"cookiesTypesA"},
    {title:"cookiesThirdpartyQ",description:"cookiesThirdpartyA"},
    {title:"cookiesDeleteQ",description:"cookiesDeleteA"},
    {title:"cookiesDelQ",description:"cookiesDelA"},
    {title:"cookiesPrivQ",description:"cookiesPrivA"},
    {title:"cookiesInfoQ",description:"cookiesInfoA"},
    {title:"cookiesInfoUseQ",description:"cookiesInfoUseA"},
    {title:"cookiesSecurityQ",description:"cookiesSecurityA"},
    {title:"cookiesLinksQ",description:"cookiesLinksA"},
    {title:"cookiesInfoUpdateQ",description:"cookiesInfoUpdateA"},
    {title:"cookiesChoiceQ",description:"cookiesChoiceA"},
    {title:"cookiesNotiChangeQ",description:"cookiesNotiChangeA"},
  ]

  const handleComponent: { [key: number]: JSX.Element } = {
    7: <InfoStructure titleAndDescription={PrivacyPolicyText} />,
    8: <TermsAndConditions />,
    9: <FAQ/>
  };
  
  
  return (
    <div className="bg-primary-multiply-color w-full h-fit flex flex-col justify-start items-center relative">
      <NavBar />
    <h1 className='regular text-xl relative mt-40'>{t("about-us-nav")}</h1>
    {/* <img src={modonWhite} alt="MODON" height={150} width={150} /> */}
    <div className="constructs flex w-full">
      <div className="construct1 flex flex-col justify-center items-center">
        <div className="buruj-btns flex flex-wrap justify-center items-center">
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver}>{t("overview")}</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver2}>{t("chairman-message")}</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver3}>{t("mission-visionn")}</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver4}>{t("valuesdist")}</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver5}>{t("valuesdist")}</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver6}>{t("bod")}</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver7}>{t("privacypolicy")}</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver8}>{t("termscond")}</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver9}>FAQ</Button>

        </div>
         <div className="flex flex-wrap justify-center gap-5 my-20 animate-fade-down animate-duration-1000 animate-delay-500">
          <div className="flex flex-col gap-5 mb-10 justify-center items-center">
          <h1 className="text-5xl regular">{t(title)}</h1>
          <div className="overview-p text-lg w-3/4 text-center light">{t(overviewP)}</div>
          </div>
         {show > 6? handleComponent[show]: show===6 ? <div className="construction-updates w-full h-fit py-5 flex flex-col justify-center items-center">
      <div className="constructs flex flex-wrap justify-center items-center">
        <div className="construct1 flex flex-col justify-center items-center m-5 regular cursor-pointer" onClick={setOverHardan}>
           <div className="hardan-img"></div>
           <h1 className='regular text-xl m-2'>{t("hardan")}</h1>
           <div className="light">{t("hardan-postion2")}</div>
        </div>
        <div className="construct2 flex flex-col justify-center items-center m-5 regular cursor-pointer" onClick={setOverMohamed}>
           <div className="mohamed-img"></div>
           <h1 className='regular text-xl m-2'>{t("mohammednoori")}</h1>
           <div className="light">{t("mohammednoori-position")}</div>
        </div>
        <div className="construct3 flex flex-col justify-center items-center m-5 regular cursor-pointer" onClick={setOverWadood}>
           <div className="wadood-img"></div>
           <h1 className='regular text-xl m-2'>{t("wadood")}</h1>
           <div className="light">{t("wadood-position")}</div>
        </div>
        <div className="construct4 flex flex-col justify-center items-center m-5 regular cursor-pointer" onClick={setOverNoor}>
           <div className="noor-img"></div>
           <h1 className='regular text-xl m-2'>{t("noor")}</h1>
           <div className="light">{t("noor-position")}</div>
        </div>
        <div className="construct5 flex flex-col justify-center items-center m-5 regular cursor-pointer" onClick={setOverWadeea}>
           <div className="wadeea-img"></div>
           <h1 className='regular text-xl m-2'>{t("wadeea")}</h1>
           <div className="light">{t("wadeea-position")}</div>
        </div>
        </div>
    </div> :<div className="videos relative flex justify-center items-center">
            <div className="flex w-1/2 justify-center items-center">
          {show===1 ? <iframe width="620" height="415" className="video2 rounded" src="https://www.youtube.com/embed/tgbNymZ7vqY">Hello</iframe> :show===2 ? <img src={image} height={415} width={620}></img> : show===3 ? 
        <div className="flex flex-col gap-3">
          <img src={missionImg} height={415} width={620}></img>
          <img src={vissionImg} height={415} width={620}></img>
        </div>  
       : show===4 ? <div className="flex flex-col gap-3">
       <img src={valueImg} height={415} width={620}></img>
       <img src={distImg} height={415} width={620}></img>
     </div> : show===5 ?  <div className="flex flex-col gap-3">
       <img src={commitImg} height={415} width={620}></img>
       <img src={focusImg} height={415} width={620}></img>
     </div> : ''}
            </div>
          {show<2 ? <div className="flex flex-col w-1/2 justify-center items-start light">
          <div className="overview-p2 m-3 regular text-3xl text-white">{t(overviewP2)}</div>
          <div className="overview-d m-3 text-md">{t(des)}</div> 
          </div> : show===5 ? <div className="flex flex-col w-1/2 h-full justify-around items-start light">
            <div className="flex flex-col">
          <div className="overview-p2 m-3 regular text-3xl text-white">{t(overviewP2)}</div>
          <Accordion type="multiple"className="w-96">
             <AccordionItem value="item-1">
               <AccordionTrigger>{t("accessible?")}</AccordionTrigger>
                <AccordionContent className="leading-7">
               <span className="text-xl regular">1.</span> {t("about1")} <br />
               <span className="text-xl regular">2.</span> {t("about2")} <br />
               <span className="text-xl regular">3.</span> {t("about3")}<br />
               <span className="text-xl regular">4.</span> {t("about4")}
                </AccordionContent>
               </AccordionItem>
          </Accordion>
            </div>
            <div className="flex flex-col">
          <div className="overview-p3 m-3 regular text-3xl text-white">{t(overviewP3)}</div>
          <Accordion type="multiple" className="w-96">
             <AccordionItem value="item-1">
               <AccordionTrigger>{t("accessible?")}</AccordionTrigger>
                <AccordionContent className="leading-7">
                <span className="text-xl regular">1.</span> {t("accessible1")} <br />
               <span className="text-xl regular">2.</span> {t("accessible2")}<br />
               <span className="text-xl regular">3.</span> {t("accessible3")}<br />
                </AccordionContent>
               </AccordionItem>
          </Accordion>
            </div>
          </div> : <div className="flex flex-col w-1/2 h-full justify-around items-start light">
            <div className="flex flex-col">
          <div className="overview-p2 m-3 regular text-3xl text-white">{t(overviewP2)}</div>
          <div className="overview-d m-3 text-md mb-10">{t(des)}</div> 
            </div>
            <div className="flex flex-col">
          <div className="overview-p2 m-3 regular text-3xl text-white">{t(overviewP3)}</div>
          <div className="overview-d m-3 text-md">{t(des2)}</div> 
            </div>
          </div>}
          </div>}
          {showw ? <div className="about-cards flex gap-10 justify-center items-center h-70 my-10 w-full m-5">
          <AboutCard icon={Building} title="legacy" description="legacy-desc" />
          <AboutCard icon={Castle} title="webuildhomes" description="webuildhomes-desc" />
          <AboutCard icon={Layers3Icon} title="passion" description="passion-desc" />
          <AboutCard icon={LeafyGreen} title="buildingthefuture" description="buildingthefuture-desc" />
          </div> : ''}
          {showw ? <div className="fixed-image h-72  w-full flex justify-around items-center">
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={5} delay={2} duration={3}/></span> <br/> {t("totalprojects")}</h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={2300} delay={2} duration={3}/></span> <br/>{t("housesbuilt")} </h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={235} delay={2} duration={3}/></span> <br/>{t("qualifiedworkers")} </h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={2} delay={2} duration={3}/></span> <br/> {t("awards")}</h1>
          </div> : ''}
         </div>
         </div>
         </div>
         <Footer />

         </div>
        
  )
}

export default AboutPage