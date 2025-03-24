import React from 'react'
import Image from "next/image";
function Sponsor() {
  return (

    <div className="px-6 bg-white/95 ">

    <div className='max-w-[1440px] w-full mx-auto'>

        <div className='flex flex-row justify-center items-center gap-4'>

            <div>
                <Image
                src="/moderna.png"
                alt="moderna"
                width={288.67}
                height={66.39}
                objectFit='contain'
                className='grayscale invert'
                
                />
            </div>

            <div>
                <Image
                src="/pfizer.png"
                alt="moderna"
                width={288.67}
                height={117.98}
                objectFit='contain'
                className='grayscale '
                
                />
            </div>

            <div>
                <Image
                src="/Astra.png"
                alt="moderna"
                width={288.67}
                height={82}
                objectFit='cover'
                className='grayscale'
                
                />
            </div>

            <div>
                <Image
                src="/sinovac.png"
                alt="moderna"
                width={288.67}
                height={57.9}
                objectFit='cover'
                className='grayscale'
                
                
                />
            </div>

        </div>


    </div>
    </div>
  )
}

export default Sponsor