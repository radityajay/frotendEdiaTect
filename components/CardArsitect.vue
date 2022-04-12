<template>
  <nuxt-link to="/arsitek">
    <div
      class="
        relative
        flex flex-col
        items-center
        justify-center
        hover:scale-105
        transition
        duration-500
        cursor-pointer
        h-100
        mt-20
      "
    >
      <div class="container pt-10">
        <div class="max-w-md w-full bg-stone-50 shadow-lg rounded-xl p-6">
          <div class="flex flex-col items-center">
            <div class>
              <div class="relative h-40 w-40 mb-3">
                <img
                  src="/images/profile.png"
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
                  <div class="flex items-center w-full justify-between min-w-0">
                    <h2
                      class="text-lg mr-auto cursor-pointer text-black truncate"
                    >
                      Lorem Ipsum
                    </h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>