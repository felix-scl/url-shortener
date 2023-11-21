import {
  ArrowTopRightOnSquareIcon,
  PencilIcon,
  ClipboardIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

export default function MyURLs() {
  // if no short urls then
  // return <div className='bg-white rounded-lg p-4 text-xl space-y-2 md:w-4/6 lg:w-3/6 mx-auto'> <p> No short urls yet </p>
  //</div>

  return (
    <div className='bg-white rounded-lg p-4 text-xl space-y-2 md:w-4/6 lg:w-3/6 mx-auto'>
      <h2 className='text-2xl'>My URLs</h2>
      <ul>
        <li className='border border-slate-200 rounded-lg p-4 space-y-4'>
          <div>
            <div className='flex justify-between items-center'>
              <h3 className='text-lg'>urlsh.netlify.app/55dj4</h3>
            </div>
            <p className='text-green-600 text-base cursor-default'>
              https://youtube.com/watch?v=8134jsad
            </p>
          </div>

          <div className='space-y-2 lg:space-y-0 lg:flex lg:justify-between lg:items-center'>
            <div className='text-slate-600 text-sm space-x-2 md:text-base'>
              <span>0 clicks</span>
              <span>|</span>
              <span>recently created</span>
            </div>
            <div className='flex gap-2 flex-wrap lg:flex-nowrap text-sm lg:text-base'>
              <a
                href='#'
                className='bg-green-500 text-white hocus:bg-green-400 rounded-md py-1 px-2 flex items-center transition-colors duration-100 md:tooltip'
                data-tip='Visit URL'
                aria-label='Visit URL'
              >
                <span>Visit&nbsp;</span>
                <ArrowTopRightOnSquareIcon className='w-4 h-4 lg:w-5 lg:h-5' />
              </a>
              <button
                className='bg-orange-500 text-white hocus:bg-orange-400 rounded-md py-1 px-2 flex items-center transition-colors duration-100 md:tooltip'
                data-tip='Edit shorten URL'
                aria-label='Edit shorten URL'
              >
                <span>Edit&nbsp;</span>
                <PencilIcon className='w-4 h-4 lg:w-5 lg:h-5' />
              </button>
              <button
                className='bg-sky-500 text-white hocus:bg-sky-400 rounded-md py-1 px-2 flex items-center transition-colors duration-100 md:tooltip'
                data-tip='Copy shorten URL to clipboard'
                aria-label='Copy shorten URL to clipboard'
              >
                <span>Copy&nbsp;</span>
                <ClipboardIcon className='w-4 h-4 lg:w-5 lg:h-5' />
              </button>
              <button
                className='bg-red-500 text-white hocus:bg-red-400 rounded-md py-1 px-2 flex items-center transition-colors duration-100 md:tooltip'
                data-tip='Delete shorten URL'
                aria-label='Delete shorten URL'
              >
                <span>Delete&nbsp;</span>
                <TrashIcon className='w-4 h-4 lg:w-5 lg:h-5' />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
