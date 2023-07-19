<script>
import { useComma } from '@/utils/hooks.js'
import { TO_3TEZ_WEDSITE } from '@/api/index.js'
import { useRoute } from 'vue-router'
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
    const website = TO_3TEZ_WEDSITE()
    return { useComma, getParams, website, route }
  }
}
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 px-2 my-10">
    <template v-for="(item, index) in active" :key="index">
      <a
        :href="`${website}/product/detail/${item.item_id}?lang=${getParams}`"
        target="_blank"
        class="top-store pb-10"
      >
        <div class="relative rounded-lg aspect-[300/178] object-cover overflow-hidden">
          <img
            src="/images/prod/new.png"
            alt="badge"
            class="absolute right-1 md:right-3 top-1 md:top-3 z-10 aspect-square w-[39px] md:w-[45px]"
          />
          <img
            class="store-img w-full transition-transform duration-300 ease-in-out"
            :src="item.cover_image"
            :alt="`img-${item.name}`"
          />
        </div>
        <h3 class="mt-3 text-base md:text-xl font-thin tracking-wider">
          TWD {{ useComma(item.min_price) }} {{ $t('up') }}
        </h3>
        <h2 class="font-semibold text-sm">{{ item.name }}</h2>
      </a>
    </template>
  </div>
</template>
