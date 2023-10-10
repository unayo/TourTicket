<script>
import Title from '@/components/Global/Title.vue'
import MainBanner from '@/components/Banner/Main.vue'
import Article from '@/components/Card/Article.vue'
import TopStore from '@/components/Card/TopStore.vue'
import Stores from '@/components/Card/Stores.vue'
import Prod from '@/components/Card/Prod.vue'
import Footer from '@/components/Global/Footer.vue'

import { storeGlobal } from '@/stores/global.js'

import Parallaxy from '@lucien144/vue3-parallaxy'

import { CATEID } from '@/utils/prod.js'
import { reactive, watch } from 'vue'

import { utilsTopstore, utilsStoreAll, utilsItemAll } from '@/utils/store.js'

export default {
  components: { MainBanner, Title, Article, TopStore, Stores, Prod, Footer, Parallaxy },
  setup() {
    // ----- menu link -----
    const store_Global = storeGlobal()
    watch(
      () => store_Global.menu,
      (newval) => {
        if (newval.menuTitle === 'Store Info' && newval.sub) {
          // Store Info
          ckStoreBtn(newval.sub.title)
        } else if (newval.menuTitle === 'Product Tickets' && newval.sub) {
          // Product Tickets
          ckProdBtn(newval.sub.title)
        }
      }
    )

    // ----- Store Info ------
    const storesBtn = reactive({
      init: 'Foods',
      cate: ['Foods', 'Souvenirs', 'Tickets', 'Traffic'],
      random: [],
      items: []
    })
    watch(
      () => store_Global.lang,
      (newval) => {
        randomstore(newval) // top store
      }
    )

    const randomstore = (val) => {
      storesBtn.random = utilsTopstore(val)
    }

    const ckStoreBtn = (val) => {
        storesBtn.init = val
        storesBtn.items = utilsStoreAll(val)
    }

    // ----- Product Tickets ------
    // 航空旅遊 Airport / 飯店住宿 Hotel / 美食餐券、伴手禮 Others
    const prodBtn = reactive({
      init: 'Airport',
      cate: ['Airport', 'Hotel', 'Others'],
      newDesc: []
    })
    const ckProdBtn = (val) => {
        prodBtn.init = val
        prodBtn.newDesc = utilsItemAll()
        console.log('prodBtn.newDesc', prodBtn.newDesc)
    }

    const init = async () => {
      await randomstore()
      await ckStoreBtn()
      await ckProdBtn()
    }
    init()

    return { storesBtn, ckStoreBtn, prodBtn, ckProdBtn, CATEID }
  }
}
</script>

<template>
  <div class="overflow-hidden">
    <MainBanner />
    <section id="TravelPlan" class="section container relative md:pt-20 mx-auto md:flex md:gap-3">
      <div class="relative w-[290px] md:w-2/5 mx-auto md:ms-10 mt-20 text-center md:text-left">
        <Parallaxy
          :speed="20"
          :animation="
            (delta) =>
              1 + delta / -30 > 1.5
                ? `transform: scale(1.5);`
                : `transform: scale(${1 + delta / -30});`
          "
        >
          <img
            class="absolute w-[166px] t-[-78px] l-[40px]"
            src="@/assets/images/ob1-keelung.png"
          />
        </Parallaxy>
        <Title
          class="w-[316px]"
          :name="{ main: 'Travel Plan', sub: 'Exploring the Charm of the Harbor City' }"
        />
      </div>
      <Article class="mt-10" />
    </section>
    <section id="TravelExperience" class="section reactive text-center pt-20 mb-20">
      <Parallaxy
        :speed="20"
        :animation="
          (delta) =>
            1 + delta / -30 > 1.5
              ? `transform: translate3d(1px,0, 0)`
              : `transform: translate3d(${120 + delta * 10}px,0, 0)`
        "
      >
        <img class="absolute top-[-157px] right-0 w-[229px]" src="@/assets/images/ob2-sea.png" />
      </Parallaxy>
      <Title
        :name="{ main: 'Travel Experience', sub: 'Discovering the Stunning Scenery of the City' }"
      />
      <div class="flex flex-wrap justify-between overflow-hidden my-10">
        <Parallaxy :speed="20" class="experience relative w-full sm:w-1/3 h-[300px] md:h-[545px]">
          <a href="" class="experience relative w-full sm:w-1/3 h-[300px] md:h-[545px]">
          <div
            class="experience-img saturate-50 h-full w-full bg-image bg-cover bg-center transform transition-transform duration-500 ease-in-out"
            style="
              background-image: url('https://images.unsplash.com/photo-1565468893023-6183eb37f35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80');
            "
          >
            <div class="experience-overlay bg-overlay"></div>
          </div>
          <h3
            class="experience-text font-bold textshadow text-2xl text-white tracking-wider absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:block before:absolute before:border before:border-2 before:w-0 before:bottom-[-15px] before:bg-pink-500"
          >
            {{ $t('Theme Tours') }}
          </h3>
        </a>
        </Parallaxy>
        <Parallaxy
          :speed="53"
          direction="opposite"
          class="experience relative w-full sm:w-1/3 h-[300px] md:h-[545px] z-10"
        >
          <a href="" class="experience relative w-full sm:w-1/3 h-[300px] md:h-[545px]">
          <div
            class="experience-img saturate-50 h-full w-full bg-image bg-cover bg-center transform transition-transform duration-500 ease-in-out"
            style="
              background-image: url('https://images.unsplash.com/photo-1526682847805-721837c3f83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80');
            "
          >
            <div class="experience-overlay bg-overlay"></div>
          </div>
          <h3
            class="experience-text font-bold textshadow text-2xl text-white tracking-wider absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:block before:absolute before:border before:border-2 before:w-0 before:bottom-[-15px] before:bg-pink-500"
          >
            {{ $t('Guided Walking Tours') }}
          </h3>
        </a>
        </Parallaxy>
        <Parallaxy :speed="20" class="experience relative w-full sm:w-1/3 h-[300px] md:h-[545px]">
          <a href="" class="experience relative w-full sm:w-1/3 h-[300px] md:h-[545px]">
          <div
            class="experience-img saturate-50 h-full w-full bg-image bg-cover bg-center transform transition-transform duration-500 ease-in-out"
            style="
              background-image: url('https://plus.unsplash.com/premium_photo-1677574837144-facfdeb75a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80');
            "
          >
            <div class="experience-overlay bg-overlay"></div>
          </div>
          <h3
            class="experience-text font-bold textshadow text-2xl text-white tracking-wider absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:block before:absolute before:border before:border-2 before:w-0 before:bottom-[-15px] before:bg-pink-500"
          >
            {{ $t('Cruise Passenger Zone') }}
          </h3>
        </a>
        </Parallaxy>
      </div>
    </section>
    <section id="StoreInfo" class="section pt-20">
      <div class="relative">
        <Parallaxy
          :speed="20"
          :animation="
            (delta) =>
              1 + delta / -30 > 1.5
                ? `transform: scale(1.5);`
                : `transform: scale(${1 + delta / 50});`
          "
        >
          <img class="absolute w-[359px] top-[-70px] left-0" src="@/assets/images/ob3-whale.png" />
        </Parallaxy>
        <div class="relative">
          <Parallaxy
            :speed="20"
            :animation="
              (delta) =>
                1 + delta / -40 > 1.5
                  ? `transform: scale(.5);`
                  : `transform: scale(${1 + delta / -40});`
            "
          >
            <img
              class="absolute w-[58px] top-[-12px] right-[579px]"
              src="@/assets/images/ob4-love.png"
            />
          </Parallaxy>
          <Title
            :name="{ main: 'Store Info', sub: 'Explore the Treasures of Northern Taiwan' }"
            class="text-center"
          />
        </div>
      </div>
      <div class="my-10">
        <TopStore class="md:mx-10" :active="storesBtn.random" />
        <div id="StoreInfoItem" class="h-[50px]"></div>
        <div class="relative z-10 container mx-auto">
          <div class="flex gap-3 justify-center flex-wrap pt-10">
            <template v-for="(item, index) in storesBtn.cate" :key="index">
              <button
                class="rounded-lg tracking-wider text-sm py-1.5 px-8"
                :class="{
                  'bg-red-btn text-white hover:bg-red-dark-btn':
                    storesBtn.init === 'Foods' && item === 'Foods',
                  'bg-blue-btn text-white hover:bg-blue-dark-btn':
                    storesBtn.init === 'Souvenirs' && item === 'Souvenirs',
                  'bg-green-btn text-white hover:bg-green-dark-btn':
                    storesBtn.init === 'Tickets' && item === 'Tickets',
                  'bg-brown-btn text-white hover:bg-brown-dark-btn':
                    storesBtn.init === 'Traffic' && item === 'Traffic',
                  'border border-red-btn text-red-btn hover:bg-red-btn hover:text-white':
                    storesBtn.init !== 'Foods' && item === 'Foods',
                  'border border-blue-btn text-blue-btn hover:bg-blue-btn hover:text-white':
                    storesBtn.init !== 'Souvenirs' && item === 'Souvenirs',
                  'border border-green-btn text-green-btn hover:bg-green-btn hover:text-white':
                    storesBtn.init !== 'Tickets' && item === 'Tickets',
                  'border border-brown-btn text-brown-btn hover:bg-brown-btn hover:text-white':
                    storesBtn.init !== 'Traffic' && item === 'Traffic'
                }"
                @click="ckStoreBtn(item)"
              >
                {{ $t(item) }}
              </button>
            </template>
          </div>
          <Stores :active="storesBtn.items" :prebtn="storesBtn.init" />
        </div>
        <Parallaxy :speed="300" class="hidden md:block">
          <img
            src="@/assets/images/ob5-star.png"
            class="absolute right-40 bottom-[-130px] w-[78px]"
          />
        </Parallaxy>
        <Parallaxy :speed="180">
          <img
            src="@/assets/images/ob6-coral.png"
            class="absolute left-40 bottom-[-230px] w-[180px]"
          />
        </Parallaxy>
      </div>
    </section>
    <section id="ProductTickets" class="section relative container pt-20 mx-auto">
      <Title
        :name="{
          main: 'Product Tickets',
          sub: 'Trace the Historical Traces and Roam Keelung City'
        }"
        class="text-center"
      />
      <div id="ProductTicketsItem" class="h-[50px]"></div>
      <div class="flex gap-3 justify-center flex-wrap pt-10">
        <template v-for="(item, index) in prodBtn.cate" :key="index">
          <button
            class="rounded-lg tracking-wider text-sm py-1.5 px-8"
            :class="{
              'bg-red-btn text-white hover:bg-red-dark-btn':
                prodBtn.init === 'Airport' && item === 'Airport',
              'bg-blue-btn text-white hover:bg-blue-dark-btn':
                prodBtn.init === 'Hotel' && item === 'Hotel',
              'bg-green-btn text-white hover:bg-green-dark-btn':
                prodBtn.init === 'Others' && item === 'Others',
              'border border-red-btn text-red-btn hover:bg-red-btn hover:text-white':
                prodBtn.init !== 'Airport' && item === 'Airport',
              'border border-blue-btn text-blue-btn hover:bg-blue-btn hover:text-white':
                prodBtn.init !== 'Hotel' && item === 'Hotel',
              'border border-green-btn text-green-btn hover:bg-green-btn hover:text-white':
                prodBtn.init !== 'Others' && item === 'Others'
            }"
            @click="ckProdBtn(item)"
          >
            {{ $t(item) }}
          </button>
        </template>
      </div>
      <Prod :active="prodBtn.newDesc" :prebtn="prodBtn.init" />
      <div class="flex justify-center ">
        <span class="rounded-lg tracking-wider text-sm py-1.5 px-8 border border-black text-black hover:bg-black hover:text-white">

          {{ $t('View More Products') }}
        </span>
      </div>
      <Parallaxy
        :speed="20"
        :animation="
          (delta) =>
            1 + delta / -30 > 1.5
              ? `transform: translate3d(1px,0, 0)`
              : `transform: translate3d(${120 + delta * 10}px,0, 0)`
        "
      >
        <img class="absolute top-[-157px] left-0 w-[229px]" src="@/assets/images/ob2-sea.png" />
      </Parallaxy>
    </section>
    <Footer />
  </div>
</template>

<style lang="scss">
.experience {
  .experience-text::before {
    transition: width 0.5s ease-in-out;
    opacity: 0;
  }
  &:hover {
    .experience-img {
      transform: scale(105%);
    }
    .experience-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .experience-text::before {
      width: 100%;
      opacity: 1;
    }
  }
}
</style>
