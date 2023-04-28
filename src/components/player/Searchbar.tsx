import React from 'react'

const Searchbar = () => {
  return (
    <form>
    <div className="flex">
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2 md:w-96 z-20 text-sm text-zinc-900 bg-zinc-50 rounded-lg border-l-zinc-50 border-l-2 border border-zinc-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-zinc-700 dark:border-l-zinc-700  dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:border-yellow-500" placeholder="Search " required/>
            <button type="submit" className="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-yellow-700 rounded-r-lg border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
  )
}

export default Searchbar