import classNames from 'classnames';
import cloudBgSmUrl from './assets/cloud-bg-sm.png';

const Cloud = () => {
  return (
    <div className={classNames(
      'relative',
      'min-h-screen',
      'h-max',
      'mx-auto',
      'pt-28',
      'max-w-7xl',
      'px-4',
      'sm:px-6',
      'text-center',
      'bg-right-bottom',
      'bg-gradient-to-br',
      'from-[#E9F6FF]',
      'to-[#EFF9FF]',
      'bg-no-repeat',
      'bg-local',
    )} style={{backgroundImage: `url(${cloudBgSmUrl})`}}>
      <h1 className='mx-auto mt-16 mb-8 max-w-xl font-display text-5xl font-normal tracking-tight text-lizzy-black sm:text-5xl'>
        Private Cloud / BYOC
      </h1>

      <p className="mx-auto mt-6 text-lg tracking-tight text-lizzy-black">
      The Lizzy Organization version supports private cloud and BYOC (bring your own cloud) infrastructure, to put you in full control of your data and compliance strategy
      </p>

      <a className={classNames([
        'inline-block',
        'rounded-full',
        'py-4',
        'px-8',
        'mt-10',
        'text-lg',
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
    </div>
  );
}

export default Cloud;