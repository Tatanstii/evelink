import SearchField from '../ui/SearchField'
import Separator from '../ui/Separator'
import { lazy, Suspense, useState } from 'react'
import { useLinks } from '@/store/links'
import { Button } from '../ui/Button'
import { LuPlus } from 'react-icons/lu'
import { useCreateModal } from '@/hooks/useCreateModal'

const Link = lazy(() => import('../ui/Link'))

export default function LinkFeed() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { links } = useLinks()
  const { open } = useCreateModal()

  const handleOnSearch = (value: string) => {
    setSearchTerm(value)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex-1 gap-10">
          <SearchField onChange={handleOnSearch} />
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="default" title="Agregar nuevo enlace" onClick={open}>
            <LuPlus className="default__icon" />
          </Button>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-linkFeed gap-5">
        <Suspense fallback={<div>Cargando...</div>}>
          {links
            .filter((link) =>
              link.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((link) => (
              <Link key={link.id} link={link} />
            ))}
        </Suspense>
      </div>
    </div>
  )
}
