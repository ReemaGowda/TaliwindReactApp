import React from "react";

const Sectionone = () => {
  return (
    <div>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[320px] relative">
          {/* Hero info */}
          <div className="flex flex-col justify-center py-14 md:py-0">
            <h1 className="text-5xl lg:text-4xl font-bold leading-relaxed xl:leading-normal">
              Ready to dive into HABOT?
            </h1>
            <p className="my-3 text-gray-600 xl:max-w-[500px]">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            {/* <button className='flex flex-col justify-center py-14 md:py-0 '>Sign up today! </button> */}
            <button class="bg-green-700 my-6 hover:bg-grey-700 text-white w-60 font-bold py-2 px-4 rounded">
              Sign up Today !
            </button>
          </div>
          {/* Hero button */}
          <div className=" container pt-9">
            <div className=" flex space-x-4">
              <button class="bg-white-500 flex-1 hover:bg-green-700 text-grey border-2 border-orange-300  py-4 mt-5 w-52 px-4 rounded">
              Abu Dhabi
              </button>
              <button class="bg-white-500 flex-1 hover:bg-green-700 text-grey border-2 border-orange-300 py-4 mt-5 w-52 px-4 rounded">
              Dubai
              </button>
            </div>
            <div className=" flex space-x-4">
              <button class="bg-white-500 flex-1 hover:bg-green-700 text-grey border-2 border-orange-300 py-4 mt-5 w-52 px-4 rounded">
              Sharjah & Ajman
              </button>
              <button class="bg-white-500 flex-1 hover:bg-green-700 text-grey border-2 border-orange-300 py-4 mt-5 w-52 px-4 rounded">
              Fujairah
              </button>
            </div>
            <div className=" flex space-x-4">
              <button class="bg-white-500 flex-1 hover:bg-green-700 text-grey border-2 border-orange-300 py-4 mt-5 w-52 px-4 rounded">
              Ras Al Khaimah
              </button>
              <button class="bg-white-500 flex-1 hover:bg-green-700 text-grey border-2 border-orange-300 py-4 mt-5 w-52 px-4 rounded">
              Umm Al Quwain
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectionone;
