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
                    <li>90</li>
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
            <nuxt-link to="/produk/details/2">
              <div
              class="relative flex flex-col items-center justify-center hover:scale-105 transition duration-500 cursor-pointer h-auto"
            >
              <div class="container">
                <div class="max-w-md w-full bg-stone-50 border border-stone-200 shadow-lg rounded-xl p-6">
                  <div class="flex flex-col">
                    <div class>
                      <div class="relative h-62 w-full mb-3">
                        <img
                          src="/images/img1-mark-01.png"
                          alt="Just a flower"
                          class="w-full object-fill rounded-2xl"
                        />
                      </div>
                      <div class="flex-auto justify-evenly">
                        <div class="flex flex-wrap w-full">
                          <div class="w-full flex-none text-sm flex items-center text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4 text-secondary-100 mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                            <span class="text-gray-400 whitespace-nowrap mr-3">4.60</span>
                            <span class="mr-2 text-gray-400">Bali</span>
                          </div>
                          <div class="flex items-center w-full justify-between min-w-0">
                            <h2
                              class="text-lg mr-auto cursor-pointer text-black truncate"
                            >Rumah Minimalis dengan type 80</h2>
                          </div>
                        </div>
                        <div class="text-xl text-secondary-100 font-semibold mt-1">Rp 2.000.000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>