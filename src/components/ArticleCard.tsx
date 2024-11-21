import { useNavigate } from "react-router-dom"
const ArticleCard = ({ article, id }: { article: Article, id: number }) => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-between gap-4 w-[400px] rounded-lg bg-slate-50 shadow-md p-5' onClick={() => navigate(`/articles/${id}`)}>
            <div>
                <h1 className="font-bold text-black">{article.title}</h1>
                <img src={article.urlToImage} className="w-72 rounded-md" />
            </div>
            <div>
                <p className="text-black">{article.description}</p>
            </div>
        </div>
    )
}

export default ArticleCard