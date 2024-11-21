import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import data from '../../data.json'
const ArticlePage = () => {
    const { id } = useParams()
    const article: Article = data[Number(id)]

    return (
        <>
            <Navbar />
            <div className='h-[100vh] p-12 mb-7'>
                <h1 className='text-2xl text-black font-extrabold'>{article.title}</h1>
                <img src={article.urlToImage!} alt="article image" className='w-[800px] my-9 rounded-md' />
                <p className='text-xl'>{article.description}</p>
                <p className='text-xl'>{article.content}</p>
            </div>
        </>
    )
}

export default ArticlePage