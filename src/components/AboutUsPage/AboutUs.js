import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-200">
      {/*About Us content*/}
      <div className="relative overflow-hidden group h-[240px] bg-primary card-hidden">
        <img src="https://media.istockphoto.com/id/1308053024/photo/portrait-of-a-smiling-woman-selling-onions-on-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=8jvxLpBaUU05b2-TPfJRg5w5yoZrcuBmGSqGmQ0H0X8="
          className="h-full transition-all delay-300 duration-400 ease-in w-full absolute group-hover:scale-105 object-cover object-center" alt="text-center Loading" />
        <h2 className="relative z-30 text-center mt-20 text-green-500 justify-center text-sm sm:text-5xl md:text-6xl font-medium mb-4">
          About Us
        </h2>
      </div>
      {/*</header>*/}

      {/*WHO ARE WE? content*/}
      <header className="justify-center bg-gray-100 text-green-500 mr-1 ml-1 mt-1 py-10 px-2 sm:px-6 lg:px-8">
        <div className="mt-1 max-w-7xl mx-auto">
          <h2 className="flex justify-center text-xl sm:text-5xl md:text-6xl font-light mb-4">WHO ARE WE?</h2>
          <p className="text-justify text-black text-2xl font-light" >Malawi’s premier online platform connecting farmers, agricultural dealers, and consumers across the country.
            In a nation where agriculture forms the backbone of our economy, we understand the challenges faced by farmers
            in accessing wider markets, the inefficiencies in traditional trading methods, and the fragmented distribution
            channels that limit profitability.</p>
        </div>
      </header>

      {/*OUR MISSION & PHOTO FRAME content*/}
      <div className="text-center bg-gray-200 p-6">
        <div className="flex flex-wrap items-center mt-20 text-left">
          <div className="w-full h-full md:w-3/5 lg:w-1/2 px-6">
            <img src="https://media.istockphoto.com/id/2148245203/photo/african-women-plucking-tea-leaves-on-plantation-east-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=FtcBB-cHTugbXK5r4IWSjT25eRI6WlGEy_ofeLwFqZo=" alt="agriphoto" className="inline-block rounded shadow-lg border border-merino-400" />
          </div>

          <div className="w-full h-full md:w-2/5 lg:w-1/2 px-6 text-center md:text-left lg:pl-12">

            <h3 className="font-semibold text-green-500 mt-8 text-xl md:mt-0 sm:text-2xl">Our Aim:</h3>
            <p className="text-justify text-black font-light text-2xl sm:text-lg mt-6">
              We are here to connect farmers , agrodealers and consumers.
              Farmers should be able to sell their farm produce like Nyemba, Mtedza, Maize, Makaka and many more.
              Agrodealers should be able to market crop pesticides, animal pesticides, farm machineries.
              And consumers shoulb be able to buy what they need.
            </p>

            <h3 className="font-semibold text-green-500 mt-8 text-xl md:mt-0 sm:text-2xl">Our Mission</h3>
            <p className="text-justify text-black font-light sm:text-lg mt-6">
              We are here to connect farmers , agrodealers and consumers.
              Farmers should be able to sell their farm produce like Nyemba, Mtedza, Maize, Makaka and many more.
              Agrodealers should be able to market crop pesticides, animal pesticides, farm machineries.
              And consumers shoulb be able to buy what they need.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-20  text-black font-light text-left">
        <div className="w-full h-full md:w-3/5 lg:w-1/2 px-6">
          <img src="https://media.istockphoto.com/id/1308053024/photo/portrait-of-a-smiling-woman-selling-onions-on-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=8jvxLpBaUU05b2-TPfJRg5w5yoZrcuBmGSqGmQ0H0X8=" alt="agriphoto" className="inline-block rounded shadow-lg border border-merino-400" />
        </div>

        <div className="w-full md:w-2/5 lg:w-1/2 px-6 md:order-first text-center md:text-left lg:pr-12">

          <h3 className="font-semibold text-green-500 mt-8 text-xl md:mt-0 sm:text-2xl">Our goal</h3>
          <p className="text-justify text-2xl sm:text-lg mt-6">
            We are here to connect farmers , agrodealers and consumers.
            Farmers should be able to sell their farm produce like Nyemba, Mtedza, Maize, Makaka and many more.
            Agrodealers should be able to market crop pesticides, animal pesticides, farm machineries.
            And consumers shoulb be able to buy what they need.
          </p>

          <h3 className="font-semibold text-green-500 mt-8 text-xl md:mt-0 sm:text-2xl">Our values</h3>
          <p className="text-justify text-2xl sm:text-lg mt-6">
            We are here to connect farmers , agrodealers and consumers.
            Farmers should be able to sell their farm produce like Nyemba, Mtedza, Maize, Makaka and many more.
            Agrodealers should be able to market crop pesticides, animal pesticides, farm machineries.
            And consumers shoulb be able to buy what they need.
          </p>
        </div>
      </div>

      {/*last part starts here*/}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-medium text-green-500">Our Values</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-400 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>

              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-black">Secure Payments Methods</h3>
                <p className="mt-2 text-base">We aim to make the world a better place through innovation
                  and collaboration.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-400 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>

              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-black">Honesty and Integrity</h3>
                <p className="mt-2 text-base">We believe in honesty, integrity, and respect for all
                  individuals.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-400 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-black">Logistics Support</h3>
                <p className="mt-2 text-base">We envision a world where technology is used to solve the
                  most pressing issues facing humanity and improve people's lives.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </section>

  );
};

export default AboutUs;