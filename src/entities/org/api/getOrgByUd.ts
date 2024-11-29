import { orgClient } from 'src/entities/org/api/config'

export const getOrgById = async (id: string | undefined, token: string | undefined) => {
    if (id && token) {
        const {data} =  await orgClient.getOrganizationById(id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
}