<script>
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
    return {}
  }
}
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-0.5 px-1 mt-10">
    <div v-for="(item, index) in active" :key="index">
      <a :href="item.url" target="_blank" class="stores">
        <div class="relative aspect-[300/178] object-cover overflow-hidden">
          <img
            class="store-img w-full transition-transform duration-300 ease-in-out"
            :src="item.img"
            :alt="`img-${item.name}`"
          />
        </div>
        <div class="p-3">
          <h4 class="font-medium">{{ item.name }}</h4>
          <p v-if="item.phone" class="text-sm">電話: {{ item.phone }}</p>
          <a
            :href="`https://www.google.com/maps/search/?api=1&query=${item.addr}`"
            target="_blank"
            v-if="item.addr"
            class="text-sm"
          >
            地址:
            <span
              class="hover:underline"
              :class="{
                'text-red-dark-btn': item.category === 'Foods',
                'text-blue-dark-btn': item.category === 'Souvenirs',
                'text-green-dark-btn': item.category === 'Tickets',
                'text-brown-dark-btn': item.category === 'Traffic'
              }"
              >{{ item.addr }}</span
            >
          </a>
          <button
            v-if="item.url"
            class="block text-sm text-white py-1 px-2 mt-5"
            :class="{
              'bg-red-dark-btn': item.category === 'Foods',
              'bg-blue-dark-btn': item.category === 'Souvenirs',
              'bg-green-dark-btn': item.category === 'Tickets',
              'bg-brown-dark-btn': item.category === 'Traffic'
            }"
          >
            店家連結
          </button>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stores {
  &:hover {
    .store-img {
      transform: scale(110%);
    }
  }
}
</style>
