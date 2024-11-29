import { Configuration } from 'src/services-api/configuration'

export const apiConfig = new Configuration({
    basePath: `${import.meta.env.VITE_API_HOST}`,
})