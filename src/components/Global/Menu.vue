<script>
import { ref, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { storeGlobal } from '@/stores/global.js'
import { CircleCloseFilled } from '@element-plus/icons-vue'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const preLang = ref('繁中')
    const langCode = reactive([
      { name: '繁中', code: 'tw' },
      { name: 'English', code: 'en' },
      { name: '日本語', code: 'ja' },
      { name: '한국어', code: 'kn' }
    ])

    const menu = reactive([
      {
        mainTitle: 'Travel Plan',
        link: '#TravelPlan',
        sub: [
          { title: 'Plan', link: '#' },
          { title: 'Transportation Info', link: '#' }
        ]
      },
      {
        mainTitle: 'Travel Experience',
        link: '#TravelExperience',
        sub: [
          { title: 'Theme Tours', link: '#' },
          { title: 'Guided Walking Tours', link: '#' },
          { title: 'Cruise Passenger Zone', link: '#' }
        ]
      },
      {
        mainTitle: 'Store Info',
        link: '#StoreInfo',
        sub: [
          { title: 'Foods', link: '#StoreInfoItem' },
          { title: 'Souvenirs', link: '#StoreInfoItem' },
          { title: 'Tickets', link: '#StoreInfoItem' },
          { title: 'Traffic', link: '#StoreInfoItem' }
        ]
      },
      {
        mainTitle: 'Product Tickets',
        link: '#ProductTickets',
        sub: [
          { title: 'Foods', link: '#ProductTicketsItem' },
          { title: 'Souvenirs', link: '#ProductTicketsItem' },
          { title: 'Tickets', link: '#ProductTicketsItem' },
          { title: 'Traffic', link: '#ProductTicketsItem' }
        ]
      }
    ])

    const store_Global = storeGlobal()
    const ckSubMenu = (title, sub, isphone) => {
      // mainTitle
      if (!sub && !isphone) {
        // web & main
        store_Global.setMenu({ menuTitle: title, sub: null })
      } else if (!sub && isphone) {
        // phone & main
        store_Global.setMenu({ menuTitle: title, sub: null })
        drawer.value = false
      }
      // subTitle
      if (title === 'Store Info' || title === 'Product Tickets') {
        store_Global.setMenu({ menuTitle: title, sub })
      }

      if (isphone) {
        // phone drawer close
        drawer.value = false
      }
    }

    // menu change language
    const changeLocale = async (langcode, isphone) => {
      preLang.value = langcode.name
      const pathAry = route.fullPath.split('/')
      const lastPath = pathAry[pathAry.length - 1]
      if (lastPath.includes('#')) {
        // 首頁是否有 #id
        if (lastPath.split('#')[0] === route.params.locale) {
          pathAry[pathAry.length - 1] = langcode.code
        }
      } else {
        if (pathAry[pathAry.length - 1] === route.params.locale) {
          pathAry[pathAry.length - 1] = langcode.code
        } else {
          pathAry[pathAry.length - 1] = 'tw'
        }
      }

      let newrouter = pathAry.join('/')
      console.log('newrouter',newrouter)
      if (route.hash) {
        newrouter = newrouter + route.hash
      }

      if (isphone) {
        // phone drawer close
        drawer.value = false
      }

      router.push(newrouter)
    }

    watch(()=> store_Global.lang, (newval)=>{
      const get = langCode.filter((f)=> f.code === newval )
      preLang.value = get[0].name
    })
    // phone menu
    const drawer = ref(false)
    const ckDrawer = () => {
      drawer.value = true
    }
    return { changeLocale, preLang, langCode, menu, ckSubMenu, drawer, CircleCloseFilled, ckDrawer }
  }
}
</script>

<template>
  <div class="sticky z-50 top-0 left-0 right-0 bg-white drop-shadow">
    <div class="container mx-auto">
      <el-menu class="items-center py-3" mode="horizontal" :ellipsis="false">
        <a :href="{ path: `/${$route.params.locale}` }">
          <img src="/images/logo.png" alt="keelung logo" class="h-[42px]" />
        </a>
        <div class="flex-grow"></div>
        <!-- ----- web start ----- -->
        <div v-for="(item, index) in menu" :key="index" class="hidden md:block">
          <el-sub-menu :index="index">
            <template #title>
              <a
                :href="item.link"
                class="font-bold tracking-wider leading-8"
                @click="ckSubMenu(item.mainTitle, null, false)"
              >
                {{ $t(item.mainTitle) }}
              </a>
            </template>
            <el-menu-item
              v-for="(i, idx) in item.sub"
              :key="idx"
              :index="`${index}-${idx}`"
              @click="ckSubMenu(item.mainTitle, i, false)"
            >
              <a :href="i.link" class="font-bold w-full">{{ $t(i.title) }}</a>
            </el-menu-item>
          </el-sub-menu>
        </div>

        <el-sub-menu class="hidden md:block">
          <template #title>
            <h5 class="flex gap-3 items-center font-bold tracking-wider leading-8">
              <img src="/images/icon-lang.png" alt="icon-lang" class="h-[15px]" />
              <span>{{ preLang }}</span>
            </h5>
          </template>
          <template v-for="(item, index) in langCode" :key="index">
            <el-menu-item @click="changeLocale(item, false)">
              <h5 class="font-bold">{{ item.name }}</h5>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <!-- ----- web end ----- -->
        <!-- ----- iphone start ----- -->
        <button class="menuToggle block md:hidden" @click="ckDrawer">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <!-- ----- iphone end ----- -->
      </el-menu>
    </div>
  </div>
  <el-drawer v-model="drawer" :show-close="true" size="83%">
    <template #header>
      <img src="/images/logo.png" alt="keelung logo" class="h-[42px] object-contain" />
    </template>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="(item, index) in menu" :key="index" :name="index">
        <template #title>
          <a
            :href="item.link"
            class="w-full font-bold tracking-wider leading-8"
            @click="ckSubMenu(item.mainTitle, null, true)"
          >
            {{ $t(item.mainTitle) }}
          </a>
        </template>
        <div
          v-for="(i, idx) in item.sub"
          :key="idx"
          :index="`${index}-${idx}`"
          @click="ckSubMenu(item.mainTitle, i, true)"
        >
          <a :href="i.link" class="font-bold ml-4 block leading-[3]">
            {{ $t(i.title) }}
          </a>
        </div>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h5 class="flex gap-3 items-center font-bold tracking-wider leading-8">
            <img src="/images/icon-lang.png" alt="icon-lang" class="h-[15px]" />
            <span>{{ preLang }}</span>
          </h5>
        </template>
        <template v-for="(item, index) in langCode" :key="index">
          <div @click="changeLocale(item, true)">
            <h5 class="font-bold ml-4 block leading-[3]">{{ item.name }}</h5>
          </div>
        </template>
      </el-collapse-item>
    </el-collapse>
  </el-drawer>
</template>

<style lang="scss">
$stone-950: rgb(12 10 9);
$stone-500: rgb(120 113 108);
$stone-400: rgb(168 162 158);
$stone-300: rgb(214 211 209);
$drop-shadow-lg: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
// el-menu
.el-menu--horizontal > .el-sub-menu:hover .el-sub-menu__title {
  color: $stone-500;
}
.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
  border-bottom: unset !important;
  color: unset !important;
}
.scroll-active-menu {
  color: $stone-500;
  border-bottom: solid 2px $stone-500;
}
.el-menu--horizontal {
  border-bottom: none;
}
//el-sub-menu
.el-popper.is-light {
  border-radius: 10px;
  border: 1px solid $stone-300;
  overflow: hidden;
  filter: $drop-shadow-lg;
}
// el-sub-menu hover
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: white;
  background-color: $stone-950;
}
// wl-sub-menu active
.el-menu--horizontal .el-menu .el-menu-item.is-active,
.el-menu--horizontal .el-menu .el-sub-menu.is-active > .el-sub-menu__title {
  color: $stone-950;
  background-color: $stone-300;
}

// customer
.menuToggle {
  z-index: 1;
  span {
    display: block;
    width: 33px;
    height: 1.5px;
    margin-bottom: 8px;
    position: relative;
    background: rgb(114, 118, 123);
  }
}
</style>
