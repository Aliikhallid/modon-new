// import React from 'react'
import { Button } from './ui/button'

const NewPage = () => {
  return (
    <div className='h-screen bg-white w-full text-black'>
      <div className="cards-container">
        <div className="cards-title">
          <h1>NEWS</h1>
          <div className="vertical-divider"></div>
        </div>
        <div className="cards-cards">
          <div className="card card1">
            <div className="card-img"></div>
            <h1 className="card-title">Commercial Projects</h1>
            <p className='card-parag'>Where quality meets consistency and passion meets perfection.</p>
            <Button className='bg-teal-700 m-2'>Read More</Button>
          </div>
          <div className="card card2">
            <div className="card-img"></div>
            <h1 className="card-title">Residential Projects</h1>
            <p className='card-parag'>Inspiring lifestyle, comfort and luxury living in every detail.</p>
            <Button className='bg-teal-700 m-2'>Read More</Button>
          </div>
          {/* <div className="card card3">
            <div className="card-img"></div>
            <h1 className="card-title">Current Offers</h1>
            <p className='card-parag'>Latest offers and promotions from modon projects.</p>
            <Button className='bg-teal-700 m-3'>Read More</Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default NewPage