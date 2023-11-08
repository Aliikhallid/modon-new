import modonLogo from '../../assets/Modon-White.png';

export const NewsHeader = () => {
  let i = 0;
  const txt = 'Know All the latest news about Modon-Iraq and stay updated about the next biggest real-estate company.';
  const speed = 10;

  function typeWriter() {
    if (i < txt.length) {
      const typeParag = document.getElementById("type-writer");
      typeParag!.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  return (
    <div className="flex flex-col w-full h-96 justify-center items-center bg-primary-color relative" onLoad={typeWriter}>
      <div className="news-head-cont flex flex-col justify-center items-center">
        <img src={modonLogo} alt="MODON" height={120} width={120} />
        <h1 className="regular text-6xl m-2">NEWS</h1>
      </div>
      <p className="text-xl light w-1/2 text-center" id="type-writer"></p>
      {/* <div className="arrowdown absolute bottom-20 right-40 p-10 border rounded-full cursor-pointer">
            </div> */}
    </div>
  );
};
