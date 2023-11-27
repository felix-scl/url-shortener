import {
  ArrowTopRightOnSquareIcon,
  PencilIcon,
  ClipboardIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

interface ShortURL {
  originalUrl: string;
  shortId: string;
  clicks: number;
  createdAt: string;
}

interface ShortURLItemProps {
  shortURL: ShortURL;
  shortDate: string;
}

export default function ShortURLItem({
  shortURL,
  shortDate,
}: ShortURLItemProps) {
  return (
    <li className='border border-slate-200 rounded-lg p-4 space-y-4'>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg'>urlsh.netlify.app/{shortURL.shortId}</h3>
        </div>
        <p className='text-green-600 text-base cursor-default'>
          {shortURL.originalUrl}
        </p>
      </div>

      <div className='space-y-2 gap-2 flex-wrap lg:space-y-0 lg:flex lg:justify-between lg:items-center'>
        <div className='text-slate-600 text-sm space-x-2 md:text-base'>
          <span>{shortURL.clicks} clicks</span>
          <span>|</span>
          <span>{shortDate}</span>
        </div>
        <div className='flex gap-2 flex-wrap lg:flex-nowrap text-sm lg:text-base'>
          <a
            href={`http://localhost:8800/${shortURL.shortId}`}
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
  );
}
