import React from 'react'
import { BsTelephone,BsGlobe } from 'react-icons/bs';
import { MdLocationOn, MdEmail } from 'react-icons/md';

function Card({name,profession, tel,street,email,website}) {

    return (
        <div className="flex h-64 w-[450px] bg-[#f59e0b] text-white rounded-lg overflow-hidden "> 

        <div className="flex  w-full">

        <div className="flex flex-col justify-center items-center w-full ">
            <div className="flex h-[64px] bg-black w-full items-center justify-center"></div>
            <div className="flex h-[44%] bg-black w-full items-center justify-center my-4">

               <div className="flex flex-col items-center -ml-10">
                <p className="uppercase border-b-2">{name}</p>
                <p className="">{profession}</p>
               </div>
                

            </div>
            <div className="flex h-[64px] bg-black w-full items-center justify-center"></div>
        </div>

        <div className="flex w-[70%] rounded-l-full bg-[#f59e0b]  -ml-20 items-center justify justify-center">
            <div className="flex bg-red-900d w-full h-full justify-center items-center">
            <div className="space-y-2">
                <div>
                    <BsTelephone className="text-xl"/>
                </div>

                <div>
                    <MdLocationOn className="text-xl"/>
                </div>
                <div>
                    <MdEmail className="text-xl"/>
                </div>
              <div>
                  <BsGlobe className="text-xl"/>
              </div>

            </div>

            <div className="flex flex-col ml-2 pl-2 border-l-2">
                <p>{tel}</p>
                <p>{street}</p>
                <p>{email}</p>
                <p>{website}</p>
            </div>

            </div>
           
            
        </div>

        </div>


        </div>
      )

}

export default Card


