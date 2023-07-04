import classNames from 'classnames';
import securitySmUrl from './assets/security-sm.png';

const Security = () => {
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
      'from-[#C177E8]',
      'to-[#caa0e0]'
    )} >
        <h1 className='mx-auto mt-16 mb-8 max-w-xl font-display text-5xl font-normal tracking-tight text-white sm:text-5xl'>
          Private & Secure
        </h1>

        <p className="mx-auto mt-6 text-lg tracking-tight text-white">
          All Lizzy versions comply with strict privacy and security standards. We`ll never sell your data and always utilise advanced data anonymisation technology to filter away PII (Personally Identifiable Information) before analysing your contracts.
        </p>

        <img src={securitySmUrl} className='mx-auto w-60 mt-12' />
    </div>
  );
}

export default Security;