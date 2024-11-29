import { newsClient } from 'src/entities/news/api/config'
import { useNewsStore } from 'src/store/news-store/news-store'

export const getNews = async () => {
    const {data} =await  newsClient.getAllNews()
    useNewsStore.getState().setData(data)
}