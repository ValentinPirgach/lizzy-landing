import classNames from 'classnames';
import { ReactComponent as RadialDots } from './assets/radial-dots.svg';
import copilotSmUrl from './assets/copilot-sm.png';

const Copilot = () => {
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
      'bg-gradient-to-b',
      'from-[#F4F8FA]',
      'via-[#F5F8FC]',
      'to-[#D1B8EE]',
      'bg-no-repeat',
      'bg-local',
    )}>
      {/* <div className='absolute left-0 top-0 w-full h-full bg-gradient-to-r from-[#F5FBFF] to-[#DFD2F4] z-10'></div> */}
      <RadialDots className='absolute bottom-0 right-0 z-10'/>

      <div className='relative z-20'>
        <h1 className='mx-auto mt-16 mb-8 max-w-xl font-display text-5xl font-normal tracking-tight text-lizzy-black sm:text-5xl'>
          A powerful contract co-pilot, in your natural work environment
        </h1>

        <p className="mx-auto mt-6 mb-6 text-lg tracking-tight text-lizzy-black">
        The Lizzy Organization version supports private cloud and BYOC (bring your own cloud) infrastructure, to put you in full control of your data and compliance strategy
        </p>

        <img src={copilotSmUrl} className='mx-auto w-80' />
      </div>
    </div>
  );
}

export default Copilot;