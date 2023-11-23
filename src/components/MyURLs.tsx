import {
  ArrowTopRightOnSquareIcon,
  PencilIcon,
  ClipboardIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

interface ShortURL {
  full: string;
  short: string;
  clicks: number;
  createdAt: string;
}

export default function MyURLs({ focusInput }: { focusInput: () => void }) {
  const [shortURLs, setShortURLs] = useState<ShortURL[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getShortUrls = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8800/');
        const result: ShortURL[] = await response.json();
        setShortURLs(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getShortUrls();
  }, []);

  if (loading) {
    return (
      <div className='bg-white rounded-lg p-4 text-xl space-y-2 md:w-4/6 lg:w-3/6 mx-auto'>
        <h2 className='text-2xl'>My URLs</h2>
        <p className='p-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='animate-spin mx-auto w-16 h-16 text-slate-400'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M12 3a9 9 0 1 0 9 9' />
          </svg>
        </p>
      </div>
    );
  }

  if (shortURLs.length === 0) {
    return (
      <div className='bg-white rounded-lg p-4 text-xl space-y-2 md:w-4/6 lg:w-3/6 mx-auto'>
        <h2 className='text-2xl'>My URLs</h2>
        <div className='border border-slate-200 rounded-lg p-4 cursor-default flex items-center justify-center font-mono'>
          <button
            className='bg-yellow-500 rounded-badge py-1 px-4 text-white font-bold tracking-widest hocus:bg-yellow-600 transition-colors duration-200'
            onClick={focusInput}
          >
            Short a URL
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-lg p-4 text-xl space-y-2 md:w-4/6 lg:w-3/6 mx-auto'>
      <h2 className='text-2xl'>My URLs</h2>
      <ul>
        {shortURLs.map((shortURL) => {
          const shortDate = new Date(shortURL.createdAt).toLocaleDateString(
            undefined,
            { month: 'short', day: 'numeric' }
          );
          return (
            <li
              key={shortURL.short}
              className='border border-slate-200 rounded-lg p-4 space-y-4'
            >
              <div>
                <div className='flex justify-between items-center'>
                  <h3 className='text-lg'>
                    urlsh.netlify.app/{shortURL.short}
                  </h3>
                </div>
                <p className='text-green-600 text-base cursor-default'>
                  {shortURL.full}
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
                    href={`http://localhost:8800/${shortURL.short}`}
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
        })}
      </ul>
    </div>
  );
}
