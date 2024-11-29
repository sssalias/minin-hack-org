import { OrganizationsApi } from 'src/services-api'
import { apiConfig } from 'src/services-api/client'

export const orgClient = new OrganizationsApi(apiConfig)