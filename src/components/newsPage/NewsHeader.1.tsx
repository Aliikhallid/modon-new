import modonLogo from '../../assets/Modon-White.png';
import { useTranslation } from 'react-i18next';

export const NewsHeader = () => {
  let i = 0;
  const txt = 'Know All the latest news about Modon-Iraq and stay updated about the next biggest real-estate'; 
  const speed = 10;
  const {t} = useTranslation();

  function typeWriter() {
    if (i < txt.length) {
      const typeParag = document.getElementById("type-writer");
      typeParag!.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  return (
    <div className="news-header flex flex-col w-full h-[75vh] justify-center items-center text-white relative" onLoad={typeWriter}>
      <div className="news-head-cont flex flex-col justify-center items-center">
        <img src={modonLogo} alt="MODON" height={120} width={120} />
        <h1 className="regular md:text-6xl text-4xl m-4">{t("news-title")}</h1>
      </div>
      {/* <p className="text-xl light w-1/2 m-2 text-center" id="type-writer"></p> */}
      {/* <div className="arrowdown absolute bottom-20 right-40 p-10 border rounded-full cursor-pointer">
            </div> */}
    </div>
  );
};
