import { orgClient } from 'src/entities/org/api/config'
import { getOrg } from 'src/entities/org/api/getOrg'
import { OrganizationCreate } from 'src/services-api'

export const createOrg = async (dto: OrganizationCreate, token: string | undefined) => {
    if (token) {
        await orgClient.addNewOrganization(dto, {headers: {
            Authorization: `Bearer ${token}`
        }})
        await getOrg(token)
    }
}