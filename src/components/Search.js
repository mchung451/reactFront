import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span>Search Dog Name </span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Name"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;