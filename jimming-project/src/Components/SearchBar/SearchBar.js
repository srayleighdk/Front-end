import { useState } from "react";


function SearchBar({ onSearch }) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    }

    const searcha = () => {
        onSearch(searchTerm);
    }

    return(
        <div className="SearchBar flex flex-col items-center pt-24 mb-24">
            <input onChange={handleSearchTerm} className='w-72 px-0 py-3 border-2 rounded-lg mb-9 text-center text-gray-900 text-lg focus:outline-none'  placeholder='Enter A Song, Album, or Artist' />
            <button onClick={searcha} className="SearchButton cursor-pointer w-44 bg-indigo-900 rounded-3xl px-0 py-3 text-center text-lg  text-white font-medium">SEARCH</button>
        </div>
    );
}

export default SearchBar;