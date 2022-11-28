import { useState } from "react"

export default function SearchBar (
    { onSearch, placeholder = 'Search' }
    : { onSearch: (text: string) => void, placeholder?: string }) {

    const [searchText, setSearchText] = useState('');

    const handleOnKeyDown = (key: string) => {
        if (key === 'Enter') {
            onSearch(searchText);
        }
    }

    return (
        <div className="pt-2 relative mx-auto text-gray-600">
            <input className="border-2 border-gray-300 bg-white h-10 w-3/5 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    name="search" placeholder={placeholder} value={searchText}
                    onChange={ (e) => setSearchText(e.target.value) }
                    onKeyDown={ (e) => handleOnKeyDown(e.key) }/>
        </div>
    )
}