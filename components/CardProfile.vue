<template>
  <nuxt-link to="/arsitek">
    <div
      class="
        relative
        flex flex-col
        items-center
        justify-center
        transition
        duration-500
        cursor-pointer
        h-100
        mt-20
      "
    >
      <div class="container pt-10">
        <div class="max-w-md w-full">
          <div class="flex flex-col items-center">
            <div class>
              <div class="relative h-40 w-40 mb-3">
                <img
                  src="../assets/images/profile.png"
                  alt="profile"
                  class="w-full object-fill rounded-full"
                />
              </div>
              
            </div>
            <div class="flex-auto justify-evenly">
                <div class="flex flex-wrap w-full">
                  <div
                    class="
                      w-full
                      flex-none
                      text-sm
                      flex
                      items-center
                      text-gray-600
                    "
                  >
                  </div>
                  <div class="flex items-center w-full justify-between min-w-0 pt-4">
                    <h2
                      class="text-lg mr-auto cursor-pointer text-black truncate"
                    >
                      10 Desain
                    </h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <figure
      class="relative
        flex flex-col
        items-center
        justify-center
        transition
        duration-500
        cursor-pointer
        h-100
        mt-20"
        
    >
      <img
        class="w-24 h-24 rounded-full"
        src="../assets/images/profile.png"
        alt=""
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
          <div class="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure> -->

    
  </nuxt-link>
</template>