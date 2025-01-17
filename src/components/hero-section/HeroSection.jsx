import React from 'react'
import SocialLinks from './SocialLinks'

const HeroSection = () => {
  return (
    <section
      className='sm:w-[60%] w-[90%] bg-black text-white flex flex-col justify-center sm:flex-row sm:gap-5 gap-3 sm:p-6 p-4 rounded-lg sm:text-lg text-sm font-sans shadow-lg'
    >
      <div className='sm:block flex justify-between items-center '>
        <img src="./assets/pfp.jpg" alt="pfp" className='sm:w-24 w-16 rounded-lg' />

        <SocialLinks className={"sm:hidden flex gap-3"} />
      </div>

      <div>
        <div className='space-y-1'>
          <h2 className='text-[1rem] font-semibold'>Ujjwal Kumar</h2>
          <p className='text-gray-300'>Researcher</p>
        </div>

        <div className='mt-4 space-y-1'>
          <div className='flex items-center text-gray-300 gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-3 h-3"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3" ></circle></svg>
            <p>Dehri, India</p>
          </div>

          <div className='flex items-center text-gray-300 gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-3 h-3"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            <p>Kumarujjwaldos@gmail.com</p>
          </div>

          <div className='flex items-center text-gray-300 gap-2'>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
            <p>ujjwalkumar</p>
          </div>
        </div>

        <p className='text-gray-300 mt-4'>
          Contributing valuable insights, working with advanced tools and methodologies.
        </p>
      </div>

      <SocialLinks className={"hidden sm:flex gap-3"} />
    </section>
  )
}

export default HeroSection