import { useTranslation } from "react-i18next"
import { Button } from "../ui/button";
import { ArrowBigDown } from "lucide-react";

const NewsMain = () => {

  const { t } = useTranslation();

  return (
    <div className="w-full h-fit">
       <div className="new-11 w-full h-3/4 bg-white flex md:flex-row flex-col py-5 pt-10">
        <div className="new1 h-full md:w-1/2 w-[90%] flex justify-start items-center">
          <div className="new-img11 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex md:w-3/4 flex-col justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new11")}</h1>
          <h3 className="light mx-5 my-3">{t("dubai-modon")}</h3>
          <p className="light mx-5">{t("new11des")}</p>
        </div>
      </div>
       <div className="new-10 w-full h-3/4 bg-white flex py-5 md:flex-row flex-col-reverse">
        <div className="new2 h-full m-5 flex md:w-3/4 flex-col justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new10")}</h1>
          <h3 className="light mx-5 my-3">{t("baghdad-modon")}</h3>
          <p className="light mx-5">{t("new10des")}</p>
        </div>
        <div className="new1 h-full md:w-1/2 w-[90%] flex justify-end items-center">
          <div className="new-img10 rounded rounded-tl-[80px] w-[90%] shadow-2xl shadow-black/60"></div>
        </div>
      </div>
       <div className="new-9 w-full h-3/4 bg-white flex py-5 md:flex-row flex-col">
        <div className="new1 h-full md:w-1/2 w-[90%] flex justify-start items-center">
          <div className="new-img9 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col md:w-3/4 justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new9")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new9des")}</p>
        </div>
      </div>
       <div className="new-8 w-full h-3/4 bg-white flex py-5 md:flex-row flex-col-reverse">
        <div className="new2 h-full m-5 flex flex-col md:w-3/4 justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
        <div className="new1 h-full md:w-1/2 flex justify-end items-center">
          <div className="new-img8 rounded rounded-tl-[80px] w-[90%]  shadow-2xl shadow-black/60"></div>
        </div>
      </div>
       <div className="new-7 w-full h-3/4 bg-white flex py-5 md:flex-row flex-col">
        <div className="new1 h-full md:w-1/2  w-[90%] flex justify-start items-center">
          <div className="new-img7 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col md:w-3/4 justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new7")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new7des")}</p>
          <div className="app-btn flex md:flex-row flex-col gap-3 md:m-10 m-3">
          <Button className="mx-5">{t("down-a")} <ArrowBigDown /></Button>
          <Button className="mx-5">{t("down-i")} <ArrowBigDown /></Button>
          </div>
        </div>
      </div>
       <div className="new-6 w-full h-3/4 bg-white flex py-5 md:flex-row flex-col-reverse">
        <div className="new2 h-full m-5 flex flex-col md:w-3/4 justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
        <div className="new1 h-full md:w-1/2 flex justify-end items-center">
          <div className="new-img6 w-[90%] rounded rounded-tl-[80px] shadow-2xl shadow-black/60"></div>
        </div>
      </div>
       <div className="new-5 w-full h-3/4 bg-white flex py-5 md:flex-row flex-col">
        <div className="new1 h-full md:w-1/2 w-[90%] flex justify-start items-center">
          <div className="new-img5 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col md:w-3/4 justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
      </div>
       <div className="new-4 w-full h-3/4 bg-white flex py-5 md:flex-row flex-col-reverse">
        <div className="new2 h-full m-5 flex flex-col md:w-3/4 justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
        <div className="new1 h-full md:w-1/2 flex justify-end items-center">
          <div className="new-img4 rounded w-[90%] rounded-tl-[80px] shadow-2xl shadow-black/60"></div>
        </div>
      </div>
       <div className="new-3 w-full h-3/4 bg-white flex py-5 md:flex-row flex-col">
        <div className="new1 h-full md:w-1/2  w-[90%] flex justify-start items-center">
          <div className="new-img3 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col md:w-3/4 justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
      </div>
       <div className="new-2 w-full h-3/4 bg-white flex py-5 md:flex-row flex-col-reverse">
        <div className="new2 h-full m-5 flex flex-col md:w-3/4 justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
        <div className="new1 h-full md:w-1/2 flex justify-end items-center">
          <div className="new-img2 w-[90%] rounded rounded-tl-[80px] shadow-2xl shadow-black/60"></div>
        </div>
      </div>
       <div className="new-1 w-full h-3/4 bg-white flex py-5 md:flex-row flex-col">
        <div className="new1 h-full w-[90%] md:w-1/2 flex justify-start items-center">
          <div className="new-img1 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col md:w-3/4 justify-center items-start text-black">
          <div className="gradient-divider"></div>
          <h1 className="bold m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsMain