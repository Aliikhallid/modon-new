// import GIF from '../assets/SplashGifSample.gif';
import modonLogo from '../assets/Modon-White.png'

export default function SplashScreen() {

  return (
    <div className='w-full h-full bg-primary-color flex flex-col justify-center gap-0 items-center fixed'>
      {/* <img id="logo" src={GIF} alt="Logo" /> */}
      <img id="logo" src={modonLogo} alt="Logo"height={160} width={160} />
    </div>
  )
}
