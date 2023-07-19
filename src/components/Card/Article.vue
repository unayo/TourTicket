<script>
import utilsArticles from '@/utils/articles.js'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { storeGlobal } from '@/stores/global.js'
import Parallaxy from '@lucien144/vue3-parallaxy'
export default {
  components: { Parallaxy },
  setup() {
    const route = useRoute()
    const getParams = route.params.locale
    const data = ref(utilsArticles(getParams))

    const store_Global = storeGlobal()
    watch(
      () => store_Global.lang,
      (newval) => {
        data.value = utilsArticles(newval)
      }
    )

    return { data }
  }
}
</script>

<template>
  <Carousel
    :per-page-custom="[
      [320, 2],
      [768, 3],
      [1024, 4]
    ]"
    :autoplay="true"
  >
    <Slide v-for="(item, index) in data" :key="index" class="px-2">
      <a href="#">
        <Parallaxy :speed="70" direction="opposite">
          <div class="down">
            <Parallaxy :speed="20" :animation="(delta) => `transform: scale(${1 + delta / -40});`">
              <img class="aspect-square w-full" :src="item.img" :alt="`img-${item.title}`" />
            </Parallaxy>
          </div>
        </Parallaxy>
        <div class="mt-10">
          <template v-for="(i, idx) in item.tag" :key="idx">
            <span class="text-purple text-xs">{{ i }}</span>
            <span v-if="item.tag.length - 1 !== idx" class="text-purple text-xs"> | </span>
          </template>
          <h3>{{ item.title }}</h3>
        </div>
      </a>
    </Slide>
  </Carousel>
</template>

<style lang="scss" scoped>
.down {
  clip-path: inset(0 0 0 0 round 50% 50% 0 0);
}
</style>
