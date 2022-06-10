import React from 'react'
import Search from "./search"

const Header = ({searchArticles}) => {
    return (
        <div className="center">
            <div className="header">
                <Search searchArticles={searchArticles}/>
            </div>
        </div>
    )
}
export default Header
