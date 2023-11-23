
const ModonDesc = () => {
  return (
    <div className="h-fit bg-white w-full flex modon-desc">
      <section className="w-1/2 h-[110vh] flex flex-col justify-center items-center text-black desc1">
        <h1 className="bold text-primary-color text-4xl m-5 text-center">World-Class Service And Market-Leading Expertise</h1>
        <div className="sc-desc w-full flex justify-around items-center">
          <h1 className="bold text-primary-color text-2xl m-3">Mission</h1>
          <h1 className="bold text-primary-color text-2xl m-3">Vision</h1>
        </div>
        <div className="sc-desc w-full flex justify-around items-center">
          <h1 className="regular text-primary-color text-lg mx-10">To be the first real estate developer in Iraq that gives its customers complete satisfaction and added value to its real estate services, to be an Iraqi real estate icon that changes the urbanization map towards a new and integrated concept of a unique housing experience that links with its customers with close bonds based on loyalty and distinguished service in the after-sales stage.</h1>
          <h1 className="regular text-primary-color text-lg mx-10">Making a continuous and permanent change to the real estate map of Iraq, developing mini-cities with an integrated service nature, and achieving inclusion through a unique experience of owning a dream home.</h1>
        </div>
      </section>
      <section className="w-1/2 h-[110vh] flex justify-center items-center relative desc2">
        <div className="sld-image h-[90%] w-3/4 relative rounded-t-full"></div>
        <div className="border h-[90%] w-3/4 rounded-t-full absolute left-16 top-10 border-primary-color"></div>
      </section>
    </div>
  )
}

export default ModonDesc