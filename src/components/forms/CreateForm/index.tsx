import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useCreateModal } from '@/hooks/useCreateModal'
import { CreateLink, CreateLinkSchema } from '@/schemas/create'
import { useLinks } from '@/store/links'
import { zodResolver } from '@hookform/resolvers/zod'
import { nanoid } from 'nanoid'
import { Controller, useForm } from 'react-hook-form'

export default function CreateForm() {
  const { control, handleSubmit } = useForm({
    values: { title: '', url: '', description: '', showImage: false },
    resolver: zodResolver(CreateLinkSchema),
  })

  const { close } = useCreateModal()
  const { addLink } = useLinks()

  const onSubmit = (values: CreateLink) => {
    const validateValues = CreateLinkSchema.safeParse(values)

    if (validateValues.success) {
      addLink({
        id: nanoid(),
        ...validateValues.data,
      })
      close()
    }

    if (!validateValues.success) {
      console.error(validateValues.error.errors)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title" className="block text-primary-dark">
          Nombre
        </label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="title"
              type="text"
              placeholder="Mi nuevo enlace"
            />
          )}
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-primary-dark">
          Descripción
        </label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="description"
              type="text"
              placeholder="Mi nuevo enlace es..."
            />
          )}
        />
      </div>
      <div>
        <label htmlFor="url" className="block text-primary-dark">
          URL
        </label>
        <Controller
          name="url"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="url"
              type="url"
              placeholder="https://mi-nuevo-enlace.com"
            />
          )}
        />
      </div>
      <div>
        <label htmlFor="showImage" className="block text-primary-dark">
          Mostrar imagen en la vista previa
        </label>
        <Controller
          name="showImage"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="showImage"
              type="checkbox"
              value={field.value ? 'true' : 'false'}
              placeholder="https://mi-nuevo-enlace.com"
            />
          )}
        />
      </div>
      <div className="flex w-full flex-row justify-end">
        <Button type="submit">Crear</Button>
      </div>
    </form>
  )
}
