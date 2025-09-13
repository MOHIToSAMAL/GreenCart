import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>
        
        <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block ' />
        {/*the above img is for big screens  ok and the banner img above will be hidden for small screens thats why we wrote hidden above in css */}
        {/*the below img is for mobile and small section where we will use diff. banner so the img changed and we reove hidden from css too and added md :hidden to die the below image for big screen or it would show 2 images both below and above one */}
        <img src={assets.main_banner_bg_sm} alt="banner" className='w-full md:hidden ' />
        
        {/*we created the div wrote the code for it and then created another div wrote those 2 link tag and then the h1 div we move it to the last second div to bring both the link inside the banner */}
     <div className=' absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24 ' >

            <h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 ' >
             Freshness You Can Trust, Davings You Will Love! </h1>

        <div className=' flex items-center mt-6 font-medium mb-18 ' >
            <Link to={'/products'} className=' group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded  text-white cursor-pointer ' >
            Shop Now
            {/*thw white arrow will show when screen is small  and hide the below black arrow 2nd link tag */}
            <img src={assets.white_arrow_icon} className=' md:hidden transition group-focus:translate-x-1 ' alt="arrow" /> 
            </Link>

            <Link to={'/products'} className=' group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer ' >
            Explor deals
            <img src={assets.black_arrow_icon} className=' transition group-focus:translate-x-1 ' alt="arrow" /> 
            </Link>
        </div>

      </div>
      <div className="w-full py-2.5 font-medium text-sm text-white bg-gradient-to-r from-primary via-indigo-500 to-blue-500 mt-10 ">
    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
        <p>🚚 Free Shipping on Orders Above $50</p>
        <span className="hidden sm:inline">|</span>
        <p>🎁 20% OFF on First Purchase</p>
        <span className="hidden sm:inline">|</span>
        <p>🔐 Use Code: <strong>WELCOME10</strong></p>
    </div>
</div>
    </div>
  )
}

export default MainBanner