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
  return (
    <div>
          <select value={lang} onChange={handleChange} className='bg-transparent'>
            <option className='bg-transparent text-black'>en</option>
            <option className='bg-transparent text-black'>ar</option>
          </select>
    </div>
  )
}

export default LangSwitcher