import React from 'react'
import Education from './Education'
import Info from './Info'

export default function Section2() {
  return (
  <div>
      <div className=' sm:hidden mx-2 '>
      <div>
        <p className='text-xl text-white font-semibold '>ABOUT ME</p>
        <hr className='w-20 border-solid border-2 rounded-sm'/>
        <h1 className='text-md text-white font-semibold my-2'>Web Developer & UI/UX Designer</h1>
        <p className="text-gray-300 text-sm leading-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero molestiae dolore fuga quibusdam. Facere porro quae libero earum soluta cupiditate saepe, minus eius at. Quidem id officiis aliquid illo vitae.</p>
        <div className=''>
        <table>
        {Info.map(e=>{
          return(
        <tr className=''>
          <td className="text-gray-200 py-2 pr-8">{e.Infomation}</td>
          <td className='text-white font-semibold'>{e.Name}</td>
        </tr>
      )})}
        </table>
        </div>
      </div>
        <div className='py-5 '>
            <p className='text-white font-semibold text-lg'>Education & Certification</p>
              {Education.map(e=>{
                return (
              <ul className="list-disc list-outside ml-5 mt-3">
                <li className='text-white h-5 text-'>{e.title}</li>
                <p className='text-gray-300 text-sm'>{e.des}</p>
                <p className='text-gray-300 text-sm'>{e.year}</p>
              </ul>
                )
              })}
        </div>
        <div className='flex item-center justify-center' >
          <a href="#" className='flex gap-x-2 '>
            <button className=' text-sm font-semibold flex bg-white px-3 py-2 rounded-md'>
              <img src="/download (2).png" alt="" width={20} className="bg-white" />Download CV
            </button>
          </a>
        </div>
        
    </div>
    <div className=' hidden sm:flex max-w-7xl mx-auto my-36'>
      <div className="w-2/3">
      <p className='text-xl text-white font-semibold  '>ABOUT ME</p>
        <hr className='w-20 border-solid border-2 rounded-sm'/>
        <h1 className='text-md text-white font-semibold my-2'>Web Developer & UI/UX Designer</h1>
        <p className="text-gray-300 text-sm leading-5 my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Vero molestiae dolore fuga quibusdam. Facere porro quae<br/> libero earum soluta cupiditate saepe, minus eius at.<br/> Quidem id officiis aliquid illo vitae.</p>
        <hr className='w-3/4 border border-solid border-gray-500 rounded-sm'/>
        <div className='lg:flex gap-20'>
          <div>
            <table>
            <tr className=''>
              <td className="text-gray-200 py-2 pr-8">Name:</td>
              <td className='text-white font-semibold'>Benramoul Abderraouf</td>
            </tr>
            <tr className=''>
              <td className="text-gray-200 py-2 pr-8">Email:</td>
              <td className='text-white font-semibold'>Raoufbn996@gmail.com</td>
            </tr>
            </table>
          </div>
          <div>
          <table>
            <tr className=''>
              <td className="text-gray-200 py-2 pr-8">Age:</td>
              <td className='text-white font-semibold'>25 Years old</td>
            </tr>
            <tr className=''>
              <td className="text-gray-200 py-2 pr-8">Address:</td>
              <td className='text-white font-semibold'>Algeris, Algeria</td>
            </tr>
            </table>
          </div>
        </div>
        <a href="#" className='flex gap-x-2 my-3 '>
            <button className=' text-sm font-semibold flex bg-white px-3 py-2 rounded-md'>
              <img src="/download (2).png" alt="" width={20} className="bg-white" />Download CV
            </button>
          </a>
      </div>
      <div>
      <div className='py-5 border-l border-gray-400 rounded-sm pl-4'>
            <p className='text-white font-semibold text-lg'>Education & Certification</p>
              {Education.map(e=>{
                return (
              <ul className="list-disc list-outside ml-5 mt-3">
                <li className='text-white h-5 text-'>{e.title}</li>
                <p className='text-gray-300 text-sm'>{e.des}</p>
                <p className='text-gray-300 text-sm'>{e.year}</p>
              </ul>
                )
              })}
        </div>
      </div>
    </div>
  </div>
    
  )
}
