<template>
  <div class="px-28">
    <div class="flex flex-row mt-24">
      <div class="basis-full h-auto">
        <div class="px-5 mx-auto">
          <div>
            <div class="h-auto aspect-video mx-auto">
              <img
                src="/images/img3-mark-01.png"
                alt="gambar1"
              />
            </div>
            <div class="columns-4 mt-4 mb-4">
              <div class="w-full aspect-square">
                <img
                  src="/images/img3-mark-01.png"
                  alt="gambar1"
                />
              </div>
              <div class="w-full aspect-square">
                <img
                  src="/images/img2-mark-01.png"
                  alt="gambar2"
                />
              </div>
              <div class="w-full aspect-square">
                <img
                  src="/images/img1-mark-01.png"
                  alt="gambar3"
                />
              </div>
              <div class="w-full aspect-square">
                <img
                  src="/images/img4-mark-01.jpg"
                  alt="gambar4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-1/2">
        <div class="bg-light-100 shadow-2xl w-full">
          <div class="flex flex-col p-8 h-auto">
            <div class="font-semibold text-xl">Deskripsi</div>
            <div>
              Berikut merupakan desain dari proyek VARRA, yang bertempat di Tukad Balian.
            </div>
            <div class="mt-5 font-semibold text-l">
              Tipe : 120
            </div>
            <div class="mt-5 font-semibold text-l">
              Luas Tanah : 150 m<sup>2</sup>
            </div>
            <div class="mt-5 font-semibold text-l">
              Model : Minimalis
            </div>
            <div class="mt-5 font-semibold text-l">
              Arsitek : Ar. Made Eka Wijaya ST IAI
            </div>
            <div class="flex flex-row mt-20">
              <div class="mx-auto">
                <a href="https://api.whatsapp.com/send?phone=6285333259902&text=Saya%20tertarik%20untuk%20untuk%20membeli%20design%20Rumah%20Minimalis%20dengan%20type%2090" target="_blank">
                  <button
                  class="bg-primary-100 py-3 px-6 rounded-full text-white hover:bg-green-500"
                  >
                    <i class="ri-whatsapp-line ri-xl"></i> Whatsapp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      toggleModal: false
    }
  },
  methods:{
    handleWhatsapp(){
      $nuxt.$router.push({
        path: "/produk/find",
      });
    }
  },
  components: {
  },
}
</script>