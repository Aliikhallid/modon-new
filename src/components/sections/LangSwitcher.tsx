// import React from 'react'
import i18next from 'i18next';
import {useState} from 'react'
// import iraq from '../assets/Flag_of_Iraq.svg'


const LangSwitcher = () => {
  const [lang, setLang] = useState('en')
  const handleChange = (event) => {
    setLang(event.target.value)
  }
  window.addEventListener('change', ()=> {
    i18next.changeLanguage(lang)
  })
  const nav = document.querySelector('.navbar');
  const listitemsleft = document.querySelector('.list-items-left');
  const listitemsright = document.querySelector('.list-items-right');
  const modonPropsPage = document.querySelector('.modon-container');
  const sliderCont = document.querySelector('.slider-container');
  const topSlider = document.querySelector('.top-slider');
  const propsFilter = document.querySelector('.props-filter-container');
  if(lang === 'ar') {
    document.getElementsByTagName("html")[0].setAttribute("lang","ar");
    nav?.classList.add('flex-row-reverse');
    listitemsleft?.classList.add('flex-row-reverse');
    listitemsright?.classList.add('flex-row-reverse');
    modonPropsPage?.classList.add('flex-row-reverse');
    sliderCont?.classList.add('transition-all');
    sliderCont?.classList.add('flex-row-reverse');
    sliderCont?.classList.add('justify-end')
    topSlider?.classList.add('flex-row-reverse');
    propsFilter?.classList.add('flex-row-reverse');
  }
  else {
    document.getElementsByTagName("html")[0].setAttribute("lang","en");
    sliderCont?.classList.add('transition-all');
    nav?.classList.remove('flex-row-reverse');
    listitemsleft?.classList.remove('flex-row-reverse');
    listitemsright?.classList.remove('flex-row-reverse');
    modonPropsPage?.classList.remove('flex-row-reverse');
    topSlider?.classList.remove('flex-row-reverse');
    sliderCont?.classList.remove('flex-row-reverse');
    sliderCont?.classList.remove('justify-end')
    propsFilter?.classList.remove('flex-row-reverse');
  }
  return (
    <div>
          <select value={lang} onChange={handleChange} className='bg-transparent cursor-pointer'>
            <option className='bg-transparent text-black'>en</option>
            <option className='bg-transparent text-black'>ar</option>
          </select>
    </div>
  )
}

export default LangSwitcher