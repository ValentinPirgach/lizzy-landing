import classNames from 'classnames';
import { ReactComponent as RadialDots } from './assets/radial-dots.svg';
import { ReactComponent as Artboard2 } from './assets/artboard-2.svg';
import purposeSmUrl from './assets/purpose-sm.png';

const Purpose = () => {
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
      'bg-fixed',
      ''
    )}>
      <div className='absolute left-0 top-0 w-full h-full bg-gradient-to-r from-[#F5FBFF] to-[#DFD2F4] z-10'></div>
      <RadialDots className='absolute bottom-0 right-0 z-10'/>

      <div className='relative z-20'>
        <h1 className='mx-auto mt-8 mb-6 max-w-xl font-display text-5xl font-normal tracking-tight text-lizzy-black sm:text-5xl'>
          Built for Lawyers - Useful for any contract professional
        </h1>

        <p className="mx-auto mt-6 text-lg tracking-tight text-lizzy-black">
          Whether you are in sales, purchasing or
          finance — if you review and redline contracts, Lizzy is your perfect assistant*
        </p>

        <div className='relative'>
          <Artboard2 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-16' />
          <img src={purposeSmUrl} className='mx-auto w-[227px] rounded-2xl mt-11 mb-10' />
        </div>

        <p className='text-lizzy-black-65 text-sm text-center pb-10'>
          *Lizzy is an AI contact assistant. It does not provide legal advice and cannot replace a review by a professional lawyer
        </p>
      </div>
    </div>
  );
}

export default Purpose;