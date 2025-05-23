import { siteConfig } from '@/lib/config'
import { useState } from 'react'

/**
 * 社交联系方式按钮组 可折叠的组件
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <div className='flex flex-col transform hover:scale-105 duration-200 text-white text-center bg-indigo-700 rounded-full dark:bg-black cursor-pointer py-2.5'>
        <i
          onClick={toggleShow}
          className='transform hover:scale-125 duration-150 fas fa-user py-0.5'
        />
      )}
      {show && (
        <>
          {siteConfig('CONTACT_GITHUB') && (
            <a
              target='_blank'
              rel='noreferrer'
              title={'github'}
              href={siteConfig('CONTACT_GITHUB')}>
              <i className='transform hover:scale-125 duration-150 fab fa-github ' />
            </a>
          )}
          {siteConfig('CONTACT_TWITTER') && (
            <a
              target='_blank'
              rel='noreferrer'
              title={'twitter'}
              href={siteConfig('CONTACT_TWITTER')}>
              <i className='transform hover:scale-125 duration-150 fab fa-twitter ' />
            </a>
          )}
          {siteConfig('CONTACT_TELEGRAM') && (
            <a
              target='_blank'
              rel='noreferrer'
              href={siteConfig('CONTACT_TELEGRAM')}
              title={'telegram'}>
              <i className='transform hover:scale-125 duration-150 fab fa-telegram ' />
            </a>
          )}
          {siteConfig('CONTACT_LINKEDIN') && (
            <a
              target='_blank'
              rel='noreferrer'
              href={siteConfig('CONTACT_LINKEDIN')}
              title={'linkIn'}>
              <i className='transform hover:scale-125 duration-150 fab fa-linkedin ' />
            </a>
          )}
          {siteConfig('CONTACT_WEIBO') && (
            <a
              target='_blank'
              rel='noreferrer'
              title={'weibo'}
              href={siteConfig('CONTACT_WEIBO')}>
              <i className='transform hover:scale-125 duration-150 fab fa-weibo ' />
            </a>
          )}
          {siteConfig('CONTACT_INSTAGRAM') && (
            <a
              target='_blank'
              rel='noreferrer'
              title={'instagram'}
              href={siteConfig('CONTACT_INSTAGRAM')}>
              <i className='transform hover:scale-125 duration-150 fab fa-instagram ' />
            </a>
          )}
          {siteConfig('CONTACT_EMAIL') && (
            <a
              target='_blank'
              rel='noreferrer'
              title={'email'}
              href={`mailto:${siteConfig('CONTACT_EMAIL')}`}>
              <i className='transform hover:scale-125 duration-150 fas fa-envelope ' />
            </a>
          )}
          {JSON.parse(siteConfig('ENABLE_RSS')) && (
            <a
              target='_blank'
              rel='noreferrer'
              title={'RSS'}
              href={'/rss/feed.xml'}>
              <i className='transform hover:scale-125 duration-150 fas fa-rss ' />
            </a>
          )}
          {siteConfig('CONTACT_BILIBILI') && (
            <a
              target='_blank'
              rel='noreferrer'
              title={'bilibili'}
              href={siteConfig('CONTACT_BILIBILI')}>
              <i className='fab fa-bilibili transform hover:scale-125 duration-150' />
            </a>
          )}
          {siteConfig('CONTACT_YOUTUBE') && (
            <a
              target='_blank'
              rel='noreferrer'
              title={'youtube'}
              href={siteConfig('CONTACT_YOUTUBE')}>
              <i className='fab fa-youtube transform hover:scale-125 duration-150' />
            </a>
          )}
          <i
            onClick={toggleShow}
            className='transform hover:scale-125 duration-150 fas fa-close '
          />
        </>
      )}
    </div>
  )
}
export default SocialButton
