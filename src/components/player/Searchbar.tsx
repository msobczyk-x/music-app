import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
const Searchbar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event:any) => {
    event.preventDefault();
    setIsLoading(true);

    // Fetch search results using the query state
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=track,artist,album,playlist`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }})
      .then((response:any) => response.json())
      .then((data:any) => {
        sessionStorage.setItem('searchResults', JSON.stringify(data));
        sessionStorage.setItem('query', query);
        navigate(`search/${query}`);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2 md:w-96 z-20 text-sm text-zinc-900 bg-zinc-50 rounded-lg border-l-zinc-50 border-l-2 border border-zinc-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-zinc-700 dark:border-l-zinc-700  dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:border-yellow-500"
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-yellow-700 rounded-r-lg border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>

    </form>
  );
};

export default Searchbar;