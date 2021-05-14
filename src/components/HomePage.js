import React from 'react';
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <div class="grid grid-cols-12">
        <div class="flex col-start-4 col-end-8 place-content-center px-10">
          <div class="flex flex-col justify-center flex-wrap font-sans leading-9">
            <div>
              <span class="text-xl text-white">Hi, my name is </span>
              <span class="text-3xl text-white"> Carolina Trofimov
              </span>
            </div>
            <div>
              <span class="text-xl text-white">and I am a</span>
              <span class="text-3xl text-white"> Software Engineer</span>
            </div>
            <div>
              <span class="text-xl text-white">I am interested in the intersection of technology and human interaction.</span>
            </div>  
          </div>
        </div>
        <div class="col-start-8 col-end-11">
          <img class="float-right h-80 w-50 flex px-10 py-6 object-contain md:object-scale-down" src="./profile.png"/>
        </div>
      </div>
    </>
  )
}


export default HomePage;