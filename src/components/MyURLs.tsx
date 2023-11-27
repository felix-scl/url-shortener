import useShortURL from '../hooks/useShortURL';
import ShortURLItem from './ShortURLItem';

export default function MyURLs({ focusInput }: { focusInput: () => void }) {
  const { shortURLs, loading } = useShortURL();

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
            <ShortURLItem
              key={shortURL.shortId}
              shortURL={shortURL}
              shortDate={shortDate}
            />
          );
        })}
      </ul>
    </div>
  );
}
