import { Organization } from 'src/services-api'
import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

interface OrgState {
    data: Organization[]
}


interface OrgActions {
    setData: (data: Organization[]) => void
}


export const useOrgStore = create<OrgActions & OrgState>()(immer(set => ({
    data: [],
    setData: (data) => {
        set({data})
    }
})))

