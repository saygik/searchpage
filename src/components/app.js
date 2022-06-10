import React, {useState, useEffect} from "react"
import axios from 'axios'
import Header from './header'
import Footer from './footer'
import Articles from './articles'
import NotFound from './notFound'
import Loader from './loader'

import "../styles/style.scss"

const App = () => {
    const apikey = process.env.API_KEY
    const [articles, SetArticles] = useState([])
    const [firstLoad, setFirstLoad] = useState(true)
    const [loading, setLoading] = useState(false)
    const [searchString, SetSearchString] = useState('')

    const searchArticles = (searchString) => {
        SetSearchString(searchString)
        searchString==='' && setFirstLoad(true)
    }

    useEffect(() => {
        async function findArticles() {
            setLoading(true)
            firstLoad && setFirstLoad(false)
            const result = await axios(`https://newsapi.org/v2/everything?q=${searchString}&apiKey=${apikey}`)
            if (result && result.status === 200) {
                SetArticles(result.data.articles)
            } else SetArticles([])
            setLoading(false)
        }

        searchString ? findArticles() : SetArticles([])
    }, [searchString])

    const BodyContent = articles && articles.length > 0 ? <Articles articles={articles}/> : (!firstLoad && <NotFound/>)

    return (
        <>
            <div className="content">
                <Header searchArticles={searchArticles}/>
                {loading ? <Loader/> : BodyContent}
            </div>
            <Footer/>
        </>
    )
}
export default App
