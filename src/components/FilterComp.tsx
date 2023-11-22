import { useTranslation } from 'react-i18next'
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

type Checked = DropdownMenuCheckboxItemProps["checked"]
export default function FilterComp() {
    const {t} = useTranslation();

    // Add state for each checkbox for easier filtering 
    const [showRes, setShowRes] = useState<Checked>(false)
    const [showCom, setShowCom] = useState<Checked>(false)
    const [showSingle, setShowSingle] = useState<Checked>(false)
    const [showDouble, setShowDouble] = useState<Checked>(false)
    const [showTriple, setShowTriple] = useState<Checked>(false)
    const [showQuad, setShowQuad] = useState<Checked>(false)
    const [showResVilla, setShowResVilla] = useState<Checked>(false)
    const [showComVilla, setShowComVilla] = useState<Checked>(false)
    const [showBuruj, setShowBuruj] = useState<Checked>(false)
    const [showLavida, setShowLavida] = useState<Checked>(false)
    const [showBayti, setShowBayti] = useState<Checked>(false)
    const [showFutureCity, setShowFutureCity] = useState<Checked>(false)
    const [showMadinaty, setShowMadinaty] = useState<Checked>(false)

  return (
    <div className="props-filter-container bg-white text-primary-color light w-11/12 h-24 rounded-[5px] relative mt-5 border shadow-xl">
    <div className="props-filter-one flex border-r border-primary-multiply-color border-solid m-4 text-left w-1/5 relative">
      <section className='mr-10 w-full'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='w-full regular text-md rounded'>Property Type</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>Apartments</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showRes}
          onCheckedChange={setShowRes}
        >
          Residential Apartments
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showCom}
          onCheckedChange={setShowCom}
        >
          Commercial Apartments
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Villas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showResVilla}
          onCheckedChange={setShowResVilla}
        >
          Double Floors
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showComVilla}
          onCheckedChange={setShowComVilla}
        >
          Triple Floors
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </section> 
    </div> 
    <div className="props-filter-two flex border-r border-gray-500 border-solid m-4 text-left w-1/5">
     <section className='mr-10 w-full'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='w-full regular text-md rounded'>Bedrooms</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>Number of Bedrooms</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showSingle}
          onCheckedChange={setShowSingle}
        >
          1 Bedroom
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showDouble}
          onCheckedChange={setShowDouble}
        >
          2 Bedrooms
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showTriple}
          onCheckedChange={setShowTriple}
        >
          3 Bedrooms
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showQuad}
          onCheckedChange={setShowQuad}
        >
          +4 Bedrooms
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
     </section> 
    </div> 
    <div className="props-filter-three flex border-r border-gray-500 border-solid m-4 text-left w-1/5">
      <section className='mr-10 w-full'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='w-full regular text-md rounded'>Type of Unit</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>Unit Type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showRes}
          onCheckedChange={setShowRes}
        >
          Residential Units
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showCom}
          onCheckedChange={setShowCom}
        >
          Commercial Units
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </section>
    </div>
    <div className="props-filter-four flex border-r border-gray-500 border-solid m-4 text-left w-1/5">
      <section className='mr-10 w-full'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='w-full regular text-md rounded'>Project</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>Residential Projects</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showBuruj}
          onCheckedChange={setShowBuruj}
        >
          Buruj
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showLavida}
          onCheckedChange={setShowLavida}
        >
          Lavida
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showBayti}
          onCheckedChange={setShowBayti}
        >
          Bayti
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showFutureCity}
          onCheckedChange={setShowFutureCity}
        >
          Future City
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showMadinaty}
          onCheckedChange={setShowMadinaty}
        >
          Madinaty
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </section>
    </div>
    <div className="props-filter-button m-4 text-center w-1/5">
      <Button className='bg-primary-color text-white hover:text-black rounded w-max'>{t("search_properties")}</Button>
    </div>
  </div>
  )
}
