import modonLogo from '../../assets/modonlogo-removebg-preview.png';
import arrowDown from '../../assets/hot-air-balloon.png'
import { ArrowDownIcon } from '@radix-ui/react-icons';

const NewsHeader = () => {
  let i = 0;
  const txt = 'Know All the latest news about Modon-Iraq and stay updated about the next biggest real-estate company.';
  const speed = 50;

function typeWriter() {
  if (i < txt.length) {
   const typeParag = document.getElementById("type-writer");
   typeParag.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
  return (
    <div className="flex w-full h-screen justify-center items-center bg-primary-color relative" onLoad={typeWriter}>
    <div className="news-head-cont flex flex-col justify-center items-center">
    <img src={modonLogo} alt="MODON" />
    <h1 className="regular text-6xl">NEWS</h1>
    </div>
    <p className="text-xl light w-1/2" id="type-writer"></p>
    <div className="arrowdown absolute bottom-20 right-40 p-10 border rounded-full cursor-pointer">
    <ArrowDownIcon className='arrow-icon relative' height={25} width={25} />
    </div>
  </div>
  )
}

export default NewsHeader