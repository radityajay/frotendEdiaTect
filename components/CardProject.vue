<template>
  <nuxt-link to="/produk/details/detail">
    <div
        class="relative flex flex-col items-center justify-center hover:scale-105 transition duration-500 cursor-pointer h-auto"
      >
        <div class="container">
          <div class="max-w-md w-full bg-stone-50 border border-stone-200 shadow-lg rounded-xl p-6">
            <div class="flex flex-col">
              <div class>
                <div class="relative h-62 w-full mb-3">
                  <img
                    src="/images/desain3d.jpg"
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
                      <!-- <div
                      class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg"
                      >INSTOCK</div>-->
                    </div>
                  </div>
                  <div class="text-xl text-secondary-100 font-semibold mt-1">Rp 2.000.000</div>
                  <!-- <div class="lg:flex py-4 text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center mb-3">
                    <div class="w-full flex-none text-sm flex items-center text-gray-600">
                      <ul class="flex flex-row justify-center items-center space-x-2">
                        <li class>
                          <span
                            class="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300"
                          >
                            <a href="#blue" class="block w-3 h-3 bg-blue-600 rounded-full"></a>
                          </span>
                        </li>
                        <li class>
                          <span
                            class="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300"
                          >
                            <a href="#yellow" class="block w-3 h-3 bg-yellow-400 rounded-full"></a>
                          </span>
                        </li>
                        <li class>
                          <span
                            class="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300"
                          >
                            <a href="#red" class="block w-3 h-3 bg-red-500 rounded-full"></a>
                          </span>
                        </li>
                        <li class>
                          <span
                            class="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300"
                          >
                            <a href="#green" class="block w-3 h-3 bg-green-500 rounded-full"></a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="flex-1 inline-flex items-center mb-3">
                    <span class="text-secondary whitespace-nowrap mr-3">Size</span>
                    <div class="cursor-pointer text-gray-400">
                      <span class="hover:text-purple-500 p-1 py-0">S</span>
                      <span class="hover:text-purple-500 p-1 py-0">M</span>
                      <span class="hover:text-purple-500 p-1 py-0">L</span>
                      <span class="hover:text-purple-500 p-1 py-0">XL</span>
                    </div>
                  </div>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </nuxt-link>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleDirect() {
      $nuxt.route.push({
        path: '/'
      })
    }
  }
}
</script>