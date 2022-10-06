import React from 'react'

const Contact = () => {
  
  
  return (
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12 bg-white border-2 border-pink-800 rounded">
              <p class="text-3xl font-bold leading-7 text-center text-black m-5">Kontakt</p>
            <form action="" method="post">
                <div class="md:flex items-center mt-12  ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-black ">Name</label>
                        <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink-800" />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none text-black">Last Name</label>
                        <input type="email" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink-800"/>
                    </div>
                </div>
                <div class="md:flex items-center mt-4  ">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-black ">Email</label>
                        <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink-800" />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none text-black">Phone</label>
                        <input type="email" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink-800"/>
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-black">Subject</label>
                        <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink-800"/>
                    </div>
                    
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none text-black">Message</label>
                        <textarea type="text" class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink-800" ></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-pink-800 rounded hover:bg-pink-800 focus:ring-2 focus:ring-offset-2 focus:ring-pink-800 focus:outline-none m-5">
                        Send message
                    </button>
                </div>
            </form>
        </div>

  )
}

export default Contact