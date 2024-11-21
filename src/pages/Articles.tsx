import ArticleCard from '../components/ArticleCard';
import Navbar from '../components/Navbar';
import data from '../../data.json'
const Articles = () => {

    return (
        <>
            <Navbar />
            <div className='p-12'>
                <h1 className='text-lg text-black mb-8'>Latest Tech Articles</h1>
                <div className='flex w-full flex-wrap gap-6'>
                    {data && data.map((article, index) => {return (
                    <ArticleCard article={article} id={index}/>
                    )})
                    }
                </div>
            </div>
        </>
    )
}

export default Articles