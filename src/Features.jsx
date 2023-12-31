import classNames from 'classnames';
import featuresBgUrl from './assets/features-bg.png';
import videoAutocomplete from './assets/web_autocomplete.mp4';
import videoDraft from './assets/web_draft.mp4';
import videoReview from './assets/review.mp4';
import videoAnalyse from './assets/analyse.mp4';
import { Disclosure } from '@headlessui/react'

const Features = () => {
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
      'lg:px-8',
      'pb-24',
      'text-center',
      'lg:pt-32',
      'bg-right-bottom',
      'bg-fixed',
    )} style={{backgroundImage: `url(${featuresBgUrl})`}}>
      <h1 className='mx-auto mt-12 mb-12 max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-5xl'>
        Why use Lizzy?
      </h1>
      
      <div>
        <Disclosure as='div' defaultOpen className='mb-4 last:mb-0 rounded-2xl bg-white bg-opacity-75 overflow-hidden'>
          {() => (
            <>
              <Disclosure.Button className='w-full justify-between px-4 py-5 text-center text-xl text-lizzy-black font-semibold'>
                <span>Autocomplete</span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className='text-center text-sm text-lizzy-black pb-4 px-8'>
                  Get smart suggestions for your contract language while drafting. Next word, phrase, sentence and paragraph.
                </p>

                <video autoPlay muted loop>
                  <source src={videoAutocomplete} type='video/mp4'></source>
                </video>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mb-4 last:mb-0 rounded-2xl bg-white bg-opacity-75 overflow-hidden'>
          {() => (
            <>
              <Disclosure.Button className='w-full justify-between px-4 py-5 text-center text-xl text-lizzy-black font-semibold'>
                <span>Draft</span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className='text-center text-sm text-lizzy-black pb-4 px-8'>
                  Ask Lizzy to suggest language for any contract clause or definition. Keep language you like as template or use your existing templates.
                </p>

                <video autoPlay muted loop>
                  <source src={videoDraft} type='video/mp4'></source>
                </video>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mb-4 last:mb-0 rounded-2xl bg-white bg-opacity-75 overflow-hidden'>
          {() => (
            <>
              <Disclosure.Button className='w-full justify-between px-4 py-5 text-center text-xl text-lizzy-black font-semibold'>
                <span>Review</span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className='text-center text-sm text-lizzy-black pb-4 px-8'>
                  Get notified on non-standard or missing language. Get suggestions to resolve language failures and policy conflicts.
                </p>

                <video autoPlay muted loop>
                  <source src={videoReview} type='video/mp4'></source>
                </video>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mb-4 last:mb-0 rounded-2xl bg-white bg-opacity-75 overflow-hidden'>
          {() => (
            <>
              <Disclosure.Button className='w-full justify-between px-4 py-5 text-center text-xl text-lizzy-black font-semibold'>
                <span>Analyse</span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className='text-center text-sm text-lizzy-black pb-4 px-8'>
                  Simply ask Lizzy anything on the contract and related documents and get accurate and clear answers, while reviewing the contract
                </p>

                <video autoPlay muted loop>
                  <source src={videoAnalyse} type='video/mp4'></source>
                </video>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default Features;