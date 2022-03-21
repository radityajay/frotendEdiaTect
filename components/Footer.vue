<template>
  <div>
    <footer class="relative bg-accent-100 pt-14 pb-6 text-white">
      <div class="container mx-auto px-4 xl:px-32">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <!-- <h4 class="text-3xl fonat-semibold text-white">Let's keep in touch!</h4> -->
            <img src="../assets/images/logo-black-white.png" class="h-20" alt />
            <h5 class="text-lg mt-0 mr-36 text-blueGray-600 pt-5">
              EdiaTect merupakan sebuah platform yang
              menyediakan ide desain sesuai dengan
              kebutuhan dan dengan detail desain konsep
              kerja 3D.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <a href="https://www.instagram.com/edia_tect/">
                <button
                  @mouseover="hoveredIG = true"
                  @mouseleave="hoveredIG = false"
                  class="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <!-- <i class="fa-brands fa-instagram"></i> -->
                  <!-- <font-awesome-icon icon="faInstagram" /> -->
                  <i
                    :class="{ 'ri-instagram-fill': hoveredIG == true, 'ri-instagram-line': hoveredIG == false }"
                    class="ri-xl grid justify-items-center"
                  ></i>
                </button>
              </a>
              <button
                @mouseover="hoveredFB = true"
                @mouseleave="hoveredFB = false"
                class="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <!-- <i class="fa-brands fa-instagram"></i> -->
                <!-- <font-awesome-icon icon="faInstagram" /> -->
                <i
                  :class="{ 'ri-facebook-circle-fill': hoveredFB == true, 'ri-facebook-fill': hoveredFB == false }"
                  class="ri-xl grid justify-items-center"
                ></i>
              </button>
              <button
                @mouseover="hoveredWA = true"
                @mouseleave="hoveredWA = false"
                class="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <!-- <i class="fa-brands fa-instagram"></i> -->
                <!-- <font-awesome-icon icon="faInstagram" /> -->
                <i
                  :class="{ 'ri-whatsapp-fill': hoveredWA == true, 'ri-whatsapp-line': hoveredWA == false }"
                  class="ri-xl grid justify-items-center"
                ></i>
              </button>
              <button
                @mouseover="hovered = true"
                @mouseleave="hovered = false"
                class="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <!-- <i class="fa-brands fa-instagram"></i> -->
                <!-- <font-awesome-icon icon="faInstagram" /> -->
                <i
                  :class="{ 'ri-mail-fill': hovered == true, 'ri-mail-line': hovered == false }"
                  class="ri-xl grid justify-items-center"
                ></i>
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span
                  class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                >Useful Links</span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >About Us</a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >Blog</a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >Github</a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >Free Products</a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span
                  class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                >Other Resources</span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >MIT License</a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >Privacy Policy</a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-white" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-lg text-white py-1">
            Copyright ©
            <span id="get-current-year">2022</span>
            <a
              href="https://www.creative-tim.com/product/notus-js"
              class="text-blueGray-500 hover:text-secondary-100"
              target="_blank"
            >EdiaTect</a>
            <a
              href="https://www.creative-tim.com?ref=njs-profile"
              class="text-blueGray-500 hover:text-blueGray-800"
            >Creative Tim</a>.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hovered: false,
      hoveredWA: false,
      hoveredFB: false,
      hoveredIG: false,
    }
  }
}
</script>