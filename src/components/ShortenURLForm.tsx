import { RefObject, type FormEvent } from 'react';
import useShortURL from '../hooks/useShortURL';

export default function ShortenURLForm({
  inputRef,
}: {
  inputRef: RefObject<HTMLInputElement>;
}) {
  const { addShortUrl } = useShortURL();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const fullUrl = form.get('full-url') as string;
    addShortUrl(fullUrl);
  };

  return (
    <form
      className='bg-white rounded-lg p-4 text-xl space-y-6 md:w-4/6 lg:w-3/6 mx-auto'
      onSubmit={handleSubmit}
    >
      <div className='space-y-2'>
        <label htmlFor='full-url'>Shorten a URL</label>
        <input
          type='text'
          name='full-url'
          className='w-full rounded-lg p-4 border border-slate-200 text-base md:text-lg'
          placeholder='Enter your link here'
          ref={inputRef}
        />
      </div>
      <button
        type='submit'
        className='bg-green-500 rounded-lg p-2 w-full text-white font-bold tracking-widest hocus:bg-green-600 transition-colors duration-200'
      >
        Shorten
      </button>
    </form>
  );
}
