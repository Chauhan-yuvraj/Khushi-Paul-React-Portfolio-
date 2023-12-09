import React from 'react'
import rabit from '../Materials/rabit.png'
const HeroSection = ()=>
<>
    <div className=" grid grid-cols-2  gap-x-1  text-white mx-60 my-40">
        <div className="grid grid-rows-3 gap-y-2 justify-items-start">
            <div className="font-Raleway text-5xl self-center ">Khushi Paul</div>
            <div className="font-IBM text-sm self-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem natus ipsum ea dolorem, modi sunt rerum doloribus adipisci deserunt consequuntur hic ex ducimus tempore perspiciatis molestiae quis ab beatae mollitia?</div>
            <div className="self-center">
                <input type="button" value="Let's get Started > " className='rounded text-lg py-4 px-7 bg-BtnColor text-[#FFFFFF]  font-IBM font-normal  ease-in-out duration-150 hover:bg-white hover:text-BtnColor active:underline' />
            </div>
        </div>
        <div className=" self-center justify-self-center">
            <div className="border-2 h-72 w-72 rounded-full border-gray-300">
                    <img src={rabit} alt="img" className=' rounded-full'/>
            </div>
        </div>
    </div>
</>
export default HeroSection 