// import React from 'react'
import i18next from 'i18next';
import {SetStateAction, useState} from 'react'
// import iraq from '../assets/Flag_of_Iraq.svg'


const LangSwitcher = () => {
  const [lang, setLang] = useState('en')
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
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
  const newPage = document.querySelector('.new');
  const newPage2 = document.querySelector('.new-2');
  const newPage3 = document.querySelector('.new-3');
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
    newPage?.classList.add('rtl-dir');
    newPage2?.classList.add('rtl-dir');
    newPage3?.classList.add('rtl-dir');
  }
  else {
    document.getElementsByTagName("html")[0].setAttribute("lang","en");
    newPage?.classList.remove('rtl-dir');
    newPage2?.classList.remove('rtl-dir');
    newPage3?.classList.remove('rtl-dir');
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