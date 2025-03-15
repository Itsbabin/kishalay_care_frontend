import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
    <div className="home h-full w-screen">
      <div className="banner h-max w-full bg-white flex justify-center items-center m-0">
        <Image
          src='/home/banner4.jpg'
          height={580}
          width={1560}
          alt="banner"
        />
      </div>
      <div className="banner_line w-screen h-3 "></div>
      <div className="w-screen max-h-max flex justify-center gap-32 max-xl:flex-wrap items-center py-5 px-36 mb-36">
        <div className="relative h-96 w-[600px] mt-20">
          <Image
            src='/home/lady.jpg'
            fill={true}
            sizes="(w-full h-full)"
            alt="lady"
            className=' object-contain'
          ></Image>
        </div>
        <div className="h-[340px] w-[500px]">
          <div className="happiness_text">
            Your Happiness Your Choice
          </div>
          <div className="flex justify-baseline items-center bg-white w-max p-2 gap-3">
            <div className="text-4xl font-black" style={{ color: "#000000" }}>
              About
            </div>
            <div className="text-4xl font-extrabold " style={{ color: "#0600BC" }}>
              Kishalay
            </div>
            <div className="text-4xl font-black" style={{ color: "#009DFF" }}>
              Care
            </div>
          </div>
          <div className="h-3 w-[220px] mb-6" style={{ backgroundColor: "#00C3FF" }}></div>
          <div className="text-slate-900 text-lg font-medium  ">
            Located in the heart of Barasat Village, Nadia, our facility is easily accessible and operates five days a week, from 8:00 AM to 8:00 PM, ensuring onvenience for all our clients. Our dedicated team is committed to prioritizing customer  well-being and satisfaction. Whether you need assistance or have  inquiries, we are here to help.
          </div>
          <div className=" flex justify-baseline items-center flex-wrap w-full">
            <div className=" w-1/2 flex text-xl font-semibold items-center gap-2 p-1.5"><span className="dot"></span>  Nutracetical</div>
            <div className=" w-1/2 flex text-xl font-semibold items-center gap-2 p-1.5"><span className="dot"></span>Personal care</div>
            <div className=" w-1/2 flex text-xl font-semibold items-center gap-2 p-1.5"><span className="dot"></span>Hearbal</div>
            <div className=" w-1/2 flex text-xl font-semibold items-center gap-2 p-1.5"><span className="dot"></span>Home Care</div>
            <div className=" w-1/2 flex text-xl font-semibold items-center gap-2 p-1.5"><span className="dot"></span>Beauty Care</div>
            <div className=" w-1/2 flex text-xl font-semibold items-center gap-2 p-1.5"><span className="dot"></span>Auto Care</div>

          </div>
          <div className="w-full h-10 flex justify-center items-center">
            <Link href='/AboutUs' className="readmore">Read More</Link>
          </div>
        </div>
      </div>
      <div className="h-10 text-3xl font-extrabold text-gray-900 text-center mt-10 mb-8">
        Discover Our Products
      </div>
      <div className="flex justify-center items-center flex-wrap gap-6 py-10">
        <div className="flex flex-col justify-center items-center max-h-max">
          <div className="product_img relative h-44 w-44 max-xl:h-36 max-xl:w-36 rounded-full shadow-lg shadow-gray-400">
            <Image
              src={'/home/Nutrocitical.png'}
              fill={true}
              alt="Nutrocitical"
              className=' object-contain '
            />
          </div>
          <div className="h-8 pt-2 text-lg font-semibold">Nutrocitical</div>
        </div>
        <div className="flex flex-col justify-center items-center max-h-max">
          <div className="product_img relative h-44 w-44 max-xl:h-36 max-xl:w-36 rounded-full shadow-lg shadow-gray-400">
            <Image
              src={'/home/Herbals.png'}
              fill={true}
              alt="Nutrocitical"
              className=' object-contain '
            />
          </div>
          <div className="h-8 pt-2 text-lg font-semibold">Herbals</div>
        </div>
        <div className="flex flex-col justify-center items-center max-h-max">
          <div className="product_img relative h-44 w-44 max-xl:h-36 max-xl:w-36 rounded-full shadow-lg shadow-gray-400">
            <Image
              src={'/home/Beauty Care.png'}
              fill={true}
              alt="Nutrocitical"
              className=' object-contain '
            />
          </div>
          <div className="h-8 pt-2 text-lg font-semibold">Beauty Care</div>
        </div>
        <div className="flex flex-col justify-center items-center max-h-max">
          <div className="product_img relative h-44 w-44 max-xl:h-36 max-xl:w-36 rounded-full shadow-lg shadow-gray-400">
            <Image
              src={'/home/Personal Care.png'}
              fill={true}
              alt="Nutrocitical"
              className=' object-contain '
            />
          </div>
          <div className="h-8 pt-2 text-lg font-semibold">Personal Care</div>
        </div>
        <div className="flex flex-col justify-center items-center max-h-max">
          <div className="product_img relative h-44 w-44 max-xl:h-36 max-xl:w-36 rounded-full shadow-lg shadow-gray-400">
            <Image
              src={'/home/Home Care.png'}
              fill={true}
              alt="Nutrocitical"
              className=' object-contain '
            />
          </div>
          <div className="h-8 pt-2 text-lg font-semibold">Home Care</div>
        </div>
        <div className="flex flex-col justify-center items-center max-h-max">
          <div className="product_img relative h-44 w-44 max-xl:h-36 max-xl:w-36 rounded-full shadow-lg shadow-gray-400">
            <Image
              src={'/home/Auto Care.png'}
              fill={true}
              alt="Nutrocitical"
              className=' object-contain '
            />
          </div>
          <div className="h-8 pt-2 text-lg font-semibold">Auto Care</div>
        </div>
      </div>
      <div className="w-full h-96 flex justify-center items-center">
        <div className="w-full h-60 px-24 flex justify-center max-xl:flex-wrap max-xl:mt-8 max-xl:h-[400px] gap-16 items-center" style={{ backgroundColor: '#B3EBFF' }}>
          <div className="w-[600px] flex flex-col justify-center ml-16 mt-4 items-start">
            <div className="text-4xl font-semibold" style={{ color: '#00678C' }}>
              All About Our Product
            </div>
            <div className="h-1.5 w-36" style={{ backgroundColor: '#00DDFF' }}></div>
            <div className="text-[#004856]">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged.</div>
            <div className="w-full h-10 flex justify-center items-center">
              <Link href='/AboutUs' className="readmore2">Read More</Link>
            </div>
          </div>
          <div className="relative h-[400px] w-[400px] max-xl:mt-0 mt-32">
            <Image 
            src={'/home/countdownbanner.webp'}
            fill={true}
            alt="Nutrocitical"
            className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
