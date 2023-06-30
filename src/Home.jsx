import classNames from 'classnames';
import { ReactComponent as MeetLizzySm } from './assets/meet-lizzy-sm.svg';
import { ReactComponent as ArtBoardSm } from './assets/artboard-sm.svg';
import { ReactComponent as PaperSm } from './assets/paper-sm.svg';
import homeBgSmUrl from './assets/home-bg-sm.svg';

const Home = () => {
  return (
    <div className='relative mx-auto mt- max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-4 text-center lg:pt-32'>
      <h1 className='mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl'>
        The next generation contract AI
      </h1>
      <p className="w-80 mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Draft and review contracts better and faster with a powerful AI Contract Assistant, right in Microsoft Word
      </p>

      <a className={classNames([
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded-full',
        'py-4',
        'px-8',
        'mt-8',
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

      <div className='relative flex justify-center z-30 mix-blend-multiply mb-4'>
        <div className={classNames(
          'absolute',
          'w-36',
          'top-24',
          'left-0',
          'shadow-3xl',
          'bg-white',
          'rounded-md',
          'p-2',
          'text-xs',
          'text-lizzy-violet',
          '-rotate-12',
          'z-20'
        )}>
          <span className='absolute top-1 left-1 bg-lizzy-violet w-2 h-2' />
          <span className='absolute top-1 -left-2 bg-lizzy-violet w-1 h-1' />
          <span className='absolute -top-3 left-2 bg-lizzy-violet w-1 h-1' />
          Works on Windows and Mac
        </div>
        <div className={classNames(
          'absolute',
          'w-28',
          'top-24',
          'right-0',
          'shadow-3xl',
          'bg-white',
          'rounded-md',
          'p-2',
          'text-xs',
          'text-lizzy-violet',
          'rotate-6',
          'z-20'
        )}>
          <span className='absolute top-1 right-1 bg-lizzy-violet w-2 h-2' />
          <span className='absolute top-1 -right-2 bg-lizzy-violet w-1 h-1' />
          <span className='absolute -top-3 right-2 bg-lizzy-violet w-1 h-1' />
          Free version available
        </div>

        <div className='absolute w-20 h-20 bg-white left-16 top-24 z-10' />
        <PaperSm className='absolute left-16 -top-1 z-10' />
        <ArtBoardSm />
      </div>

      <div className='relative flex justify-center shadow-3xl rounded-2xl -mt-24 z-20 bg-white'>
        <MeetLizzySm />
      </div>

      <div
        className='absolute bottom-0 left-0 w-full z-10 h-64 bg-bottom'
        style={{backgroundImage: `url(${homeBgSmUrl})`}}
      />
    </div>
  );
}

export default Home;