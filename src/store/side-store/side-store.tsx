import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'


interface SideState {
    isOpen: boolean
}

interface SideActions {
    setOpen: (open: boolean) => void
}

export const useSideStore = create<SideActions & SideState>()(immer(set => ({
    isOpen: true,
    setOpen: (open) => {
        set({isOpen: open})
    },
})))