import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search games"
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default SearchBar;