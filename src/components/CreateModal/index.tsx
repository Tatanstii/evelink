import { useCreateModal } from '@/hooks/useCreateModal'
import Modal from '../ui/Dialog'
import CreateForm from '../forms/CreateForm'

const CREATE_MODAL_TITLE = 'Crear nuevo enlace'

export default function CreateModal() {
  const { isOpen, close } = useCreateModal()

  return (
    <Modal isOpen={isOpen} onClose={close} title={CREATE_MODAL_TITLE}>
      <CreateForm />
    </Modal>
  )
}
