<template>
  <div class="relative">
    <div class="absolute z-[2] left-0 right-0 top-0 bottom-0 bg-white opacity-[0.85]"></div>
    <img class="absolute z-[1] left-0 right-0 top-0 object-cover w-full h-full bottom-0 opacity-60" src="@/assets/images/bg-ocean.jpg" alt="ocean">
    <div class="container relative z-10 left-0 right-0 top-0 bottom-0 mx-auto mt-20 py-11 md:text-center">
      <div class="flex justify-between items-center flex-wrap">
        <div class="flex gap-16 flex-wrap">
          <div>
            <p class="text-sm mb-[18px]">{{ $t('Organizer') }}</p>
            <img src="/images/logo-keelung.png" alt="keelung logo" class="h-[42px]" />
          </div>
          <div>
            <p class="text-sm mb-3">{{ $t('Executor') }}</p>
            <div class="flex gap-3 mb-8 md:mb-0">
              <img src="/images/logo-brim.png" alt="brim" class="h-[42px]" />
              <img src="/images/logo-3t.png" alt="3tgds" class="h-[49px]" />
            </div>
          </div>
        </div>
        <div class="md:mr-16">
          <p class="text-sm mb-[18px]">{{ $t('Travel Services Qrcode') }}</p>
          <img src="/images/qrcode.png" alt="qrcode" class="h-[110px]" />
        </div>
      </div>
      <div class="text-sm text-left text-gray-400">© 2020 3T GDS Technology Inc.</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
