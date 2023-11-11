import { useTranslation } from "react-i18next"
import { Button } from "../ui/button";
import { ArrowBigDown } from "lucide-react";

const NewsMain = () => {

  const { t } = useTranslation();

  return (
    <div className="w-full h-screen">
       <div className="new-11 w-full h-3/4 bg-white flex">
        <div className="new1 h-full w-1/2 flex justify-start items-center">
          <div className="new-img11 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new11")}</h1>
          <h3 className="light mx-5 my-3">{t("dubai-modon")}</h3>
          <p className="light mx-5">{t("new11des")}</p>
        </div>
      </div>
       <div className="new-10 w-full h-3/4 bg-white flex">
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new10")}</h1>
          <h3 className="light mx-5 my-3">{t("baghdad-modon")}</h3>
          <p className="light mx-5">{t("new10des")}</p>
        </div>
        <div className="new1 h-full w-1/2 flex justify-end items-center">
          <div className="new-img10 rounded rounded-tl-[80px] shadow-2xl shadow-black/60"></div>
        </div>
      </div>
       <div className="new-9 w-full h-3/4 bg-white flex">
        <div className="new1 h-full w-1/2 flex justify-center items-center">
          <div className="new-img9 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new9")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new9des")}</p>
        </div>
      </div>
       <div className="new-8 w-full h-3/4 bg-white flex">
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
        <div className="new1 h-full w-1/2 flex justify-center items-center">
          <div className="new-img8 rounded rounded-tl-[80px] shadow-2xl shadow-black/60"></div>
        </div>
      </div>
       <div className="new-7 w-full h-3/4 bg-white flex">
        <div className="new1 h-full w-1/2 flex justify-center items-center">
          <div className="new-img7 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new7")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new7des")}</p>
          <p className="light m-5">{t("and-v")}</p>
          <Button className="mx-5">{t("down-a")} <ArrowBigDown /></Button>
          <p className="light m-5">{t("ios-v")}</p>
          <Button className="mx-5">{t("down-i")} <ArrowBigDown /></Button>
        </div>
      </div>
       <div className="new-8 w-full h-3/4 bg-white flex">
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
        <div className="new1 h-full w-1/2 flex justify-center items-center">
          <div className="new-img8 rounded rounded-tl-[80px] shadow-2xl shadow-black/60"></div>
        </div>
      </div>
       <div className="new-8 w-full h-3/4 bg-white flex">
        <div className="new1 h-full w-1/2 flex justify-center items-center">
          <div className="new-img8 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
      </div>
       <div className="new-8 w-full h-3/4 bg-white flex">
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
        <div className="new1 h-full w-1/2 flex justify-center items-center">
          <div className="new-img8 rounded rounded-tl-[80px] shadow-2xl shadow-black/60"></div>
        </div>
      </div>
       <div className="new-8 w-full h-3/4 bg-white flex">
        <div className="new1 h-full w-1/2 flex justify-center items-center">
          <div className="new-img8 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
      </div>
       <div className="new-8 w-full h-3/4 bg-white flex">
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
        <div className="new1 h-full w-1/2 flex justify-center items-center">
          <div className="new-img8 rounded rounded-tl-[80px] shadow-2xl shadow-black/60"></div>
        </div>
      </div>
       <div className="new-8 w-full h-3/4 bg-white flex">
        <div className="new1 h-full w-1/2 flex justify-center items-center">
          <div className="new-img8 rounded rounded-tr-[80px] shadow-2xl shadow-black/60"></div>
        </div>
        <div className="new2 h-full m-5 flex flex-col justify-center items-start text-black">
          <h1 className="regular m-3 text-3xl text-primary-color mx-5">{t("new8")}</h1>
          <h3 className="light mx-5 my-3">{t("only-baghdad")}</h3>
          <p className="light mx-5">{t("new8des")}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsMain