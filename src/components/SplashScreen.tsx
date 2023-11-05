// import GIF from '../assets/SplashGifSample.gif';
import modonLogo from '../assets/cropped-logo-coloured-1-pco5cfz1mxysmj28om452w38747priw3aun41caz28.webp'

export default function SplashScreen() {

  return (
    <div className='w-full h-full bg-white flex flex-col justify-center gap-0 items-center fixed'>
      {/* <img id="logo" src={GIF} alt="Logo" /> */}
      <img id="logo" src={modonLogo} alt="Logo"height={160} width={160} />
    </div>
  )
}
