// import classNames from 'classnames';
import { ReactComponent as RadialDots } from './assets/radial-dots.svg';
import { ReactComponent as LogoFooterSm } from './assets/logo-footer-sm.svg';
import { ReactComponent as LinkedinIcon } from './assets/linkedin.svg';
import { ReactComponent as TwitterIcon } from './assets/twitter.svg';
import { ReactComponent as YoutubeIcon } from './assets/youtube.svg';

const Footer = () => {
  return (
    <footer className='relative mt-36 px-5 py-6 m-6 bg-lizzy-black rounded-2xl overflow-hidden'>
      <RadialDots className='absolute -right-10 -top-10 z-10'/>

      <div className='relative z-20'>
        <LogoFooterSm className='mb-12' />

        <div className='flex flex-wrap'>
          <div className='flex flex-wrap'>
            <div className='p-4 mb-12 w-1/2'>
              <h3 className='block text-white text-lg font-semibold mb-5'>Company</h3>
              <a className='block text-lizzy-black-65 text-base mb-5' href='/hiring'>We&apos;re hiring</a>
              <a className='block text-lizzy-black-65 text-base mb-5' href='/contacts'>Contact us</a>
              <a className='block text-lizzy-black-65 text-base mb-0' href='/partner'>Partner Program</a>
            </div>

            <div className='p-4 mb-12 w-1/2'>
              <h3 className='block text-white text-lg font-semibold mb-5'>Legal</h3>
              <a className='block text-lizzy-black-65 text-base mb-5' href='/hiring'>Compliance</a>
              <a className='block text-lizzy-black-65 text-base mb-5' href='/terms'>Terms of Use</a>
              <a className='block text-lizzy-black-65 text-base mb-0' href='/privacy'>Privacy Policy</a>
            </div>

            <div className='p-4 mb-12 w-1/2'>
              <h3 className='block text-white text-lg font-semibold mb-5'>Resources</h3>
              <a className='block text-lizzy-black-65 text-base mb-5' href='/press'>Press kit</a>
              <a className='block text-lizzy-black-65 text-base mb-5' href='/blog'>Blog</a>
              <a className='block text-lizzy-black-65 text-base mb-0' href='/sitemap'>Sitemap</a>
            </div>

            <div className='p-4 mb-12 w-1/2'>
              <h3 className='block text-white text-lg font-semibold mb-5'>Product</h3>
              <a className='block text-lizzy-black-65 text-base mb-5' href='/pricing'>Pricing</a>
              <a className='block text-lizzy-black-65 text-base mb-0' href='/faq'>FAQ</a>
            </div>
          </div>

          <div className='w-full'>
            <div className='p-4 mb-12 w-1/2'>
              <h3 className='block text-white text-lg font-semibold mb-5'>Follow us</h3>
              <a className='block text-lizzy-black-65 text-base mb-5' href='/linkedin'>
                <span className='flex items-center'>
                  <LinkedinIcon className='mr-2' /> LinkedIn
                </span>
              </a>
              <a className='block text-lizzy-black-65 text-base mb-5' href='/twitter'>
                <span className='flex items-center'>
                  <TwitterIcon className='mr-2' />Twitter
                </span>
              </a>
              <a className='block text-lizzy-black-65 text-base mb-0' href='/faq'>
                <span className='flex items-center'>
                  <YoutubeIcon className='mr-2' />Youtube
                </span>
              </a>
            </div>
          </div>
        </div>

        <hr className='border-lizzy-black-65' />

        <p className='text-center pt-5 text-lizzy-black-65'>©Lizzy AI 2023. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;