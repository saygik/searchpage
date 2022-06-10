import React, {useState} from "react";

const SearchBar = ({searchArticles}) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setValue('')
        searchArticles('')
    }
    const handleChange = (value) => {
        setValue(value)
        searchArticles(value)
    }

    return (
        <form action="/" method="get">
            <input
                type="text"
                id="header-search"
                placeholder="Search articles"
                name="s"
                value={value}
                onChange={e => handleChange(e.target.value)}
            />
            <button type="button"  onClick={handleClick}>Clear</button>
        </form>
)};

export default SearchBar;
