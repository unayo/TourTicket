<script>
import { onMounted, reactive } from 'vue'

export default {
  setup() {
    const folder = reactive({
      glob: null,
      banners: []
    })
    onMounted(() => {
      folder.glob = import.meta.globEager('/public/images/banner/*')
      folder.banners = reactive(Object.values(folder.glob))
    })

    return { folder }
  }
}
</script>

<template>
  <div class="relative p-0 md:ps-36">
    <Carousel :autoplay="true" :per-page="1" :adjustable-height-easing="500">
      <Slide v-for="(item, idx) in folder.banners" :key="idx">
        <img :src="item.default" alt="Banner" />
      </Slide>
    </Carousel>
  </div>
</template>
