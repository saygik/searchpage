import React from "react"
import Article from "./article"

const Articles = ({articles}) => {

    return (
        <div className="Table">
            <div className="TableBody">
                {articles && articles.map((article, index) => <Article  key={index} article={article}/>)}
            </div>
        </div>
    )
}
export default Articles

