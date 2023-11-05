import { useTranslation } from 'react-i18next'
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

type Checked = DropdownMenuCheckboxItemProps["checked"]
export default function FilterComp() {
    const {t} = useTranslation();

    // Add state for each checkbox for easier filtering 
    const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
    const [showPanel, setShowPanel] = useState<Checked>(false)

  return (
    <div className="props-filter-container bg-white text-black light w-11/12">
    <div className="props-filter-one flex border-r border-gray-500 border-solid m-4 text-left w-1/5 relative">
      <section className='mr-10 w-full'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='w-full regular text-md'>Open Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </section>
    </div>
    <div className="props-filter-two flex border-r border-gray-500 border-solid m-4 text-left w-1/5">
     <section className='mr-10 w-full'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='w-full regular text-md'>Open Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
     </section> 
    </div>
    <div className="props-filter-three flex border-r border-gray-500 border-solid m-4 text-left w-1/5">
      <section className='mr-10 w-full'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='w-full regular text-md'>Open Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </section>
    </div>
    <div className="props-filter-four flex border-r border-gray-500 border-solid m-4 text-left w-1/5">
      <section className='mr-10 w-full'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='w-full regular text-md'>Open Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </section>
    </div>
    <div className="props-filter-button m-4 text-center w-1/5">
      <Button className='bg-modon-blue text-white hover:text-black rounded w-full'>{t("search_properties")}</Button>
    </div>
  </div>
  )
}
