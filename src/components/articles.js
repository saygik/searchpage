import React from 'react'

const Articles = ({articles}) => {
    return (
        <div className="Table">
            <div className="TableBody">
                {articles && articles.map((article, index) => (
                    <div className="TableRow" key={index}>
                    <div className="TableImgCell">
                        <img src={article.urlToImage} alt=""  width="150"/>
                        </div>
                    <div className="TableCell">
                        {article.author}
                        <div className="articleTitle">{article.title}</div>
                    </div>

                    </div>

                ))}
            </div>
        </div>
    )
}
export default Articles
