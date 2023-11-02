import { Button } from "../ui/button"
import NavBar from "../NavBar"

const FutureUpdates = () => {
  const gallery1 = document.querySelector('.gallery1');
  const gallery2 = document.querySelector('.gallery2');
  const gallery3 = document.querySelector('.gallery3');
  const showAugust = () => {
    gallery2?.classList.remove('opacity-100');
    gallery3?.classList.remove('opacity-100');
    gallery2?.classList.add('opacity-0');
    gallery3?.classList.add('opacity-0');
   gallery1?.classList.remove('opacity-0');
   gallery1?.classList.add('opacity-100');
 }
 const showJanuary = () => {
   gallery3?.classList.remove('opacity-100');
   gallery1?.classList.remove('opacity-100');
   gallery1?.classList.add('opacity-0');
   gallery3?.classList.add('opacity-0');
   gallery2?.classList.remove('opacity-0');
   gallery2?.classList.add('opacity-100');
 }
 const showSep = () => {
   gallery2?.classList.remove('opacity-100');
   gallery1?.classList.remove('opacity-100');
   gallery1?.classList.add('opacity-0');
   gallery2?.classList.add('opacity-0');
   gallery3?.classList.remove('opacity-0');
   gallery3?.classList.add('opacity-100');
 }

  return (
    <div className="buruj-updates w-full flex flex-col justify-start items-center relative">
      <NavBar />
    {/* <img src={burujLogo} alt="MODON" height={200} width={200} /> */}
    <h1 className='regular text-5xl relative mt-40'>Future Updates</h1>
    <div className="constructs flex">
      <div className="construct1 flex flex-col justify-center items-center m-5">
        <div className="buruj-btns">
         <Button className='bg-primary-color m-2' onClick={showAugust}>August</Button>
         <Button className='bg-primary-color m-2' onClick={showJanuary}>January</Button>
         <Button className='bg-primary-color m-2' onClick={showSep}>Septemper</Button>
        </div>
         <div className="gallery1 flex flex-col gap-10 transition-all absolute bottom-16">
          <div className="gallery-gallery flex gap-10">
          <div className="buruj-img"></div>
          <div className="buruj-img"></div>
          <div className="buruj-img"></div>
          </div>
          <div className="gallery-gallery flex gap-10">
          <div className="buruj-img"></div>
          <div className="buruj-img"></div>
          <div className="buruj-img"></div>
          </div>
          <div className="gallery-gallery flex gap-10">
          <div className="buruj-img"></div>
          <div className="buruj-img"></div>
          <div className="buruj-img"></div>
          </div>
         </div>
         <div className="gallery2 flex flex-col gap-10 transition-all absolute bottom-16 opacity-0">
          <div className="gallery-gallery flex gap-10">
          <div className="buruj2-img"></div>
          <div className="buruj2-img"></div>
          <div className="buruj2-img"></div>
          </div>
          <div className="gallery-gallery flex gap-10">
          <div className="buruj2-img"></div>
          <div className="buruj2-img"></div>
          <div className="buruj2-img"></div>
          </div>
          <div className="gallery-gallery flex gap-10">
          <div className="buruj2-img"></div>
          <div className="buruj2-img"></div>
          <div className="buruj2-img"></div>
          </div>
         </div>
         <div className="gallery3 flex flex-col gap-10 transition-all absolute bottom-16 opacity-0">
          <div className="gallery-gallery flex gap-10">
          <div className="buruj3-img"></div>
          <div className="buruj3-img"></div>
          <div className="buruj3-img"></div>
          </div>
          <div className="gallery-gallery flex gap-10">
          <div className="buruj3-img"></div>
          <div className="buruj3-img"></div>
          <div className="buruj3-img"></div>
          </div>
          <div className="gallery-gallery flex gap-10">
          <div className="buruj3-img"></div>
          <div className="buruj3-img"></div>
          <div className="buruj3-img"></div>
          </div>
         </div>
      </div>
      </div>
  </div>
  )
}

export default FutureUpdates