import React, { useEffect } from 'react'
import CountUp from 'react-countup';
import { LiaCertificateSolid } from "react-icons/lia"
const Achievements = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const statistics = [
    {label: 'Happy Families', value: 12},
    {label: 'Different Cities', value: 3},
    {label: 'Projects Compeleted', value: 45},
  ]
  useEffect(() =>{
    const handleScroll = () =>{
      const aboutSection = document.getElementById("about");
      if(aboutSection) {
        const top=aboutSection.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight -100;
        setIsVisible(isVisible);
      }
    }
    window.addEventListener("scroll",handleScroll)
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
  return (
    
    <section id='about' className='mx-auto max-w-[1440px]' >
      <br />
      {/* CONTAINER */}
      <div className='flex flex-col xl:flex-row w-full min-h-[400px]'>
        {/* LEFT SIDE */}
        <div className='max-padd-container flex-[6] flex justify-center flex-col bg-[#008274] text-white px-6 lg:px-12 min-h-[400px]' >
          <div>
            <h2 className='h2 my-6'>Our Achievements</h2>
            <p className='!py-5 text-white max-w-[47rem] font-bold leading-relaxed'>Our achievements are not just numbers but the countless smiles of families settling into their perfect homes. A legacy of trust, built brick by brick. 🏡✨</p>
          
            {/* STATISTICS CONTAINER */}
            <div className='flex flex-wrap gap-6'>
              {statistics.map((statistic, index) => (
                <div key={index} className='p-4 rounded-lg'>
                  <div className='flex items-center gap-1'>
                    <CountUp start={isVisible ? 0 : null} end={statistic.value} duration={10} delay={1}>
                      {({countUpRef}) => (
                        <h3 ref={countUpRef} className='text-5xl font-sans'></h3>
                      )}
                    </CountUp>
                    <h4 className='regular-32 font-semibold'>K+</h4>
                  </div>
                  <br />
                  <p className='text-white capitalize pt-2 font-bold'>{statistic.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className='flex-[2] relative bg-amber-100 px-6 lg:px-12 flexCenter min-h-[400px]'>
          <div className='p-4 rounded-lg flexCenter flex-col xl:-rotate-90 '>
            <span className='relative p-3 flex items-center rounded-full '>
              <LiaCertificateSolid className='text-5xl text-black'/>
            </span>
            <span className='relative font-bold'>Turning dreams into addresses, one achievement at a time.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
