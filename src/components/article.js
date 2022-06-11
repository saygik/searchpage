import React, {useState} from 'react'

const Article = ({article}) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className="TableRow" style={{display: loaded ? 'block' :'none'}}>
            <div className="TableImgCell">
                <img
                    src={article.urlToImage}
                    alt=""
                    width="150"
                    onLoad={()=>setLoaded(true)}
                    onError={()=>setLoaded(true)}
                />
            </div>
            <div className="TableCell">
                {article.author}
                <div className="articleTitle">{article.title}</div>
            </div>
        </div>
    )
}
export default Article
