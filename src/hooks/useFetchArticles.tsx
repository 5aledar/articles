import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFetchArticles = () => {
    const { data } = useQuery({
        queryKey: ['articles'],
        queryFn: fetchArticles,
    });


    return {
        articles: data?.articles || []
    };
};

const fetchArticles = async () => {
    try {

        const { data } = await axios.get(
            `https://newsapi.org/v2/everything?q=tech&language=en&apikey=86189bef718d4e4c950405245d45e8ec`
        );
        return data;
    } catch (error) {
        console.log(error);

    }
};
