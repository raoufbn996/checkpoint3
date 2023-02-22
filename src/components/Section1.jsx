import React from 'react'

export default function Section1() {
  return (
    <div>
        <div className='text-white text-center flex flex-col items-center py-40 sm:hidden mx-2'>
            <h2 className='text-white text-center text-4xl font-semibold'>Hi! I'm</h2>
            <h1 className='text-white text-center text-3xl font-semibold'>Benramoul Abderraouf</h1>
            <h3 className='py-2 text-2xl font-semibold pt-5'>Web developper & UI/UX Designer </h3>
            <hr className='w-52 my-5 border-2 rounded-sm'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus molestias ipsam sequi modi eius repellat, obcaecati molestiae. Nulla unde necessitatibus, quia perspiciatis ipsam exercitationem provident veniam deserunt voluptas error alias ducimus corporis ex, fugiat, culpa iure aliquid. Commodi, soluta nisi!</p>
            <div className='pt-12'>
                <a href="" className='bg-white text-black px-8 py-3 rounded-md font-semibold mx-3 border'><button>Contact Me</button></a>
                <a href="" className='border-2 px-8 py-3 rounded-md font-semibold mx-3'><button>Hire Me</button></a>
            </div>
        </div>

        <div className=' hidden sm:flex max-w-7xl mx-auto items-center justify-between mt-5 sm:px-5'>
          <div className=''>
            <h1 className='text-white text-5xl font-semibold my-2 sm:text-4xl'>Hi! I'm Abderraouf</h1>
            <h3 className='text-white my-2 text-2xl font-semibold mb-5 sm:text-xl'>Web Developer & UI/UX Designer</h3>
            <hr className='w-40'/>
            <p className='text-white my-2 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Culpa deleniti voluptates, vel aut repellat corporis expedita voluptate<br/>, eveniet dignissimos exercitationem ratione eius ex esse adipisci, <br/>consectetur similique eos quis necessitatibus.</p>
            <div className='pt-12'>
                <a href="" className='bg-white text-black px-8 py-3 rounded-md font-semibold mx-3 border'><button>Contact Me</button></a>
                <a href="" className='border-2 px-8 py-3 rounded-md font-semibold mx-3 text-white'><button>Hire Me</button></a>
            </div>
          </div>
          <div>
            <img src="/version2 (1).webp" alt="" width={350} className="mr-20" />
          </div>
        </div>
    </div>
  )
}
