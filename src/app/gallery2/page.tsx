import React from 'react'
import Image from 'next/image';

export default function Images() {
  return (
    <header className="container mx-auto px-4 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-x-1">
        
        {/* Rotated Vertical Text */}
        <div className="hidden md:flex items-center">
          <div className="w-8 flex justify-center">
            <div className="text-sm lg:text-lg font-medium tracking-wider text-zinc-900">
              <div className="writing-mode-vertical w-[648] h-[52] transform -rotate-90 whitespace-nowrap">
                EXPLORE NEW AND POPULAR STYLES
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden text-3xl font-medium w-[648] h-[52] tracking-wider text-zinc-900 mb-4">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-4">
          {/* Left Large Image */}
          <div className="flex-grow md:w-[40%] lg:w-[40%]">
            <Image 
              src="/item1.png"
              alt="Chair"
              className="h-full w-full object-cover rounded-lg"
              width={648}
              height={648}
              priority
            />
          </div>

          {/* Right Side Grid of 4 Images */}
          <div className="grid grid-cols-2 gap-2  md:w-[50%] lg:w-[50%]">
            {/* First Image (Fixed) */}
            <div className="relative aspect-square">
              <Image 
                src="/itme2.png"
                alt="Chair"
                className="object-cover rounded-lg"
               
                width={312}
                height={312}
              />
            </div>

            <div className="relative aspect-square">
              <Image 
                src="/item3.png"
                alt="Chair"
                className="object-cover rounded-lg"
               
                width={312}
                height={312}
              />
            </div>
            <div className="relative aspect-square">
              <Image 
                src="/item4.png"
                alt="Chair"
                className="object-cover rounded-lg"
                
                width={312}
                height={312}
              />
            </div>
            <div className="relative aspect-square">
              <Image 
                src="/item5.png"
                alt="Chair"
                className="object-cover rounded-lg"
               
                width={312}
                height={312}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
