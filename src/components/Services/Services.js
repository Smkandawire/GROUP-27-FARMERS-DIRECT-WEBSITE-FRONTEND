import React from 'react';
import cowImage from './cow.jpg';
import eggImage from  './egg.jpg';
import chickenImage from './chickens.jpg';
import tractorImage from './tractor.jpg';
import milkImage from './milky.jpg';
import maizeImage from './maize.jpg';
import SaladImage from './Salad.jpg';
import ureaImage from './urea.jpg';
import pestcideImage from './pestcide.jpg';

function Services() {
  return (

    <div className='flex flex-row flex-wrap py-20 gap-20 bg-green-100 items-center justify-center'>

      {/*first card*/}
      <div className='w-72 min-h-[10rem] bg-white text-grey-700 shadow-lg rounded-md overflow-hidden'>
        <div className='w-full h-48'>
          <img className='w-full h-full object-cover' src={cowImage} alt='cow.' />
        </div>
        <div className='p-5 flex-col gap-3'>

          <div className='flex items-center gap-2'>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stock ready</span>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Farmers Direct</span>
          </div>
          {/*Proctuct name*/}
          <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
            Cattle
          </h2>

          {/*description*/}
          <p className='text-xs text-gray-500 mb-4'>Buy Healthy Cows, Different Breeds,Age & sex </p>

          <div>
            {/*price*/}
            <span className='text-l font-bold'>
              MWK 350,000.00 Each
            </span>
            <div className='flex items-center gap-2 mt-1'>
              <span className='text-sm line-through opacity-50'>
                
              </span>
              <span className='bg-crimson-400 px-1.5 py-0.5 rounded-md text-xs text-grey'>
                SAVE 15%
              </span>
            </div>
          </div>

          <div className='flex flex-row mt-5'>
            <span className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </span>

            <span className='text-xs mt-1 ml-2 text-gray-500'> 50k reviews</span>



          </div>

            {/*second*/ }
          <div className='mt-6 flex gap-2'>
            <button className='bg-crimson-500 px-6 py-2 rounded-md text-black font-medium tracking-wider transition'>
              Add to cart
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
              </svg>

            </button>
          </div>

        </div>
      </div>

      <div className='w-72 min-h-[10rem] bg-white text-grey-700 shadow-lg rounded-md overflow-hidden'>
        <div className='w-full h-48'>
          <img className='w-full h-full object-cover' src={eggImage} alt='egg.' />
        </div>
        <div className='p-5 flex-col gap-3'>

          <div className='flex items-center gap-2'>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stock ready</span>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Farmers Direct</span>
          </div>
          {/*Proctuct name*/}
          <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
            Eggs
          </h2>

          {/*description*/}
          <p className='text-xs text-gray-500 mb-4'>Buy Eggs,White or Brown,GradeAA & Grade B  </p>

          <div>
            {/*price*/}
            <span className='text-l font-bold'>
              MWK 6000 per tray
            </span>
            <div className='flex items-center gap-2 mt-1'>
              <span className='text-sm line-through opacity-50'>
                
              </span>
              <span className='bg-crimson-400 px-1.5 py-0.5 rounded-md text-xs text-grey'>
                BUY 2 GET 1 FREE
              </span>
            </div>
          </div>

          <div className='flex flex-row mt-5'>
            <span className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </span>

            <span className='text-xs mt-1 ml-2 text-gray-500'> 50k reviews</span>

        
          </div>

          

          <div className='mt-6 flex gap-2'>
            <button className='bg-crimson-500 px-6 py-2 rounded-md text-black font-medium tracking-wider transition'>
              Add to cart
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
              </svg>

            </button>
          </div>

        </div>
      </div>

       {/*third card*/}
      <div className='w-72 min-h-[10rem] bg-white text-grey-700 shadow-lg rounded-md overflow-hidden'>
        <div className='w-full h-48'>
          <img className='w-full h-full object-cover' src={chickenImage} alt='chickens.' />
        </div>
        <div className='p-5 flex-col gap-3'>

          <div className='flex items-center gap-2'>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stock ready</span>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Farmers Direct</span>
          </div>
          {/*Proctuct name*/}
          <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
            Chicken
          </h2>

          {/*description*/}
          <p className='text-xs text-gray-500 mb-4'>Buy Chicken, Broilers & Layers,  </p>

          <div>
            {/*price*/}
            <span className='text-l font-bold'>
              MWK 10000 each
            </span>
            <div className='flex items-center gap-2 mt-1'>
              <span className='text-sm line-through opacity-50'>
                
              </span>
              <span className='bg-crimson-400 px-1.5 py-0.5 rounded-md text-xs text-grey'>
                VARIOUS BREEDS,AGE & SEX
              </span>
            </div>
          </div>

          <div className='flex flex-row mt-5'>
            <span className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </span>

            <span className='text-xs mt-1 ml-2 text-gray-500'> 50k reviews</span>

        
          </div>

          <div className='mt-6 flex gap-2'>
            <button className='bg-crimson-500 px-6 py-2 rounded-md text-black font-medium tracking-wider transition'>
              Add to cart
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
              </svg>

            </button>
            
          </div>

        </div>
      </div>

       {/*third card*/}
       <div className='w-72 min-h-[10rem] bg-white text-grey-700 shadow-lg rounded-md overflow-hidden'>
        <div className='w-full h-48'>
          <img className='w-full h-full object-cover' src={milkImage} alt='milky.' />
        </div>
        <div className='p-5 flex-col gap-3'>

          <div className='flex items-center gap-2'>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stock ready</span>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Farmers Direct</span>
          </div>
          {/*Proctuct name*/}
          <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
            Milk & Daily Products
          </h2>

          {/*description*/}
          <p className='text-xs text-gray-500 mb-4'>Buy Fresh Milk , Best Prices </p>

          <div>
            {/*price*/}
            <span className='text-l font-bold'>
              MWK 12000.00 per Litre 
            </span>
            <div className='flex items-center gap-2 mt-1'>
              <span className='text-sm line-through opacity-50'>
              
              </span>
              <span className='bg-crimson-400 px-1.5 py-0.5 rounded-md text-xs text-grey'>
                FRESH MILK 
              </span>
            </div>
          </div>

          <div className='flex flex-row mt-5'>
            <span className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </span>

            <span className='text-xs mt-1 ml-2 text-gray-500'> 50k reviews</span>

        
          </div>

          <div className='mt-6 flex gap-2'>
            <button className='bg-crimson-500 px-6 py-2 rounded-md text-black font-medium tracking-wider transition'>
              Add to cart
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
              </svg>

            </button>
            
          </div>

        </div>
      </div>
      
      {/*third card*/}
      <div className='w-72 min-h-[10rem] bg-white text-grey-700 shadow-lg rounded-md overflow-hidden'>
        <div className='w-full h-48'>
          <img className='w-full h-full object-cover' src={maizeImage} alt='maize.' />
        </div>
        <div className='p-5 flex-col gap-3'>

          <div className='flex items-center gap-2'>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stock ready</span>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Farmers Direct</span>
          </div>
          {/*Proctuct name*/}
          <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
            Maize
          </h2>

          {/*description*/}
          <p className='text-xs text-gray-500 mb-4'>Buy Maize at Affordable Prices</p>

          <div>
            {/*price*/}
            <span className='text-l font-bold'>
              MWK 24,000.00 per 50Kgs 
            </span>
            <div className='flex items-center gap-2 mt-1'>
              <span className='text-sm line-through opacity-50'>
              
              </span>
              <span className='bg-crimson-400 px-1.5 py-0.5 rounded-md text-xs text-grey'>
                AVAILABLE : Kanyani, Njovu, Mkango
              </span>
            </div>
          </div>

          <div className='flex flex-row mt-5'>
            <span className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </span>

            <span className='text-xs mt-1 ml-2 text-gray-500'> 10k reviews</span>

        
          </div>

          <div className='mt-6 flex gap-2'>
            <button className='bg-crimson-500 px-6 py-2 rounded-md text-black font-medium tracking-wider transition'>
              Add to cart
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
              </svg>

            </button>
            
          </div>

        </div>
      </div>

      {/*SIXTH card*/}
      <div className='w-72 min-h-[10rem] bg-white text-grey-700 shadow-lg rounded-md overflow-hidden'>
        <div className='w-full h-48'>
          <img className='w-full h-full object-cover' src={tractorImage} alt='tractor.' />
        </div>
        <div className='p-5 flex-col gap-3'>

          <div className='flex items-center gap-2'>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stock ready</span>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Farmers Direct</span>
          </div>
          {/*Proctuct name*/}
          <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
            Machineries
          </h2>

          {/*description*/}
          <p className='text-xs text-gray-500 mb-4'>Purchase Tractors & other Machinery  </p>

          <div>
            {/*price*/}
            <span className='text-l font-bold'>
              MWK 12,000,000.00 
            </span>
            <div className='flex items-center gap-2 mt-1'>
              <span className='text-sm line-through opacity-50'>
              
              </span>
              <span className='bg-crimson-400 px-1.5 py-0.5 rounded-md text-xs text-grey'>
                AVAILABLE : Volvo, Tata, Toyota
              </span>
            </div>
          </div>

          <div className='flex flex-row mt-5'>
            <span className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </span>

            <span className='text-xs mt-1 ml-2 text-gray-500'> 50k reviews</span>

        
          </div>

          <div className='mt-6 flex gap-2'>
            <button className='bg-crimson-500 px-6 py-2 rounded-md text-black font-medium tracking-wider transition'>
              Add to cart
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
              </svg>

            </button>
            
          </div>

        </div>
      </div>

      {/*SIXTH card*/}
      <div className='w-72 min-h-[10rem] bg-white text-grey-700 shadow-lg rounded-md overflow-hidden'>
        <div className='w-full h-48'>
          <img className='w-full h-full object-cover' src={SaladImage} alt='Salad.' />
        </div>
        <div className='p-5 flex-col gap-3'>

          <div className='flex items-center gap-2'>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stock ready</span>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Farmers Direct</span>
          </div>
          {/*Proctuct name*/}
          <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
           Fruits & Vegetables
          </h2>

          {/*description*/}
          <p className='text-xs text-gray-500 mb-4'>Buy Fresh Fruits & Vegetables  </p>

          <div>
            {/*price*/}
            <span className='text-l font-bold'>
              MWK 1,200 per Kg 
            </span>
            <div className='flex items-center gap-2 mt-1'>
              <span className='text-sm line-through opacity-50'>
              
              </span>
              <span className='bg-crimson-400 px-1.5 py-0.5 rounded-md text-xs text-grey'>
                AVAILABLE : Spinach,Tomatoes,Pepper and Others
              </span>
            </div>
          </div>

          <div className='flex flex-row mt-5'>
            <span className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </span>

            <span className='text-xs mt-1 ml-2 text-gray-500'> 80k reviews</span>

        
          </div>

          <div className='mt-6 flex gap-2'>
            <button className='bg-crimson-500 px-6 py-2 rounded-md text-black font-medium tracking-wider transition'>
              Add to cart
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
              </svg>

            </button>
            
          </div>

        </div>
      </div>

      {/*SIXTH card*/}
      <div className='w-72 min-h-[10rem] bg-white text-grey-700 shadow-lg rounded-md overflow-hidden'>
        <div className='w-full h-48'>
          <img className='w-full h-full object-cover' src={ureaImage} alt='urea.' />
        </div>
        <div className='p-5 flex-col gap-3'>

          <div className='flex items-center gap-2'>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stock ready</span>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Farmers Direct</span>
          </div>
          {/*Proctuct name*/}
          <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
           Fertilizer
          </h2>

          {/*description*/}
          <p className='text-xs text-gray-500 mb-4'>Buy 3 bags Get 1 free </p>

          <div>
            {/*price*/}
            <span className='text-l font-bold'>
              MWK 87,000 per bag
            </span>
            <div className='flex items-center gap-2 mt-1'>
              <span className='text-sm line-through opacity-50'>
              
              </span>
              <span className='bg-crimson-400 px-1.5 py-0.5 rounded-md text-xs text-grey'>
                AVAILABLE : Urea, Ammonium slfate, NPK
              </span>
            </div>
          </div>

          <div className='flex flex-row mt-5'>
            <span className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </span>

            <span className='text-xs mt-1 ml-2 text-gray-500'> 5k reviews</span>

        
          </div>

          <div className='mt-6 flex gap-2'>
            <button className='bg-crimson-500 px-6 py-2 rounded-md text-black font-medium tracking-wider transition'>
              Add to cart
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
              </svg>

            </button>
            
          </div>

        </div>
      </div>

      {/*SIXTH card*/}
      <div className='w-72 min-h-[10rem] bg-white text-grey-700 shadow-lg rounded-md overflow-hidden'>
        <div className='w-full h-48'>
          <img className='w-full h-full object-cover' src={pestcideImage} alt='pestcide.' />
        </div>
        <div className='p-5 flex-col gap-3'>

          <div className='flex items-center gap-2'>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stock ready</span>
            <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Farmers Direct</span>
          </div>
          {/*Proctuct name*/}
          <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
           Pestcides & Herbicides
          </h2>

          {/*description*/}
          <p className='text-xs text-gray-500 mb-4'>Purchase Effective Pestcides & Herbicides  </p>

          <div>
            {/*price*/}
            <span className='text-l font-bold'>
              MWK 2500 per pack
            </span>
            <div className='flex items-center gap-2 mt-1'>
              <span className='text-sm line-through opacity-50'>
              
              </span>
              <span className='bg-crimson-400 px-1.5 py-0.5 rounded-md text-xs text-grey'>
                AVAILABLE : Insectcides, Fungicides, fumigants & Rodentcides
              </span>
            </div>
          </div>

          <div className='flex flex-row mt-5'>
            <span className='flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </span>

            <span className='text-xs mt-1 ml-2 text-gray-500'> 1k reviews</span>

        
          </div>

          <div className='mt-6 flex gap-2'>
            <button className='bg-crimson-500 px-6 py-2 rounded-md text-black font-medium tracking-wider transition'>
              Add to cart
            </button>
            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>

            <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="opacity-50 w-6 h-6">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
              </svg>

            </button>
            
          </div>

        </div>
      </div>




      
      


      

    </div>

    

    

    

    
  );
};

export default Services;
