import CountUp from "react-countup"

const FixedImage = () => {
  return (
         <div className="fixed-image w-full h-fit py-20 flex md:flex-row flex-col gap-2 justify-around items-center text-white">
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={5} delay={2} duration={3}/></span> <br/> TOTAL PROJECTS</h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={2300} delay={2} duration={3}/></span> <br/> HOUSES BUILT</h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={235} delay={2} duration={3}/></span> <br/> QUALIFIED WORKERS</h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={2} delay={2} duration={3}/></span> <br/> AWARDS</h1>
          </div> 
  )
}

export default FixedImage