import React from 'react'
import { Link } from 'react-router-dom'
import { VscSettings } from 'react-icons/vsc'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay } from 'swiper/modules';
import Item from './Item';
import { PuffLoader } from 'react-spinners';
import useProperties from '../hooks/useProperties';
const Properties = () => {

  const {data, isError, isLoading} = useProperties()

  if(isError) {
    return (
      <div>
        <span>Error while fetching data</span>
      </div>
    )
  }
  if(isLoading) {
    return (
      <div className="h-64 flexCenter">
        <PuffLoader height="80" width="80" radius={1} color="#555" aria-label="puff-loading"/>
      </div>
    )
  }

  return (
    <section className='max-padd-container' >
      <div className='!py-16 xl:py-28 rounded-3xl' >
        <span className='text-[18px] font-medium'>Your Future Home 🏡 Awaits!</span>
        <h2 className='h2'>Find Your Dream Here!</h2>
        <div className='flexBetween !mt-8 !mb-6'>
          <h5 className='font-semibold'><span className='font-bold'>Showing 1-9</span> out of 3k properties</h5>
          <Link to={'/'} className='bg-lime-500 text-white text-2xl rounded-md !p-2 flexCenter'>
            <VscSettings />
          </Link>
        </div>
        {/* CONTAINER */}
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1124: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
            }
          }}
          modules={[Autoplay]}
          className="h-[488px] md:h-[533px] xl:h-[422px] mt-5">
            {data.slice(0,9).map((property) =>(
              <SwiperSlide key={property.title}>
                <Item property={property}/>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

    </section>
  )
}

export default Properties
