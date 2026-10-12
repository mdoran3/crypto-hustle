import { useEffect, useState } from "react"
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY

function CryptoNews() {
    const [newsList, setNewsList] = useState(null)


    useEffect(() => {
        const getNewsArticles = async () => {
            const response = await fetch(
                `https://finnhub.io/api/v1/news?category=crypto&token=${NEWS_API_KEY}`
            )
            const json = await response.json()
            if (Array.isArray(json)) {
                setNewsList(json)
            } else {
                console.error(json) // a wrong key returns an error, not a list
            }
        }
        getNewsArticles().catch(console.error)
    }, [])


    return (
        <div>
        <h3>Crypto News</h3>
            <ul className="side-list">
                {newsList && newsList.map((article) => 
                <li className="news-article" key={article.id}><a href={article.url}>{article.headline}</a></li>
                )}
            </ul>
        </div>
    )
}

export default CryptoNews