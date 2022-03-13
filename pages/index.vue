<template>
  <div class="font-poppins">
    <Navbar />

    <!-- jumbotron -->
    <div class="py-72 bg-hero">
      <div class="flex justify-start ml-32">
        <div>
          <h2 class="text-4xl font-bold mb-2 text-primary-100">
            TEMUKAN
            <span class="text-secondary-100">IDE DESAIN</span>
          </h2>
          <h2 class="text-4xl font-bold mb-2 mb-8 text-primary-100">BANGUNAN IMPIANMU!</h2>
          <button
            class="bg-primary-100 text-white hover:text-secondary-100 hover:bg-transparent hover:border-primary-100 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
          >mulai sekarang</button>
        </div>
      </div>
    </div>

    <div class="mb-96 mt-16">
      <div class="flex items-center justify-center mb-10">
        <div class="grid justify-items-center grid-cols-6 gap-x-4 gap-y-1 max-w-7xl">
          <!-- Title -->
          <div class="col-span-full text-2xl font-bold mb-2 mb-8 text-gray-800">
            <h3>KATEGORI</h3>
          </div>

          <!-- Card 1 -->
          <div class="col-span-2">
            <div class="w-96 h-64 relative rounded-xl">
              <div
                class="absolute rounded-xl inset-0 bg-cover bg-center z-0"
              >
              <img src="../assets/images/hospitality.png" alt="">
              </div>
              <div
                class="opacity-100 hover:opacity-100 duration-300 absolute inset-0 z-10 text-4xl text-white font-semibold mt-48 ml-10"
              >Hospitality</div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="col-span-2">
            <div class="w-96 h-64 relative rounded-xl">
              <div
                class="absolute rounded-xl inset-0 bg-cover bg-center z-0"
              >
              <img src="../assets/images/comercial.png" alt="">
              </div>
              <div
                class="opacity-100 hover:opacity-100 duration-300 absolute inset-0 z-10 text-4xl text-white font-semibold mt-48 ml-10"
              >Comercial</div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="col-span-2">
            <div class="w-96 h-64 relative rounded-xl">
              <div
                class="absolute rounded-xl inset-0 bg-cover bg-center z-0"
              >
              <img src="../assets/images/recidential.png" alt="">
              </div>
              <div
                class="opacity-100 hover:opacity-100 duration-300 absolute inset-0 z-10 text-4xl text-white font-semibold mt-48 ml-10"
              >Recindencial</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "HomePage",
}
</script>
