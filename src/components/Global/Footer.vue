<template>
  <div class="relative">
    <div class="absolute z-[2] left-0 right-0 top-0 bottom-0 bg-white opacity-[0.85]"></div>
    <img class="absolute z-[1] left-0 right-0 top-0 object-cover w-full h-full bottom-0 opacity-60" src="@/assets/images/bg-ocean.jpg" alt="ocean">
    <div class="container relative z-10 left-0 right-0 top-0 bottom-0 mx-auto mt-20 py-11 md:text-center">
      <div class="flex justify-between items-center flex-wrap">
        <div class="flex gap-16 flex-wrap">
          <div>
            <p class="text-sm mb-[18px]">{{ $t('Organizer') }}</p>
            <img src="/images/logo.png" alt="keelung logo" class="h-[42px]" />
          </div>
        </div>
      </div>
      <div class="text-sm text-left text-gray-400">© 2020 BAM Inc.</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
