import { News } from 'src/services-api'
import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

interface NewsState {
    data: News[]
}


interface NewsActions {
    setData: (data: News[]) => void
}


export const useNewsStore = create<NewsActions & NewsState>()(immer(set => ({
    data: [],
    setData: (data) => {
        set({data})
    }
})))

