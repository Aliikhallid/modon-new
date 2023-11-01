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
  if(lang === 'ar') {
    document.getElementsByTagName("html")[0].setAttribute("lang","ar");
    nav?.classList.add('flex-row-reverse');
    listitemsleft?.classList.add('flex-row-reverse');
    listitemsright?.classList.add('flex-row-reverse');
  }
  else {
    document.getElementsByTagName("html")[0].setAttribute("lang","en");
    nav?.classList.remove('flex-row-reverse');
    listitemsleft?.classList.remove('flex-row-reverse');
    listitemsright?.classList.remove('flex-row-reverse');
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