import React, {useState} from "react";

const SearchBar = ({searchArticles}) => {
    const [value, setValue] = useState("");
    const [timer, setTimer]= useState(null);

    const handleClick = () => {
        handleChange('')
    }
    const handleChange = (value) => {
        setValue(value)
        clearTimeout(timer)
        const newTimer = setTimeout(()=>{
            searchArticles(value)
        },1500)
        setTimer(newTimer)
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
