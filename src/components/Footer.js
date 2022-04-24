import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='container px-6 flex flex-col mt-6 mb-8 border-t-2 border-slate-100'>
      {/* <small>Google Play and the Google Play logo are trademarks of Google LLC.</small> */}
      <p className='mt-6'>Designed and developed by <a href='https://github.com/notgirish' className='font-medium' target="_blank" rel="noreferrer">@notgirish</a>.</p>
      <div className="flex w-full justify-between text-customgray my-2 mb-6">
        <Link to='/privacy'>Privacy policy</Link>
        <p>© Remify 2022</p>
      </div>
    </footer>
  )
}
