import { create } from 'zustand'

type State = {
  isOpen: boolean
}

type Action = {
  open: () => void
  close: () => void
  toggle: () => void
}

export const useCreateModal = create<State & Action>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
