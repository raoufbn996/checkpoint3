import React from 'react'
import menu from './Menu'
import Iconsm from './Iconsm'

export default function Header() {
  return (
    <div>
        <div className='sm:hidden flex justify-between mx-auto pt-4 px-2'>
            <div className='flex items-center'>
                <img src="/logo-rafus.png" alt="" className='h-10'/>
            </div>
            <div>
                <img src="/burger-bar.png" alt="" className='h-10' />
            </div>
        </div>

        <div className='max-w-7xl mx-auto px-5'>
          <div className='hidden sm:flex items-center justify-between'>
            <div>
              <img src="/logo-rafus.png" alt="" className='h-20'/>
            </div>
            <div className='flex items-center'>
              <nav>
                {menu.map(e=>{
                  return(
                    <a href={e.url} className='text-white text-lg font-semibold px-3'>{e.name}</a>
                  )
                })}
              </nav>
            <div className='flex pl-8'>
                {Iconsm.map(e=>{
                  return(
                    <img src={e.url} alt="" className='h-6 px-3'/>
                  )
                })}
            </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}
