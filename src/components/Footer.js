import React from 'react'

export default function Footer() {
  return (
    <footer className='container px-6 flex flex-col mt-6 mb-8 border-t-2 border-slate-100 xl:snap-end'>
      <p className='mt-6'>Designed and developed by <a href='https://github.com/notgirish' className='font-medium' target="_blank" rel="noreferrer">@notgirish</a>.</p>
      <small className='text-xs'>Google Play and the Google Play logo are trademarks of Google LLC.</small>
      <div className="flex w-full justify-between text-customgray my-2 mb-6">
        <a href='/privacy'>Privacy policy</a>
        <p>© Remify 2022</p>
      </div>
    </footer>
  )
}
