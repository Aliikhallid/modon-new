import modonLogo from '../assets/modonlogo-removebg-preview.png'
const NotFound = () => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center bg-white text-black">
      <img src={modonLogo} height={150} width={150} alt="" />
      <h1 className="regular text-6xl text-primary-color m-3">404 Error</h1>
      <p className="light">The page you're looking for was not found</p>
    </div>
  )
}

export default NotFound