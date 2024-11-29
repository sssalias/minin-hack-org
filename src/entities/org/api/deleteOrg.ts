import { orgClient } from 'src/entities/org/api/config'
import { getOrg } from 'src/entities/org/api/getOrg'

export const deleteOrg = async (id: string, token: string | undefined) => {
    if (token) {
        await orgClient.deleteOrganization(id, {headers: {
            Authorization: `Bearer ${token}`
        }})
        await getOrg(token)
    }
}