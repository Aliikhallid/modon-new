import { Button } from "../ui/button"
import NavBar from "../NavBar"

const FutureUpdates = () => {
  // const gallery1 = document.querySelector('.gallery1');
  // const gallery2 = document.querySelector('.gallery2');
  // const gallery3 = document.querySelector('.gallery3');
  let august = false;
  let jan = false;
  let sep = false;
  const showAugust = () => {
    august = !august;
    console.log(august)
 }
 const showJanuary = () => {
   jan = !jan;
 }
 const showSep = () => {
   sep = !sep;
 }

  return (
    <div className="buruj-updates w-full flex flex-col justify-start items-center relative">
      <NavBar />
    {/* <img src={burujLogo} alt="MODON" height={200} width={200} /> */}
    <h1 className='regular text-5xl relative mt-40'>FUTURE UPDATES</h1>
    <div className="constructs flex">
      <div className="construct1 flex flex-col justify-center items-center m-5">
        <div className="buruj-btns">
         <Button className='bg-primary-color m-2' onClick={showAugust}>August</Button>
         <Button className='bg-primary-color m-2' onClick={showJanuary}>January</Button>
         <Button className='bg-primary-color m-2' onClick={showSep}>Septemper</Button>
        </div>
         {august ? <div className="gallery1 flex flex-col gap-10 transition-all absolute bottom-16">
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
         </div> : jan ? <div className="gallery2 flex flex-col gap-10 transition-all absolute bottom-16">
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
         </div> : sep ? 
         <div className="gallery3 flex flex-col gap-10 transition-all absolute bottom-16">
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
         </div> : ''}

      </div>
      </div>
  </div>
  )
}

export default FutureUpdates