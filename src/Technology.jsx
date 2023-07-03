import classNames from 'classnames';
import { ReactComponent as TechnologySquareSm } from './assets/technology-square-sm.svg';
import technologyBgSmUrl from './assets/technology-bg-sm.png';

const Technology = () => {
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
      'bg-[#C796E3]',
      'bg-no-repeat',
      'bg-local'
    )} style={{backgroundImage: `url(${technologyBgSmUrl})`}} >
        <h1 className='mx-auto mt-16 mb-8 max-w-xl font-display text-5xl font-normal tracking-tight text-white sm:text-5xl'>
          Our Technology
        </h1>

        <p className="mx-auto mt-6 text-lg tracking-tight text-white">
          We use multiple LLM (large language models) models, including GPT-4, to provide the best AI for your contracts. Our multi-model architecture enables seamless orchestration of models, serving the best AI technology for each of the legal tasks needed to draft, review and analyse you contract. Our models are trained on millions of contracts, legislation, case-law and textbooks, creating unparalleled legal AI.
        </p>

        <TechnologySquareSm className='mx-auto mt-12' />
    </div>
  );
}

export default Technology;