<script>
export default {
  props: {
    name: {
      typeof: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-3 justify-center justify-items-center ">
    <h1 class="title text-4xl font-black text-white tracking-wider z-10">{{ $t(name.main) }}</h1>
    <p class="text-sm md:text-base text-stone-400 z-10">/ {{ $t(name.sub) }} /</p>
  </div>
</template>

<style lang="scss">
$stone-700: rgb(68 64 60);

.title {
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  // -webkit-text-stroke: 1.5px $stone-700;
  // &::before {
  //   content: attr(data-storke);
  // }
}
</style>
