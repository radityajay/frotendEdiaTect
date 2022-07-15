<template>
  <div>
    <!-- jumbotron -->
    <div class="py-64 bg-hero">
      <div class="flex justify-start ml-32">
        <div>
          <h2 class="text-4xl font-extrabold mb-2 text-primary-100">
            TEMUKAN
            <span class="text-secondary-100">IDE DESAIN</span>
          </h2>
          <h2 class="text-4xl font-extrabold mb-8 text-primary-100">BANGUNAN IMPIANMU!</h2>
          <button
            class="bg-primary-100 text-white hover:text-secondary-100 hover:bg-transparent hover:border-2 hover:border-secondary-100 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
            @click="toggleModal = !toggleModal"
          >mulai sekarang</button>
        </div>
      </div>
    </div>

    <div>
      <div
        v-if="toggleModal"
        class="fixed overflow-x-hidden overflow-y-hidden inset-0 flex justify-center items-center z-30"
      >
        <div class="relative mx-auto w-full max-w-xs">
          <div class="bg-white w-full rounded-xl shadow-2xl py-4 flex flex-col">
            <!-- Header Modal -->
            <div class="flex flex-row px-4 py-3 border-b border-gray-200">
              <div class="text-2xl font-semibold flex w-full">Filter</div>
              <div class="float-right w-auto self-center">
                <i class="ri-close-fill ri-xl cursor-pointer" @click="toggleModal = false"></i>
              </div>
            </div>
            <!-- Body Modal -->
            <div class="w-full p-4">
              <div class="flex justify-center items-center">
                <form action>
                  <div class="my-3">
                    <select
                      type="text"
                      name="text"
                      placeholder="Luas Tanah"
                      class="h-10 w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-secondary-100"
                    >
                      <option selected class="text-gray-300">Luas Tanah</option>
                      <option value>150 m<sup>2</sup></option>
                    </select>
                  </div>
                  <div class="my-3">
                    <select
                      type="text"
                      name="text"
                      placeholder="Luas Tanah"
                      class="h-10 w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-secondary-100"
                    >
                      <option selected class="text-gray-300">Model Bangunan</option>
                      <option value>Minimalis</option>
                    </select>
                  </div>
                  <div class="my-3">
                    <select
                      type="text"
                      name="text"
                      placeholder="Luas Tanah"
                      class="h-10 w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-secondary-100"
                    >
                      <option selected class="text-gray-300">Tipe Bangunan</option>
                      <option value>120</option>
                    </select>
                  </div>
                  <div class="my-4 relative">
                    <input
                      id="biaya"
                      name="biaya"
                      type="text"
                      class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-secondary-100"
                      placeholder="john@doe.com"
                    />
                    <label
                      for="luas"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Biaya Anda</label>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="bottom-0 left-0 px-4 border-t border-gray-200 w-full flex justify-center items-center gap-3"
            >
              <button
                class="rounded-full bg-primary-100 text-white px-6 py-2 m-auto mt-4 uppercase group-hover:transition-all hover:ease-out hover:duration-300 hover:bg-secondary-100"
                @click="handleFind()"
              >Cari</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="toggleModal" class="absolute z-20 inset-0 opacity-30 bg-black"></div>
    </div>

    <div class="mb-28 mt-16">
      <div class="flex items-center justify-center mb-10">
        <div class="grid grid-cols-6 gap-x-8 gap-y-1 max-w-full">
          <!-- Title -->
          <div class="col-span-full text-2xl font-semibold mb-8 text-gray-800">
            <h3>KATEGORI</h3>
          </div>

          <!-- Card 1 -->
          <div class="col-span-2">
            <div class="w-96 h-64 relative rounded-xl">
              <div class="absolute rounded-xl inset-0 bg-cover bg-center z-0">
                <img src="/images/hospitality.png" alt />
              </div>
              <div
                class="opacity-100 hover:opacity-100 duration-300 absolute inset-0 z-10 text-4xl text-white font-semibold mt-48 ml-10"
              >Hospitality</div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="col-span-2">
            <div class="w-96 h-64 relative rounded-xl">
              <div class="absolute rounded-xl inset-0 bg-cover bg-center z-0">
                <img src="/images/comercial.png" alt />
              </div>
              <div
                class="opacity-100 hover:opacity-100 duration-300 absolute inset-0 z-10 text-4xl text-white font-semibold mt-48 ml-10"
              >Comercial</div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="col-span-2">
            <div class="w-96 h-64 relative rounded-xl">
              <div class="absolute rounded-xl inset-0 bg-cover bg-center z-0">
                <img src="/images/recidential.png" alt />
              </div>
              <div
                class="opacity-100 hover:opacity-100 duration-300 absolute inset-0 z-10 text-4xl text-white font-semibold mt-48 ml-10"
              >Recindencial</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-10 bg-light-100">
      <div class="xl:mx-40">
        <div class="flex justify-between items-center mb-3">
          <div>
            <h3 class="text-2xl font-semibold uppercase">produk</h3>
          </div>
          <div class>
            <nuxt-link to="/produk">
              <span class="font-bold hover:text-secondary-100">Lainnya</span>
            </nuxt-link>
          </div>
        </div>
        <div style="position: relative" class>
          <swiper class="swiper px-5" :options="swiperOption">
            <swiper-slide class>
              <nuxt-link to="/produk/details/1">
              <div
              class="relative flex flex-col items-center justify-center hover:scale-105 transition duration-500 cursor-pointer h-96"
            >
              <div class="container">
                <div class="max-w-md w-full bg-stone-50 border border-stone-200 shadow-lg rounded-xl p-6">
                  <div class="flex flex-col">
                    <div class>
                      <div class="relative h-62 w-full mb-3">
                        <img
                          src="/images/img2-mark-01.png"
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
                            >Rumah Minimalis dengan type 45</h2>
                          </div>
                        </div>
                        <div class="text-xl text-secondary-100 font-semibold mt-1">Rp 1.000.000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </nuxt-link>
            </swiper-slide>
            <swiper-slide>
              <nuxt-link to="/produk/details/2">
              <div
              class="relative flex flex-col items-center justify-center hover:scale-105 transition duration-500 cursor-pointer h-96"
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
                            >Rumah Minimalis dengan type 120</h2>
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
            </swiper-slide>
            <swiper-slide>
              <nuxt-link to="/produk/details/3">
              <div
              class="relative flex flex-col items-center justify-center hover:scale-105 transition duration-500 cursor-pointer h-96"
            >
              <div class="container">
                <div class="max-w-md w-full bg-stone-50 border border-stone-200 shadow-lg rounded-xl p-6">
                  <div class="flex flex-col">
                    <div class>
                      <div class="relative h-62 w-full mb-3">
                        <img
                          src="/images/img3-mark-01.png"
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
                            >Rumah Minimalis dengan type 70</h2>
                          </div>
                        </div>
                        <div class="text-xl text-secondary-100 font-semibold mt-1">Rp 1.500.000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </nuxt-link>
            </swiper-slide>
          </swiper>

          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>

    <div class="mt-16"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import CardProduct from '../components/CardProduct.vue'
export default {
  name: "HomePage",
  data() {
    return {
      toggleModal: false,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        breakpoints: {
          // when window width is <= 499px
          1000: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 4,
          },
          520: {
            slidesPerView: 2,
            spaceBetweenSlides: 1,
            slidesPerGroup: 2,
          },
          300: {
            slidesPerView: 2,
            spaceBetweenSlides: 1,
            slidesPerGroup: 2,
          },
        },
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
  methods:{
    handleFind(){
      this.toggleModal = false
      $nuxt.$router.push({
        path: "/produk/find/1",
      });
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    CardProduct
  },
}
</script>
