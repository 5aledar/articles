import React from 'react'
import { useFetchArticles } from '../hooks/useFetchArticles'
import ArticleCard from '../components/ArticleCard';
const Articles = () => {
    const { articles } = useFetchArticles()
    console.log(articles);

    return (
        <div className='p-12'>
            <h1 className='text-lg text-black mb-8'>Latest Tech Articles</h1>
            <div className='flex w-full flex-wrap gap-6'>
                {articles && articles.map((article: Article, index: number) => (
                    <ArticleCard article={article} key={index} id={index} />
                ))
                }
            </div>
        </div>
    )
}

export default Articles