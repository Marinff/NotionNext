import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import CategoryGroup from './CategoryGroup'
import Logo from './Logo'
import { MenuListTop } from './MenuListTop'
import SearchButton from './SearchButton'
import SearchDrawer from './SearchDrawer'
import SideBar from './SideBar'
import SideBarDrawer from '@/components/SideBarDrawer'
import TagGroups from './TagGroups'

let windowTop = 0

const Header = props => {
  const { tags, currentTag, categories, currentCategory } = props
  const { locale } = useGlobal()
  const searchDrawer = useRef()
  const { isDarkMode } = useGlobal()
  const throttleMs = 200
  const showSearchButton = siteConfig('MATERY_MENU_SEARCH', false, CONFIG)

  const router = useRouter()
  
  // 初始化导航栏状态
  useEffect(() => {
    const nav = document.querySelector('#sticky-nav')
    nav?.classList.add('bg-none', 'text-white')
    nav?.classList.remove('bg-white', 'text-black', 'dark')
  }, [])

  const scrollTrigger = useCallback(
    throttle(() => {
      requestAnimationFrame(() => {
        const scrollS = window.scrollY
        const nav = document.querySelector('#sticky-nav')
        const header = document.querySelector('#header')

        // 核心修改点：严格判断透明条件
        const shouldTransparent = scrollS < 5

        // 清除所有可能冲突的样式类
        nav?.classList.remove(
          'bg-none', 
          'bg-white',
          'text-white',
          'text-black',
          'dark:bg-hexo-black-gray'
        )

        // 设置新样式
        if (shouldTransparent) {
          nav?.classList.add('bg-none', 'text-white')
        } else {
          nav?.classList.add('bg-white', 'text-black')
          nav?.classList.remove('dark') // 强制移除暗黑模式
        }

        // 保留原有的显隐逻辑
        const showNav = scrollS <= windowTop || scrollS < 5
        if (!showNav) {
          nav?.classList.replace('top-0', '-top-20')
          windowTop = scrollS
        } else {
          nav?.classList.replace('-top-20', 'top-0')
          windowTop = scrollS
        }
      })
    }, throttleMs)
  )

  // 监听滚动
  useEffect(() => {
    scrollTrigger()
    window.addEventListener('scroll', scrollTrigger)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  }, [router])

  const [isOpen, changeShow] = useState(false)
  const toggleMenuOpen = () => changeShow(!isOpen)
  const toggleMenuClose = () => changeShow(false)

  // 搜索抽屉内容（保持不变）
  const searchDrawerSlot = {/* 保持原有内容 */}

  return (
    <div id="top-nav">
      {/* 其他组件保持原有结构 */}
      <div
        id="sticky-nav"
        className="flex justify-center top-0 shadow-none fixed bg-none text-gray-200 w-full z-30 transition-all duration-300" // 添加过渡动画
      >
        {/* 保持原有结构 */}
      </div>

      {/* 侧边栏保持原有结构 */}
    </div>
  )
}

export default Header
