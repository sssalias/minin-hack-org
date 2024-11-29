import { newsClient } from 'src/entities/news/api/config'
import { getNews } from 'src/entities/news/api/getNews'
import { CreateNews } from 'src/services-api'

export const createNews = async (dto: CreateNews) => {
    newsClient.createNews(dto)
    getNews()
}