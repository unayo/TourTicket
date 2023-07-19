import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { storeGlobal } from '@/stores/global.js'
import { SUPPORT_LOCALES, i18n, loadLocaleMessages, setI18nLanguage, defaultLocale } from '../i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:locale',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  const store_Global = storeGlobal()

  const paramsLocale = to.params.locale
  store_Global.setLang(paramsLocale) // menu
  console.log('paramsLocale',store_Global,paramsLocale)
  // use locale if paramsLocale is not in SUPPORT_LOCALES
  if (!SUPPORT_LOCALES.includes(paramsLocale)) {
    store_Global.setLang(defaultLocale) // menu
    return next(`/${defaultLocale}`)
  }
  store_Global.setLang(paramsLocale) // menu
  // load locale messages
  if (!i18n.global.availableLocales.includes(paramsLocale)) {
    await loadLocaleMessages(i18n, paramsLocale)
  }

  // set i18n language
  setI18nLanguage(i18n, paramsLocale)

  return next()
})
export default router
