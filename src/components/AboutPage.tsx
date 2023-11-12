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
  const [overviewP, setOverview] = useState('Modon is one of the most prominent and successful companies in modern real estate development in Iraq and operates under the umbrella of Al Handal International Group.') 
  const [title, setTitle] = useState('OVERVIEW')
  const [des, setDes] = useState('Modon is characterized by a flexible and professional work mechanism that depends on the study and analysis of the target markets and segments to form a deep understanding of urban communities and their living and residential needs in order to design and develop residential, commercial and service projects appropriate to their needs and that fall within their purchasing capabilities.')
  const [des2, setDes2] = useState('Modon is characterized by a flexible and professional work mechanism that depends on the study and analysis of the target markets and segments to form a deep understanding of urban communities and their living and residential needs in order to design and develop residential, commercial and service projects appropriate to their needs and that fall within their purchasing capabilities.')
  const [overviewP2, setOverview2] = useState('An organization`s ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage.')
  const [overviewP3, setOverview3] = useState('VISSION')
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    const [show, setShow] = useState(1);
    const [showw, setShoww] = useState(true);
    // const [accord, setAccord] = useState(false);
    const setOver = () => {
      setShow(1)
      setShoww(true)
      setOverview('Modon is one of the most prominent and successful companies in modern real estate development in Iraq and operates under the umbrella of Al Handal International Group.')
      setTitle('OVERVIEW')
      setOverview2('An organization`s ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage.')
      setDes('Modon is characterized by a flexible and professional work mechanism that depends on the study and analysis of the target markets and segments to form a deep understanding of urban communities and their living and residential needs in order to design and develop residential, commercial and service projects appropriate to their needs and that fall within their purchasing capabilities.')
    }
  const setOver2 = () => {
    setTitle("HARDAN NOORI AL HANDA")
    setOverview("CHAIRMAN'S MESSAGE");
    setShow(2);
    setShoww(false);
    setOverview2('CEO`S Message')
    setDes('Urbanism has always been associated with civilization and was a symbol of the progress of peoples and the advancement of nations. The urban monuments in Mesopotamia are the best evidence of the rich heritage of our beloved Iraq, the “cradle of civilizations” in the development of urban man and his cultural, social and even economic growth. Since ancient times, urbanization has not been a symbol of defying nature and demonstrating the influence of states as much as it is a necessity to meet the social, economic and cultural life requirements of peoples. Wars and conflicts have a negative impact on the lives of people in all societies, and their wounds and scars do not heal easily, especially when they cause forced displacement, the emergence of overcrowding, slums, and the absence of services. The fundamental change in the rapid modern way of life and technological development has negatively affected real estate development, so that individualism and isolationism have gradually become entrenched and gradually vanished. Warm residential neighborhoods that embrace coexisting and united communities of all shades. Our love for Iraqis for life made us overcome all difficulties without exception and gave us the motivation in cities to revive intimacy and affection between families through modern real estate projects that depend on providing integrated services in a bright green environment in which social, cultural and recreational facilities are diverse for all family members. We in Mudon have taken it upon ourselves to return to the basics of real estate development in response to the living and living needs of the Iraqi society and to harness urban progress and technology in developing real estate projects in a modern, modern manner that does not contradict, or even enhance, our cultural heritage and our rich social traditions. Our success in Modon depends on our provision of distinguished and innovative real estate products that fall within the purchasing power of the targeted segments of all segments of society through creativity in designing the spaces and studied divisions of real estate units and diligence in the development and implementation of financial and value engineering and in perfecting implementation and ensuring the quality of construction. Our journey with the residents does not end when the real estate units are delivered. Rather, it takes a new direction by providing a maintenance and management service for sustainable world-class facilities with the aim of ensuring the continuity of the residents` prosperity and maintaining the quality and value of their real estate assets.')
    setOverview3('')
    setDes2('')
  }
  const setOver3 = () => {
    setTitle("MISSION & VISION")
    setOverview("We are dedicated to providing world-class service and market-leading expertise to our clients. We are passionate about providing the extra value that others simply will not. Fanatical integrity and consistently impressive results will be the signature of our service.");
    setShow(3);
    setShoww(false);
    setOverview2('MISSION')
    setOverview3('VISSION')
    setDes('Making a continuous and permanent change to the real estate map of Iraq, developing mini-cities with an integrated service nature, and achieving inclusion through a unique experience of owning a dream home.')
    setDes2('To be the first real estate developer in Iraq that gives its customers complete satisfaction and added value to its real estate services, to be an Iraqi real estate icon that changes the urbanization map towards a new and integrated concept of a unique housing experience that links with its customers with close bonds based on loyalty and distinguished service in the after-sales stage.')
  }
  const setOver4 = () => {
    setTitle('VALUES & DISTINCTION')
    setOverview('We are dedicated to providing world-class service and market-leading expertise to our clients. We are passionate about providing the extra value that others simply will not. Fanatical integrity and consistently impressive results will be the signature of our service.')
    setShow(4);
    setShoww(false);
    setOverview2('VALUES');
    setDes('Innovation: Moving away from traditional practices and constantly seeking to create new creative ideas Initiation: Take the initiative courageously and not hesitate to adopt bold policies to achieve the goals. Perfection: Diligence and sophistication in designing and executing the real estate products, with zero tolerance policy in quality assurance.')
    setOverview3('DISTINCTION');
    setDes2('In Modon, all our projects have a distinctive and modern design that mimic the lifestyle of the target groups and meet their life and social requirements. From this point of view, we rely on the world`s most prestigious and award-winning design offices for their excellence in designing inhabited , serviced and green spaces.')
  }
  const setOver5 = () => {
    setTitle('COMMITMENT & FOCUS');
    setOverview('We are dedicated to providing world-class service and market-leading expertise to our clients. We are passionate about providing the extra value that others simply will not. Fanatical integrity and consistently impressive results will be the signature of our service.')
    setShow(5);
    setShoww(false);
    setOverview2('COMMITMENT');
    setOverview3('FOCUS');
    setDes(`01. Develop and manage thriving communities based on diversity and inclusion ${<br />} 02. Encouraging our competitors to ensure better results to drive growth forward 03. Providing strategic investments in society to reach a more sustainable and inclusive economy 04. Develop social diversity standards and apply them at all stages of design in managing all our assets`)
  }
  const setOver6 = () => {
    setTitle('BOARD OF DIRECTORS');
    setOverview('Meet our board members that have contributed to the success of the company, and thanks to their proper management MODON has become one of the leading private real estate developers in Iraq.')
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
    setTitle("Hardan Noori Al Handal")
    setOverview("Vice Chairman");
    setShow(2);
    setShoww(false);
    setOverview2('Role')
    setDes('Hardan Al Handal plays a vital role as the business coordinator in Al Handal International Group (HIG) specifically within commercial investments, real estate management, and shipping and cargo divisions. His reputable experience allowed him to secure significant agreements while handling HIG’s businesses in Jordan, Turkey, and Japan. Hardan is a major player in building the group’s international reputation of integrity, professionalism, and excellence.')
    setOverview3('')
    setDes2('')
    setImage(charimanImg)
  }
  const setOverMohamed = () => {
    setImage(charimanImg5)
    setTitle("Mohammed Noori Al Handal")
    setOverview("Chief Executive Officer");
    setShow(2);
    setShoww(false);
    setOverview2('Role')
    setDes('Mohammed Noori Al Handal successfully climbed the ranks of Al Handal International Group (HIG) beginning in the year 2000, and eventually became the CEO of the group in 2007. Due to his valuable experience, high education, and rigorous training, he has proudly been the sole motivator behind the achievement of the major milestones in the group’s expansion in trading investments, general trading, and real estate management. As CEO, he urges uncompromising social responsibility across all divisions.')
    setOverview3('')
    setDes2('')
  }
  const setOverWadeea = () => {
    setImage(charimanImg4)
    setTitle("Wadeea Noori Al Handal")
    setOverview("Chairman");
    setShow(2);
    setShoww(false);
    setOverview2('Role')
    setDes('Through the leadership of Al Handal Group, Ashur Bank, and many other distinguished corporations, Eng. Wadeea Al Handal actively contributes to the economic growth and the progression in challenging business environments of Iraq and the Middle East. During his studies in the late seventies, Wadeea has managed to gain substantial experience while playing a key role in expanding his father’s company in the fields of general trade, finance, and technology in Iraq, Turkey, Jordan, Lebanon, and the GCC.')
    setOverview3('')
    setDes2('')
  }
  const setOverWadood = () => {
    setImage(charimanImg3)
    setTitle("Wadood Noori Al Handal")
    setOverview("Executive Director");
    setShow(2);
    setShoww(false);
    setOverview2('Role')
    setDes('Wadood Noori Al Handal has been utilizing and relying on his experience in co-managing Al Handal International Group (HIG) alongside his brothers since the year 2000. By mastering a high level of quality with regards to customer service and operations that drive efficient productivity, he successfully developed a record in optimizing long-term gains in performance. Wadood strives to deliver high-quality projects across the group by encouraging creative problem solving and innovative solutions.')
    setOverview3('')
    setDes2('')
  }
  const setOverNoor = () => {
    setImage(charimanImg2)
    setTitle("Noor Noori Al Handal")
    setOverview("Board Member");
    setShow(2);
    setShoww(false);
    setOverview2('Role')
    setDes('Noor Noori Al Handal is a current board member of Al Handal Group, with almost nine years of experience working through a variety of roles in the treasury and investments department at Ashur International Bank. Noor’s philosophy revolves around motivating and leading his colleagues through rigorous training to ensure healthy and prospering customer relations. With a continuous thirst for knowledge, Noor can always be found encouraging others to broaden their skills and awareness of the industry.')
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
    <h1 className='regular text-xl relative mt-40'>ABOUT US</h1>
    {/* <img src={modonWhite} alt="MODON" height={150} width={150} /> */}
    <div className="constructs flex w-full">
      <div className="construct1 flex flex-col justify-center items-center">
        <div className="buruj-btns flex flex-wrap justify-center items-center">
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver}>Overview</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver2}>Chairman's Message</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver3}>Mission & Vision</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver4}>Values & Distinction</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver5}>Commitment & Focus</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver6}>Board of Directors</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver7}>Privacy Policy</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver8}>Terms & Conditions</Button>
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
           <h1 className='regular text-xl m-2'>Hardan Noori Al Handal</h1>
           <div className="light">Vice Chairman</div>
        </div>
        <div className="construct2 flex flex-col justify-center items-center m-5 regular cursor-pointer" onClick={setOverMohamed}>
           <div className="mohamed-img"></div>
           <h1 className='regular text-xl m-2'>Mohammed Noori Al Handal</h1>
           <div className="light">Chief Executive Officer</div>
        </div>
        <div className="construct3 flex flex-col justify-center items-center m-5 regular cursor-pointer" onClick={setOverWadood}>
           <div className="wadood-img"></div>
           <h1 className='regular text-xl m-2'>Wadood Noori Al Handal</h1>
           <div className="light">Executive Director</div>
        </div>
        <div className="construct4 flex flex-col justify-center items-center m-5 regular cursor-pointer" onClick={setOverNoor}>
           <div className="noor-img"></div>
           <h1 className='regular text-xl m-2'>Noor Noori Al Handal</h1>
           <div className="light">Board Member</div>
        </div>
        <div className="construct5 flex flex-col justify-center items-center m-5 regular cursor-pointer" onClick={setOverWadeea}>
           <div className="wadeea-img"></div>
           <h1 className='regular text-xl m-2'>Wadeea Noori Al Handal</h1>
           <div className="light">Chairman</div>
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
          <div className="overview-d m-3 text-md">{des}</div> 
          </div> : show===5 ? <div className="flex flex-col w-1/2 h-full justify-around items-start light">
            <div className="flex flex-col">
          <div className="overview-p2 m-3 regular text-3xl text-white">{t(overviewP2)}</div>
          <Accordion type="multiple"className="w-96">
             <AccordionItem value="item-1">
               <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="leading-7">
               <span className="text-xl regular">01.</span> Develop and manage thriving communities based on diversity and inclusion. <br />
               <span className="text-xl regular">02.</span> Encouraging our competitors to ensure better results to drive growth forward.<br />
               <span className="text-xl regular">03.</span> Providing strategic investments in society to reach a more sustainable and inclusive economy.<br />
               <span className="text-xl regular">04.</span> Develop social diversity standards and apply them at all stages of design in managing all our assets.
                </AccordionContent>
               </AccordionItem>
          </Accordion>
            </div>
            <div className="flex flex-col">
          <div className="overview-p3 m-3 regular text-3xl text-white">{t(overviewP3)}</div>
          <Accordion type="multiple" className="w-96">
             <AccordionItem value="item-1">
               <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="leading-7">
                <span className="text-xl regular">01.</span> Investment, sustainability and creating a reasonable long-term vision to achieve growth that serves the interests of the current and future generations <br />
               <span className="text-xl regular">02.</span> The welfare and inclusiveness of society and the creation of fruitful job opportunities and a worthy life for citizens<br />
               <span className="text-xl regular">03.</span> Participation and community awareness<br />
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
          <AboutCard icon={Building} title="Legacy Of Craft" description="Quality is at the core of Modon Real Estate Development. Every element of each project is, therefore, designed and developed in-house." />
          <AboutCard icon={Castle} title="We Build Homes" description="We don’t just build apartments and villas. We ensure in every aspect that it is indeed a home for you and your family. We build Homes." />
          <AboutCard icon={Layers3Icon} title="Passion For Perfection" description="Crafting a product that stands out entails attention to the finest of details. Ensuring exceptional quality, every time. You can see that perfection in every inch." />
          <AboutCard icon={LeafyGreen} title="Building The Future" description="The future is not ours to await; it’s ours to create. Those who plan for future transformations are best placed to design and control the path ahead of us all" />
          </div> : ''}
          {showw ? <div className="fixed-image h-72  w-full flex justify-around items-center">
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={5} delay={2} duration={3}/></span> <br/> TOTAL PROJECTS</h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={2300} delay={2} duration={3}/></span> <br/> HOUSES BUILT</h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={235} delay={2} duration={3}/></span> <br/> QUALIFIED WORKERS</h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={2} delay={2} duration={3}/></span> <br/> AWARDS</h1>
          </div> : ''}
         </div>
         </div>
         </div>
         <Footer />

         </div>
        
  )
}

export default AboutPage