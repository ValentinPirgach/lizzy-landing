import { ReactComponent as LogoText } from './assets/logo-colored.svg';
import { Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames';

const Heading = () => {
  return (
    <header className='p-4 mx-2 my-7 rounded-full shadow-[0_-2px_30px_0_rgba(0,0,0,0.15)]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='relative z-50 flex justify-between'>
          <div className='flex items-center md:gap-x-12'>
            <a aria-label='Home' href='/#'>
              <LogoText />
            </a>
          </div>
          <div className='flex items-center gap-x-5 md:gap-x-8'>
            <a className={classNames([
              'group',
              'md:hidden',
              'inline-flex',
              'items-center',
              'justify-center',
              'rounded-full',
              'py-2',
              'px-4',
              'text-sm',
              'font-semibold',
              'focus:outline-none',
              'focus-visible:outline-2',
              'focus-visible:outline-offset-2',
              'bg-lizzy-blue',
              'text-white',
              'hover:text-slate-100',
              'hover:bg-lizzy-blue-65',
              'active:bg-lizzy-blue-65',
              'active:text-blue-100',
              'focus-visible:outline-blue-600'
            ])}
              href='/register'>
              <span>Join waitlist</span>
            </a>

            <div className="-mr-1 md:hidden">
              <Popover>
                {({ open, close }) => (
                  <>
                    <Popover.Button className={classNames([
                      'relative',
                      'z-10',
                      'flex',
                      'h-8',
                      'w-8',
                      'items-center',
                      'justify-center',
                      '[&:not(:focus-visible)]:focus:outline-none',
                    ])}>
                        {open ? (
                          <XMarkIcon />
                        ) : (
                          <Bars3Icon />
                        )}
                    </Popover.Button>
                    <Popover.Panel>
                      <div className='fixed inset-0 bg-slate-300/50 opacity-100' onClick={close}/>
                      <div className={classNames([
                        'absolute',
                        'inset-x-0',
                        'top-full',
                        'mt-5',
                        'flex',
                        'origin-top',
                        'flex-col',
                        'rounded-2xl',
                        'bg-white',
                        'p-4',
                        'text-lg',
                        'tracking-tight',
                        'text-slate-900',
                        'shadow-xl',
                        'ring-1',
                        'ring-slate-900/5',
                        'opacity-100',
                        'scale-100',
                      ])}>
                        <a href="/analytics" className='block w-full p-2'>Home</a>
                        <a href="/engagement" className='block w-full p-2'>Pricing</a>
                        <a href="/security" className='block w-full p-2'>FAQ</a>
                        <hr className='m-2 border-slate-300/40' />
                        <a href="/integrations" className='block w-full p-2'>Sign in</a>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Heading;