import classNames from 'classnames';
import { ReactComponent as RadialDots } from './assets/radial-dots.svg';
import { ReactComponent as PersonalizationSm } from './assets/personalization-sm.svg';

const Personalise = () => {
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
        <PersonalizationSm className='mx-auto mt-5' />

        <h1 className='mx-auto -mt-12 mb-6 max-w-xl font-display text-5xl font-normal tracking-tight text-lizzy-black sm:text-5xl'>
          Personalized to your data and style
        </h1>

        <p className="mx-auto mt-6 mb-6 text-lg tracking-tight text-lizzy-black">
          Advanced Lizzy versions support seamless personalisation. Simply define organisational and personal templates and policies. Train Lizzy on your own data, to access all relevant knowledge and tune to your personal legal style.
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
    </div>
  );
}

export default Personalise;