<template>
  <div>
    <Navbar />

    <div class="xl:px-28 h-screen">
      <div class="flex flex-row mt-36">
        <div class="relative flex flex-col pr-5">
          <div class="w-72 h-auto border-2 border-stone-200 bg-transparent shadow-md rounded-xl">
            <div class="relative w-auto overflow-hidden mt-2">
              <input type="checkbox" class="peer absolute top-0 inset-x-0 w-full h-10 opacity-0 z-10 cursor-pointer"/>
              <div class="bg-white rounded-xl h-10 w-full pl-5 flex items-center">
                <h3 class="text-md font-semibold text-black">Kategori</h3>
              </div>

              <div class="absolute top-3 right-5 text-gray-800 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div class="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div class="py-1 px-10">
                  <ul>
                    <li class="pb-2">Residental</li>
                    <li class="pb-2">Komersial</li>
                    <li>Hospitaliti</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- TIPE -->
            <div class="relative w-auto overflow-hidden mt-2">
              <input type="checkbox" class="peer absolute top-0 inset-x-0 w-full h-10 opacity-0 z-10 cursor-pointer"/>
              <div class="bg-white rounded-xl h-10 w-full pl-5 flex items-center">
                <h3 class="text-md font-semibold text-black">Tipe</h3>
              </div>

              <div class="absolute top-3 right-5 text-gray-800 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div class="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div class="py-1 px-10">
                  <ul>
                    <li class="pb-2">36</li>
                    <li class="pb-2">45</li>
                    <li class="pb-2">60</li>
                    <li>120</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="relative w-auto overflow-hidden mt-2 mb-3">
              <input type="checkbox" class="peer absolute top-0 inset-x-0 w-full h-10 opacity-0 z-10 cursor-pointer"/>
              <div class="bg-white rounded-xl h-10 w-full pl-5 flex items-center">
                <h3 class="text-md font-semibold text-black">Model</h3>
              </div>

              <div class="absolute top-3 right-5 text-gray-800 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div class="bg-white rounded-xl overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                <div class="py-1 px-10">
                  <ul>
                    <li class="pb-2">Asian</li>
                    <li class="pb-2">Industrial</li>
                    <li class="pb-2">Modern</li>
                    <li class="pb-2">Tradisonal</li>
                    <li>Tropikal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-full mb-96">
          <div class="grid grid-cols-4 gap-4">
            <div>
              <CardProject />
            </div>
            <div>
              <CardProject />
            </div>
            <div>
              <CardProject />
            </div>
            <div>
              <CardProject />
            </div>
            <div>
              <CardProject />
            </div>
            <div>
              <CardProject />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>