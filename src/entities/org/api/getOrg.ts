import { orgClient } from 'src/entities/org/api/config'
import { useOrgStore } from 'src/store'

export const getOrg = async (token: string | undefined) => {
    if (token) {
        const {data} = await orgClient.getAllOrganizationsForUser({
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        useOrgStore.getState().setData(data)
    }
}