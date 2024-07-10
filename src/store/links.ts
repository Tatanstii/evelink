import { Link } from '@/type'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type State = {
  links: Link[]
}

type Action = {
  addLink: (link: Link) => void
  removeLink: (id: string) => void
  updateLink: (id: string, link: Link) => void
}

export const useLinks = create<State & Action>()(
  persist(
    (set) => ({
      links: [],
      addLink: (link) => set((state) => ({ links: [...state.links, link] })),
      removeLink: (id) =>
        set((state) => ({
          links: state.links.filter((link) => link.id !== id),
        })),
      updateLink: (id, link) =>
        set((state) => ({
          links: state.links.map((l) => (l.id === id ? { ...l, ...link } : l)),
        })),
    }),
    {
      name: 'links',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
