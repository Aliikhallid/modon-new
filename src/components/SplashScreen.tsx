import GIF from '../assets/SplashGifSample.gif';

export default function SplashScreen() {

  return (
    <div className='w-full h-full bg-white flex flex-col justify-center gap-0 items-center fixed'>
      <img id="logo" src={GIF} alt="Logo" />
    </div>
  )
}
