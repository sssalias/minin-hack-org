import { NewsApi } from 'src/services-api'
import { apiConfig } from 'src/services-api/client'

export const newsClient = new NewsApi(apiConfig)