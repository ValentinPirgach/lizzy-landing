import classNames from 'classnames';
import featuresBgUrl from './assets/features-bg.svg';
import featureAutocompleteSm from './assets/feature-autocomplete-sm.svg';
import featureReviewSm from './assets/feature-review-sm.svg';
import featureDraftSm from './assets/feature-draft-sm.svg';
import featureAnalyseSm from './assets/feature-analyse-sm.svg';
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
      'pt-4',
      'text-center',
      'lg:pt-32',
      'bg-right-bottom',
      'bg-fixed',
    )} style={{backgroundImage: `url(${featuresBgUrl})`}}>
      <h1 className='mx-auto mt-12 mb-12 max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-5xl'>
        Why use Lizzy?
      </h1>
      
      <div>
        <Disclosure as='div' defaultOpen className='mb-4 last:mb-0 rounded-2xl bg-white bg-opacity-75 '>
          {() => (
            <>
              <Disclosure.Button className='w-full justify-between px-4 py-5 text-center text-xl text-lizzy-black font-semibold'>
                <span>Autocomplete</span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className='text-center text-sm text-lizzy-black pb-4 px-8'>
                  Get smart suggestions for your contract language while drafting. Next word, phrase, sentence and paragraph.
                </p>

                <img src={featureAutocompleteSm} className='w-full' alt='Autocomplete' />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mb-4 last:mb-0 rounded-2xl bg-white bg-opacity-75 '>
          {() => (
            <>
              <Disclosure.Button className='w-full justify-between px-4 py-5 text-center text-xl text-lizzy-black font-semibold'>
                <span>Draft</span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className='text-center text-sm text-lizzy-black pb-4 px-8'>
                  Ask Lizzy to suggest language for any contract clause or definition. Keep language you like as template or use your existing templates.
                </p>

                <img src={featureDraftSm} className='w-full' alt='Autocomplete' />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mb-4 last:mb-0 rounded-2xl bg-white bg-opacity-75 '>
          {() => (
            <>
              <Disclosure.Button className='w-full justify-between px-4 py-5 text-center text-xl text-lizzy-black font-semibold'>
                <span>Review</span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className='text-center text-sm text-lizzy-black pb-4 px-8'>
                  Get notified on non-standard or missing language. Get suggestions to resolve language failures and policy conflicts.
                </p>

                <img src={featureReviewSm} className='w-full' alt='Autocomplete' />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mb-4 last:mb-0 rounded-2xl bg-white bg-opacity-75 '>
          {() => (
            <>
              <Disclosure.Button className='w-full justify-between px-4 py-5 text-center text-xl text-lizzy-black font-semibold'>
                <span>Analyse</span>
              </Disclosure.Button>
              <Disclosure.Panel>
                <p className='text-center text-sm text-lizzy-black pb-4 px-8'>
                  Simply ask Lizzy anything on the contract and related documents and get accurate and clear answers, while reviewing the contract
                </p>

                <img src={featureAnalyseSm} className='w-full' alt='Autocomplete' />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default Features;