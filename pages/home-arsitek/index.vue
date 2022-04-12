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
  </div>
</template>