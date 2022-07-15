<template>
  <div class="w-full h-full mb-96 container mx-auto pt-10">
    <div class="grid grid-cols-4 gap-4">
      <div></div>
      <div>
        <CardHomeArsitek />
      </div>
      <div>
        <CardHomeArsitek />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div></div>
      <button
        class="
          bg-primary-100
          text-white
          hover:text-secondary-100
          hover:bg-transparent
          hover:border-2
          hover:border-secondary-100
          font-bold
          rounded-full
          py-4
          px-8
          shadow-lg
          uppercase
          tracking-wider
        "
        @click="toggleModal = !toggleModal"
      >
        Upload
      </button>
    </div>
    <div>
      <div
        v-if="toggleModal"
        class="fixed overflow-x-hidden overflow-y-hidden inset-0 flex justify-center items-center z-30"
      >
        <div class="relative mx-auto w-full max-w-2xl">
          <div class="bg-white w-full rounded-xl shadow-2xl py-4 flex flex-col">
            <!-- Header Modal -->
            <div class="flex flex-row px-4 py-3 border-b border-gray-200">
              <div class="text-2xl font-semibold flex w-full">Upload</div>
              <div class="float-right w-auto self-center">
                <i class="ri-close-fill ri-xl cursor-pointer" @click="toggleModal = false"></i>
              </div>
            </div>
            <!-- Body Modal -->
            <div class="w-full p-4">
              <div class="flex items-center">
                <form action class="w-full">
                  <div class="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-secondary-100"
                      placeholder="john@doe.com"
                    />
                    <label
                      for="name"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Nama Produk</label>
                  </div>
                  <div class="relative mt-5">
                    <input
                      id="tipe"
                      name="tipe"
                      type="text"
                      class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-secondary-100"
                      placeholder="john@doe.com"
                    />
                    <label
                      for="tipe"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Tipe Bangunan</label>
                  </div>
                  <div class="relative mt-5">
                    <input
                      id="model"
                      name="model"
                      type="text"
                      class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-secondary-100"
                      placeholder="john@doe.com"
                    />
                    <label
                      for="model"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Model Bangunan</label>
                  </div>
                  <div class="relative mt-5">
                    <input
                      id="harga"
                      name="harga"
                      type="text"
                      class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-secondary-100"
                      placeholder="john@doe.com"
                    />
                    <label
                      for="harga"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Harga</label>
                  </div>
                  <div class="relative mt-5">
                    <input
                      id="foto"
                      name="foto"
                      type="file"
                      class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-secondary-100"
                      placeholder="john@doe.com"
                    />
                    <label
                      for="foto"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Foto</label>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="bottom-0 left-0 px-4 border-t border-gray-200 w-full flex justify-center items-center gap-3"
            >
              <button
                class="rounded-full bg-primary-100 text-white px-6 py-2 m-auto mt-4 uppercase group-hover:transition-all hover:ease-out hover:duration-300 hover:bg-secondary-100"
              >Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="toggleModal" class="absolute z-20 inset-0 opacity-30 bg-black"></div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      toggleModal: false
    }
  }
}

</script>