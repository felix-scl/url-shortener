export default function ShortenURLForm() {
  return (
    <form className='bg-white rounded-lg p-4 text-xl space-y-6 md:w-4/6 lg:w-3/6 mx-auto'>
      <div className='space-y-2'>
        <label htmlFor='url'>Shorten a URL</label>
        <input
          type='text'
          name='url'
          className='w-full rounded-lg p-4 border border-slate-200 text-base md:text-lg'
          placeholder='Enter your link here'
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
