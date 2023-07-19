<script>
import utilsArticles from '@/utils/articles.js'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

export default {
  props: {
    active: {
      typeof: Array,
      default() {
        return []
      }
    }
  },
  setup() {
    const route = useRoute()
    const getParams = route.params.locale
    const data = ref(utilsArticles(getParams))
    return { data }
  }
}
</script>

<template>
  <div class="px-1">
    <Carousel
      :per-page-custom="[
        [320, 2],
        [768, 3],
        [1024, 4]
      ]"
      :autoplay="true"
    >
      <Slide v-for="(item, index) in active" :key="index" class="px-2">
        <a :href="item.url" target="_blank" class="top-store">
          <div class="relative rounded-lg aspect-[300/178] object-cover overflow-hidden bg-black">
            <img
              src="/images/store/badge.png"
              alt="badge"
              class="absolute right-0 z-10 aspect-square w-[45px]"
            />
            <img
              class="store-img w-full transition-transform duration-300 ease-in-out"
              :src="item.img"
              alt="img-${item.title}"
            />
            <h2
              class="absolute left-2 bottom-2 text-white text-sm md:text-base font-bold textshadow"
            >
              {{ item.name }}
            </h2>
          </div>
          <span
            class="text-xs"
            :class="{
              'text-red-dark-btn': item.category === 'Foods',
              'text-blue-dark-btn': item.category === 'Souvenirs',
              'text-green-dark-btn': item.category === 'Tickets',
              'text-brown-dark-btn': item.category === 'Traffic'
            }"
            >/ {{ $t(item.category) }}</span
          >
          <p v-if="item.phone" class="text-sm">電話: {{ item.phone }}</p>
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${item.addr}`"
            target="_blank"
            v-if="item.addr"
            class="text-sm"
          >
            地址:
            <span class="text-purple hover:underline">{{ item.addr }}</span>
          </a>
          <div class="mt-1">
            <a
              v-if="item.url"
              :href="item.url"
              target="_blank"
              class="text-sm text-white text-center py-1 px-2 my-3 bg-blue-btn hover:bg-blue-dark-btn"
            >
              店家連結
            </a>
          </div>
        </a>
      </Slide>
    </Carousel>
  </div>
</template>

<style lang="scss">
.top-store {
  &:hover {
    .store-img {
      transform: scale(125%);
    }
  }
}
.textshadow {
  text-shadow: 0px 0px 6px black;
}
</style>
