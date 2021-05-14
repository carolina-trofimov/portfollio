import React, { useEffect, useState } from 'react';



const Navbar = () => {

  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    setisOpen(!isOpen);
  }

    return (
      <nav class="flex flex-wrap items-center justify-center p-5"> 
        <div class="flex md:hidden">
          <button id="hamburger" onClick={handleClick}>
            <img class="toggle block" src="./hamburger-menu-icon-png-white-10.jpeg" width="40" height="40" />
            <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
          </button>
        </div>
        <div class="toggle hidden md:flex flex-wrap content-center w-full md:w-auto content-center text-bold mt-5 md:mt-0 border-t-2 border-white md:border-none">        
          <a href="#" class="block md:inline-block text-white text-lg hover:text-white px-12 py-6 border-b-2 border-white md:border-none">Home</a>
          <a href="#" class="block md:inline-block text-white text-lg hover:text-white px-12 py-6 border-b-2 border-white md:border-none">About Me</a>
          <a href="#" class="block md:inline-block text-white text-lg hover:text-white px-12 py-6 border-b-2 border-white md:border-none">Skills</a>
          <a href="#" class="block md:inline-block text-white text-lg hover:text-white px-12 py-6 border-b-2 border-white md:border-none">Projects</a>
          <a href="#" class="block md:inline-block text-white text-lg hover:text-white px-12 py-6 border-b-2 border-white md:border-none">Contact Me</a>
        </div>
      </nav>
    );
   }
   export default Navbar;